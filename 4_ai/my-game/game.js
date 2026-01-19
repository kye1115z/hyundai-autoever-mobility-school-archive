console.log("피카츄 배구 게임 시작!");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

console.log('캔버스와 컨텍스트가 준비되었습니다.');

// 게임 상수 정의
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const groundY = canvasHeight - 50; // 땅의 Y 좌표

// 게임 요소 정의
// 플레이어
const player1 = {
    x: 150,
    y: groundY,
    width: 50,
    height: 50,
    color: 'red'
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

// 메인 게임 루프
function gameLoop() {
    // 1. 화면 지우기
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 2. 요소 그리기
    drawCourt();
    drawPlayer(player1);
    drawPlayer(player2);
    drawBall();
    
    // 3. 다음 프레임 요청
    requestAnimationFrame(gameLoop);
}

// 게임 시작
gameLoop();

