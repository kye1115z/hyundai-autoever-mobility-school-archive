// Canvas 설정
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 게임 상태
const gameState = {
  mode: "menu", // 'menu', 'playing', 'gameRoom'
  gameType: null, // 'single' 또는 'multi'
  roomCode: null, // 방 코드
};

// 방 코드 생성 함수
function generateRoomCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// 게임 객체 (레이아웃용)
const game = {
  net: {
    x: null, // 초기화 시 캔버스 기준으로 설정
    y: 120,
    width: 10,
    height: 160,
  },
  player1: {
    x: 150,
    y: 300,
    width: 50,
    height: 50,
    score: 0,
  },
  player2: {
    x: 600,
    y: 300,
    width: 50,
    height: 50,
    score: 0,
  },
  ball: {
    x: 400,
    y: 180,
    radius: 8,
  },
};

// 캔버스 크기에 맞춰 초기 위치 계산
function initLayout() {
  game.net.x = canvas.width / 2;
  game.player2.x = canvas.width - 200;
  game.ball.x = canvas.width / 2;
}

initLayout();

// 게임 루프
function gameLoop() {
  // 화면 지우기
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 현재 모드에 따라 화면 그리기
  if (gameState.mode === "menu") {
    drawMenuScreen();
  } else if (gameState.mode === "gameRoom") {
    drawGameRoomScreen();
  } else if (gameState.mode === "playing") {
    drawGameScreen();
  }

  // 다음 프레임 요청
  requestAnimationFrame(gameLoop);
}

// 메뉴 화면 그리기
function drawMenuScreen() {
  // 배경
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 제목
  ctx.fillStyle = "#000000";
  ctx.font = "bold 48px Arial";
  ctx.textAlign = "center";
  ctx.fillText("피카츄 배구", canvas.width / 2, 80);

  // 설명 텍스트
  ctx.font = "24px Arial";
  ctx.fillText("게임 모드를 선택하세요", canvas.width / 2, 150);

  // 1인 플레이 버튼
  drawButton(150, 240, 200, 80, "1인 플레이", "#FF6B6B");

  // 2인 플레이 버튼
  drawButton(450, 240, 200, 80, "2인 플레이", "#4ECDC4");
}

// 게임 방 화면 그리기
function drawGameRoomScreen() {
  // 배경
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 제목
  ctx.fillStyle = "#000000";
  ctx.font = "bold 36px Arial";
  ctx.textAlign = "center";
  ctx.fillText("멀티플레이 방 만들기", canvas.width / 2, 60);

  // 방 코드 생성 (처음 한 번만)
  if (!gameState.roomCode) {
    gameState.roomCode = generateRoomCode();
  }

  // 방 코드 표시
  ctx.font = "bold 20px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "left";
  ctx.fillText("방 코드:", canvas.width / 2 - 120, 150);

  // 방 코드 박스
  ctx.fillStyle = "#FFD700";
  ctx.fillRect(canvas.width / 2 - 50, 130, 200, 50);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.strokeRect(canvas.width / 2 - 50, 130, 200, 50);

  ctx.font = "bold 28px Arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(gameState.roomCode, canvas.width / 2, 155);

  // 설명 텍스트
  ctx.font = "18px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.fillText("상대방에게 이 코드를 공유하세요", canvas.width / 2, 240);
  ctx.fillText("상대방이 입장할 때까지 기다리는 중...", canvas.width / 2, 270);

  // 뒤로가기 버튼
  drawButton(300, 320, 200, 60, "뒤로가기", "#999999");
}

// 게임 화면 그리기 (플레이 중)
function drawGameScreen() {
  // 배경
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 경기장 바닥
  ctx.fillStyle = "#90EE90";
  ctx.fillRect(0, 150, canvas.width, canvas.height - 150);

  // 네트, 플레이어, 공, 점수판 그리기
  drawNet();
  drawPlayer(game.player1, '#FFCC00');
  drawPlayer(game.player2, '#FFCC00');
  drawBall();
  drawScoreboard();

  // 메뉴로 버튼
  drawButton(300, 320, 200, 60, "메뉴로", "#999999");
}

// 네트 그리기
function drawNet() {
 	const net = game.net;
 	ctx.fillStyle = '#000000';
 	ctx.fillRect(net.x - net.width / 2, net.y, net.width, net.height);

 	// 간단한 그물무늬
 	ctx.strokeStyle = '#666666';
 	ctx.lineWidth = 1;
 	for (let i = 0; i < net.height; i += 16) {
 		ctx.beginPath();
 		ctx.moveTo(net.x - 40, net.y + i);
 		ctx.lineTo(net.x + 40, net.y + i);
 		ctx.stroke();
 	}
}

// 플레이어 그리기 (간단한 피카츄 블록)
function drawPlayer(p, color) {
 	ctx.fillStyle = color;
 	ctx.fillRect(p.x, p.y, p.width, p.height);
 	ctx.strokeStyle = '#000';
 	ctx.lineWidth = 2;
 	ctx.strokeRect(p.x, p.y, p.width, p.height);

 	// 얼굴(눈, 입) 간단 표기
 	ctx.fillStyle = '#000';
 	ctx.fillRect(p.x + 12, p.y + 10, 6, 6);
 	ctx.fillRect(p.x + 32, p.y + 10, 6, 6);
 	ctx.fillRect(p.x + 20, p.y + 30, 10, 3);
}

// 공 그리기
function drawBall() {
 	const b = game.ball;
 	ctx.fillStyle = '#FFFFFF';
 	ctx.beginPath();
 	ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
 	ctx.fill();
 	ctx.strokeStyle = '#FF6B6B';
 	ctx.lineWidth = 2;
 	ctx.stroke();
}

// 점수판 그리기
function drawScoreboard() {
 	ctx.fillStyle = '#FFFFFF';
 	ctx.font = 'bold 28px Arial';
 	ctx.textAlign = 'left';
 	ctx.fillText('P1: ' + game.player1.score, 20, 40);

 	ctx.textAlign = 'right';
 	ctx.fillText('P2: ' + game.player2.score, canvas.width - 20, 40);
}

// 버튼 그리기 헬퍼 함수
function drawButton(x, y, width, height, text, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + width / 2, y + height / 2);
}

// 마우스 클릭 이벤트
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (gameState.mode === "menu") {
    // 1인 플레이 버튼 (150~350, 240~320)
    if (x > 150 && x < 350 && y > 240 && y < 320) {
      gameState.gameType = "single";
      gameState.mode = "playing";
    }
    // 2인 플레이 버튼 (450~650, 240~320)
    else if (x > 450 && x < 650 && y > 240 && y < 320) {
      gameState.gameType = "multi";
      gameState.roomCode = null; // 새 방 코드 생성을 위해 초기화
      gameState.mode = "gameRoom";
    }
  } else if (gameState.mode === "gameRoom") {
    // 뒤로가기 버튼 (300~500, 320~380)
    if (x > 300 && x < 500 && y > 320 && y < 380) {
      gameState.mode = "menu";
      gameState.gameType = null;
      gameState.roomCode = null;
    }
  } else if (gameState.mode === "playing") {
    // 메뉴로 버튼 (300~500, 320~380)
    if (x > 300 && x < 500 && y > 320 && y < 380) {
      gameState.mode = "menu";
      gameState.gameType = null;
    }
  }
});

// 게임 시작
gameLoop();
