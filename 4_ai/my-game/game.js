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
    color: 'blue'
};

// 공
const ball = {
    x: canvasWidth / 2,
    y: 100,
    radius: 15,
    color: 'yellow'
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
    // 땅에 닿으면 멈춤
    if (player1.y > groundY) {
        player1.y = groundY;
        player1.vy = 0;
    }

    // 왼쪽 벽
    if (player1.x - player1.width / 2 < 0) {
        player1.x = player1.width / 2;
    }

    // 오른쪽 (네트)
    if (player1.x + player1.width / 2 > net.x) {
        player1.x = net.x - player1.width / 2;
    }
}


// 메인 게임 루프
function gameLoop() {
    // 1. 상태 업데이트
    updatePlayer1();

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

