// DOM 요소 가져오기
const mainMenu = document.getElementById('mainMenu');
const onePlayerButton = document.getElementById('onePlayerButton');
const twoPlayerButton = document.getElementById('twoPlayerButton');
const gameTitle = document.getElementById('gameTitle');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// --- 게임 코드 시작 ---
let gameMode = null; // '1P' or '2P'

// 게임 상수 정의
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const groundY = canvasHeight - 50;
const GRAVITY = 0.5;
const PLAYER_JUMP_STRENGTH = -12;
const PLAYER_SPEED = 5;
const AI_SPEED = 4;
const BALL_SPEED = 7;

// 게임 상태
let player1Score = 0;
let player2Score = 0;
let isScoring = false;

// 눌린 키 상태
const keys = {};
document.addEventListener('keydown', (e) => keys[e.code] = true);
document.addEventListener('keyup', (e) => keys[e.code] = false);

// 게임 요소 정의
const player1 = { x: 150, y: groundY, width: 50, height: 50, color: 'red', vx: 0, vy: 0 };
const player2 = { x: canvasWidth - 200, y: groundY, width: 50, height: 50, color: 'blue', vx: 0, vy: 0 };
const ball = { x: canvasWidth / 2, y: 100, radius: 15, color: 'yellow', vx: 0, vy: 0 };
const net = { x: canvasWidth / 2 - 2.5, y: groundY - 100, width: 5, height: 100, color: 'grey' };

function resetRound() {
    isScoring = true;
    setTimeout(() => {
        player1.x = 150;
        player1.y = groundY;
        player1.vx = 0;
        player1.vy = 0;

        player2.x = canvasWidth - 200;
        player2.y = groundY;
        player2.vx = 0;
        player2.vy = 0;
        
        ball.x = canvasWidth / 2;
        ball.y = 100;
        ball.vx = (Math.random() > 0.5 ? 1 : -1) * 3;
        ball.vy = (Math.random() - 0.5) * 4;
        isScoring = false;
    }, 500); // 0.5초 후 리셋
}

function drawCourt() {
    ctx.fillStyle = '#90ee90';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = '#d2b48c';
    ctx.fillRect(0, groundY, canvasWidth, canvasHeight - groundY);
    ctx.fillStyle = net.color;
    ctx.fillRect(net.x, net.y, net.width, net.height);
}

function drawPlayer(player) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - player.width / 2, player.y - player.height, player.width, player.height);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function drawScores() {
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${player1Score} : ${player2Score}`, canvasWidth / 2, 50);
}

function updatePlayer1() {
    if (keys['ArrowLeft']) player1.vx = -PLAYER_SPEED;
    else if (keys['ArrowRight']) player1.vx = PLAYER_SPEED;
    else player1.vx = 0;

    if (keys['ArrowUp'] && player1.y === groundY) player1.vy = PLAYER_JUMP_STRENGTH;
    
    player1.vy += GRAVITY;
    player1.x += player1.vx;
    player1.y += player1.vy;

    if (player1.y > groundY) {
        player1.y = groundY;
        player1.vy = 0;
    }
    if (player1.x - player1.width / 2 < 0) player1.x = player1.width / 2;
    if (player1.x + player1.width / 2 > net.x) player1.x = net.x - player1.width / 2;
}

function updatePlayer2AI() {
    if (ball.x > canvasWidth / 2) {
        if (ball.x > player2.x + player2.width / 4) player2.vx = AI_SPEED;
        else if (ball.x < player2.x - player2.width / 4) player2.vx = -AI_SPEED;
        else player2.vx = 0;
    } else {
        player2.vx = 0;
    }
    
    player2.y += player2.vy;
    if (player2.y < groundY) {
        player2.vy += GRAVITY;
    } else {
        player2.y = groundY;
        player2.vy = 0;
    }
    player2.x += player2.vx;

    if (player2.x - player2.width / 2 < net.x + net.width) player2.x = net.x + net.width + player2.width / 2;
    if (player2.x + player2.width / 2 > canvasWidth) player2.x = canvasWidth - player2.width / 2;
}

function updateBall() {
    ball.vy += GRAVITY;
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y + ball.radius > groundY) {
        if (ball.x < canvasWidth / 2) player2Score++;
        else player1Score++;
        resetRound();
        return;
    }

    if (ball.x + ball.radius > canvasWidth || ball.x - ball.radius < 0) ball.vx *= -1;
    if (ball.y - ball.radius < 0) ball.vy *= -1;

    if (ball.x > net.x - ball.radius && ball.x < net.x + net.width + ball.radius && ball.y > net.y - ball.radius) {
        if (ball.vy > 0 && ball.y - ball.radius < net.y) {
            ball.vy *= -1;
            ball.y = net.y - ball.radius;
        } else {
            ball.vx *= -1;
            ball.x += ball.vx;
        }
    }

    handleCollision(player1);
    if (gameMode === '1P') {
        handleCollision(player2);
    }
}

function handleCollision(player) {
    const playerTop = player.y - player.height;
    const playerLeft = player.x - player.width / 2;
    const closestX = Math.max(playerLeft, Math.min(ball.x, playerLeft + player.width));
    const closestY = Math.max(playerTop, Math.min(ball.y, playerTop + player.height));
    
    const distanceX = ball.x - closestX;
    const distanceY = ball.y - closestY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    if (distanceSquared < ball.radius * ball.radius) {
        const angle = Math.atan2(ball.y - (player.y - player.height/2), ball.x - player.x);
        ball.vx = Math.cos(angle) * BALL_SPEED;
        ball.vy = Math.sin(angle) * BALL_SPEED;
    }
}

function gameLoop() {
    if (gameMode) {
        if (!isScoring) {
            updatePlayer1();
            if (gameMode === '1P') {
                updatePlayer2AI();
            }
            updateBall();
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawCourt();
        drawPlayer(player1);
        drawPlayer(player2);
        drawBall();
        drawScores();
        
        requestAnimationFrame(gameLoop);
    }
}

function startGame(mode) {
    gameMode = mode;
    mainMenu.classList.add('hidden');
    gameTitle.classList.remove('hidden');
    canvas.classList.remove('hidden');
    
    player1Score = 0;
    player2Score = 0;

    resetRound();
    gameLoop();
}

// --- 이벤트 리스너 ---
onePlayerButton.addEventListener('click', () => {
    startGame('1P');
});

twoPlayerButton.addEventListener('click', () => {
    alert('2인 모드는 현재 준비 중입니다.');
});
