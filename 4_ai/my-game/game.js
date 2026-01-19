// Canvas 설정
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 게임 상태
const gameState = {
  mode: "menu", // 'menu', 'playing', 'gameRoom'
  gameType: null, // 'single' 또는 'multi'
};

// 게임 루프
function gameLoop() {
  // 화면 지우기
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 현재 모드에 따라 화면 그리기
  if (gameState.mode === "menu") {
    drawMenuScreen();
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
      gameState.mode = "gameRoom";
    }
  }
});

// 게임 시작
gameLoop();
