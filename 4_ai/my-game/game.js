console.log("피카츄 배구 게임 시작!");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

console.log('캔버스와 컨텍스트가 준비되었습니다.');

// 게임 상수 정의
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const groundY = canvasHeight - 50; // 땅의 Y 좌표
const GRAVITY = 0.5;
const PLAYER_JUMP_STRENGTH = -12;
const PLAYER_SPEED = 5;
const AI_SPEED = 4; // AI 이동 속도
const BALL_SPEED = 7; // 공의 기본 속도

// 눌린 키 상태
const keys = {};
document.addEventListener('keydown', (e) => keys[e.code] = true);
document.addEventListener('keyup', (e) => keys[e.code] = false);

// 게임 요소 정의
// 플레이어
const player1 = {
    x: 150,
    y: groundY,
    width: 50,
    height: 50,
    color: 'red',
    vx: 0, // x축 속도
    vy: 0  // y축 속도
};

const player2 = {
    x: canvasWidth - 200,
    y: groundY,
    width: 50,
    height: 50,
    color: 'blue',
    vx: 0,
    vy: 0
};

// 공
const ball = {
    x: canvasWidth / 2,
    y: 100,
    radius: 15,
    color: 'yellow',
    vx: (Math.random() - 0.5) * 4, // 초기 x 속도
    vy: (Math.random() - 0.5) * 4  // 초기 y 속도
};

// 네트
const net = {
    x: canvasWidth / 2 - 2.5,
    y: groundY - 100,
    width: 5,
    height: 100,
    color: 'grey'
}

// 그리기 함수들
function drawCourt() {
    // 배경
    ctx.fillStyle = '#90ee90'; // 연두색 배경
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // 땅
    ctx.fillStyle = '#d2b48c'; // 흙색
    ctx.fillRect(0, groundY, canvasWidth, canvasHeight - groundY);
    // 네트
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

// 위치 업데이트 함수
function updatePlayer1() {
    // 좌우 이동
    if (keys['ArrowLeft']) {
        player1.vx = -PLAYER_SPEED;
    } else if (keys['ArrowRight']) {
        player1.vx = PLAYER_SPEED;
    } else {
        player1.vx = 0;
    }
    // 점프
    if (keys['ArrowUp'] && player1.y === groundY) {
        player1.vy = PLAYER_JUMP_STRENGTH;
    }
    // 중력 적용
    player1.vy += GRAVITY;
    // 위치 업데이트
    player1.x += player1.vx;
    player1.y += player1.vy;
    // 경계 처리
    if (player1.y > groundY) {
        player1.y = groundY;
        player1.vy = 0;
    }
    if (player1.x - player1.width / 2 < 0) {
        player1.x = player1.width / 2;
    }
    if (player1.x + player1.width / 2 > net.x) {
        player1.x = net.x - player1.width / 2;
    }
}

function updatePlayer2AI() {
    // 공이 오른쪽에 있을 때만 반응
    if (ball.x > canvasWidth / 2) {
        if (ball.x > player2.x + player2.width / 4) {
            player2.vx = AI_SPEED;
        } else if (ball.x < player2.x - player2.width / 4) {
            player2.vx = -AI_SPEED;
        } else {
            player2.vx = 0;
        }
    } else {
        player2.vx = 0; // 공이 넘어오면 움직이지 않음
    }
    
    // 중력 적용 (AI는 점프하지 않으므로 간단하게)
    player2.y += player2.vy;
    if (player2.y < groundY) {
        player2.vy += GRAVITY;
    } else {
        player2.y = groundY;
        player2.vy = 0;
    }

    // 위치 업데이트
    player2.x += player2.vx;

    // 경계 처리
    if (player2.x - player2.width / 2 < net.x + net.width) {
        player2.x = net.x + net.width + player2.width / 2;
    }
    if (player2.x + player2.width / 2 > canvasWidth) {
        player2.x = canvasWidth - player2.width / 2;
    }
}


function updateBall() {
    // 중력 적용
    ball.vy += GRAVITY;

    // 위치 업데이트
    ball.x += ball.vx;
    ball.y += ball.vy;

    // 벽 충돌
    if (ball.x + ball.radius > canvasWidth || ball.x - ball.radius < 0) {
        ball.vx *= -1;
    }
    // 천장 충돌
    if (ball.y - ball.radius < 0) {
        ball.vy *= -1;
    }
    // 땅 충돌
    if (ball.y + ball.radius > groundY) {
        ball.y = groundY - ball.radius;
        ball.vy *= -0.8; // 탄성 적용
    }

    // 네트 충돌
    if (ball.x > net.x - ball.radius && ball.x < net.x + net.width + ball.radius && ball.y > net.y - ball.radius) {
        // 네트 상단 충돌
        if (ball.vy > 0 && ball.y - ball.radius < net.y) {
            ball.vy *= -1;
            ball.y = net.y - ball.radius;
        } else { // 네트 옆면 충돌
            ball.vx *= -1;
            ball.x += ball.vx; // 겹치지 않게 살짝 밀어냄
        }
    }

    // 플레이어 1 충돌
    handleCollision(player1);
    
    // 플레이어 2 충돌
    handleCollision(player2);
}

function handleCollision(player) {
    // 플레이어와 공 사이의 거리 계산
    const playerTop = player.y - player.height;
    const playerLeft = player.x - player.width / 2;
    const closestX = Math.max(playerLeft, Math.min(ball.x, playerLeft + player.width));
    const closestY = Math.max(playerTop, Math.min(ball.y, playerTop + player.height));
    
    const distanceX = ball.x - closestX;
    const distanceY = ball.y - closestY;
    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    if (distanceSquared < ball.radius * ball.radius) {
        // 충돌 발생
        const angle = Math.atan2(ball.y - (player.y - player.height/2), ball.x - player.x);
        ball.vx = Math.cos(angle) * BALL_SPEED;
        ball.vy = Math.sin(angle) * BALL_SPEED;
    }
}

// 메인 게임 루프
function gameLoop() {
    // 1. 상태 업데이트
    updatePlayer1();
    updatePlayer2AI();
    updateBall();

    // 2. 화면 지우기
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 3. 요소 그리기
    drawCourt();
    drawPlayer(player1);
    drawPlayer(player2);
    drawBall();
    
    // 4. 다음 프레임 요청
    requestAnimationFrame(gameLoop);
}

// 게임 시작
gameLoop();
