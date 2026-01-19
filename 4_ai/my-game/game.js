// DOM 요소 가져오기
const mainMenu = document.getElementById("mainMenu");
const onePlayerModeButton = document.getElementById("onePlayerModeButton");
const twoPlayerModeButton = document.getElementById("twoPlayerModeButton");
const twoPlayerLobby = document.getElementById("twoPlayerLobby");
const createRoomButton = document.getElementById("createRoomButton");
const joinRoomButton = document.getElementById("joinRoomButton");
const roomInput = document.getElementById("roomInput");
const roomStatus = document.getElementById("roomStatus");
const backToMenuButton = document.getElementById("backToMenuButton");
const gameStatus = document.getElementById("gameStatus");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const screens = [mainMenu, twoPlayerLobby, canvas, gameStatus];

// --- 웹소켓 ---
let ws;

// --- 게임 코드 시작 ---
let gameMode = null; // '1P' or '2P'
let playerIndex = null;

// 게임 상수 정의
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const groundY = canvasHeight - 50;
const GRAVITY = 0.5;
const PLAYER_JUMP_STRENGTH = -12;
const PLAYER_SPEED = 5;
const PLAYER_SLIDE_SPEED = 12; // Z키와 함께 눌렀을 때 슬라이드 속도
const SLIDE_MAX_DISTANCE = 130; // 최대 슬라이드 거리
const SLIDE_DURATION = 200; // 슬라이드 지속 시간 (ms)
const AI_SPEED = 4;
const BALL_SPEED = 7;
const PIKACHU_BOUNCE_STRENGTH = -15; // 피카츄 배구 스타일 바운스

// 게임 상태
let player1Score = 0;
let player2Score = 0;
let isScoring = false;
let gameEnded = false;
let endGameMessage = "";

// 슬라이드 상태
let slideActive = false;
let slideDirection = 0; // -1 (왼쪽), 0 (없음), 1 (오른쪽)
let slideDistance = 0; // 현재까지 슬라이드한 거리
let slideStartTime = 0; // 슬라이드 시작 시간
let zKeyPressed = false; // Z키 이전 상태 추적

// 눌린 키 상태
const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.code] = true;

  // 게임 종료 후 엔터 키로 메뉴로 돌아가기
  if (gameEnded && e.code === "Enter") {
    gameEnded = false;
    endGameMessage = "";
    player1Score = 0;
    player2Score = 0;
    gameMode = null; // 게임 루프 중단
    showScreen(mainMenu);
  }
});
document.addEventListener("keyup", (e) => (keys[e.code] = false));

// 게임 요소 정의
const player1 = {
  x: 150,
  y: groundY,
  width: 60,
  height: 60,
  color: "red",
  vx: 0,
  vy: 0,
};
const player2 = {
  x: canvasWidth - 200,
  y: groundY,
  width: 60,
  height: 60,
  color: "blue",
  vx: 0,
  vy: 0,
};
const ball = {
  x: canvasWidth / 2,
  y: 100,
  radius: 15,
  color: "yellow",
  vx: 0,
  vy: 0,
};
const net = {
  x: canvasWidth / 2 - 2.5,
  y: groundY - 100,
  width: 5,
  height: 100,
  color: "grey",
};

// --- UI 관리 ---
function showScreen(screenElement) {
  screens.forEach((s) => {
    if (s && s.classList) {
      s.classList.add("hidden");
    }
  });
  if (screenElement && screenElement.classList) {
    screenElement.classList.remove("hidden");
  }
}

function resetRound() {
  isScoring = true;

  if (gameMode === "1P" || (gameMode === "2P" && playerIndex === 0)) {
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

      if (gameMode === "2P") {
        sendBallUpdate();
        sendScoreUpdate();
      }
    }, 500);
  }
}

function drawCourt() {
  ctx.fillStyle = "#90ee90";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = "#d2b48c";
  ctx.fillRect(0, groundY, canvasWidth, canvasHeight - groundY);
  ctx.fillStyle = net.color;
  ctx.fillRect(net.x, net.y, net.width, net.height);
}

function drawPlayer(player) {
  ctx.fillStyle = player.color;
  ctx.fillRect(
    player.x - player.width / 2,
    player.y - player.height,
    player.width,
    player.height,
  );
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

function drawScores() {
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText(`${player1Score} : ${player2Score}`, canvasWidth / 2, 50);
}

function drawGameStatus() {
  if (!gameStatus.classList.contains("hidden")) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.fillText(gameStatus.textContent, canvasWidth / 2, canvasHeight / 2);
  }
}

function updatePlayer1() {
  const prevX = player1.x;

  // Z키가 처음 눌려졌을 때만 슬라이드 시작
  const zNowPressed = keys["KeyZ"];
  if (zNowPressed && !zKeyPressed && player1.y === groundY && !slideActive) {
    slideActive = true;
    slideStartTime = performance.now();
    slideDirection = 0;
    if (keys["ArrowLeft"]) slideDirection = -1;
    else if (keys["ArrowRight"]) slideDirection = 1;
    slideDistance = 0;
  }
  zKeyPressed = zNowPressed; // Z키 상태 업데이트

  // 슬라이드 애니메이션 처리
  if (slideActive) {
    const elapsed = performance.now() - slideStartTime;
    const progress = Math.min(elapsed / SLIDE_DURATION, 1); // 0 ~ 1

    // 감속 함수: easeOut (처음엔 빠르고 끝에서 느려짐)
    const easeOutProgress = 1 - Math.pow(1 - progress, 3);
    const targetDistance = SLIDE_MAX_DISTANCE * easeOutProgress;
    const moveAmount = targetDistance - slideDistance;

    player1.x += slideDirection * moveAmount;
    slideDistance = targetDistance;
    player1.vx = 0; // 슬라이드 중에는 다른 움직임 없음

    if (progress >= 1) {
      slideActive = false;
      slideDirection = 0;
      slideDistance = 0;
    }
  } else {
    // 일반 움직임
    if (keys["ArrowLeft"]) player1.vx = -PLAYER_SPEED;
    else if (keys["ArrowRight"]) player1.vx = PLAYER_SPEED;
    else player1.vx = 0;
  }

  // 점프 (슬라이드 중이 아닐 때만)
  if (keys["ArrowUp"] && player1.y === groundY && !slideActive)
    player1.vy = PLAYER_JUMP_STRENGTH;

  player1.vy += GRAVITY;
  player1.x += player1.vx;
  player1.y += player1.vy;

  if (player1.y > groundY) {
    player1.y = groundY;
    player1.vy = 0;
  }
  // 플레이어 1의 경계 처리
  if (playerIndex === 0 || gameMode === "1P") {
    if (player1.x - player1.width / 2 < 0) player1.x = player1.width / 2;
    if (player1.x + player1.width / 2 > net.x)
      player1.x = net.x - player1.width / 2;
  } else {
    // playerIndex === 1
    if (player1.x - player1.width / 2 < net.x + net.width)
      player1.x = net.x + net.width + player1.width / 2;
    if (player1.x + player1.width / 2 > canvasWidth)
      player1.x = canvasWidth - player1.width / 2;
  }

  if (gameMode === "2P" && player1.x !== prevX) {
    sendPlayerUpdate();
  }
}

function updatePlayer2() {
  // 2P 모드에서는 서버로부터 위치를 받으므로 업데이트하지 않음
}

function updatePlayer2AI() {
  if (ball.x > canvasWidth / 2) {
    if (ball.x > player2.x + player2.width / 4) player2.vx = AI_SPEED;
    else if (ball.x < player2.x - player2.width / 4) player2.vx = -AI_SPEED;
    else player2.vx = 0;
  } else {
    if (player2.x > canvasWidth * 0.75) {
      player2.vx = -AI_SPEED;
    } else {
      player2.vx = 0;
    }
  }

  // AI 점프 로직 (공이 특정 높이 이상이고 가까이 있을 때)
  if (
    ball.y < player2.y - player2.height &&
    ball.x > player2.x - 50 &&
    ball.x < player2.x + 50 &&
    player2.y === groundY
  ) {
    player2.vy = PLAYER_JUMP_STRENGTH;
  }

  player2.y += player2.vy;
  if (player2.y < groundY) {
    player2.vy += GRAVITY;
  } else {
    player2.y = groundY;
    player2.vy = 0;
  }
  player2.x += player2.vx;

  if (player2.x - player2.width / 2 < net.x + net.width)
    player2.x = net.x + net.width + player2.width / 2;
  if (player2.x + player2.width / 2 > canvasWidth)
    player2.x = canvasWidth - player2.width / 2;
}

function updateBall() {
  // 2P 모드에서는 player 1 (방장)만 공 물리 계산
  if (gameMode === "1P" || (gameMode === "2P" && playerIndex === 0)) {
    ball.vy += GRAVITY;
    ball.x += ball.vx;
    ball.y += ball.vy;

    // 땅에 닿았을 때
    if (ball.y + ball.radius > groundY) {
      if (ball.x < canvasWidth / 2) {
        // player 2 진영
        player2Score++;
      } else {
        // player 1 진영
        player1Score++;
      }

      // 15점 도달 시 게임 종료
      if (player1Score >= 15) {
        endGame("플레이어 1 승리!");
        return;
      }
      if (player2Score >= 15) {
        endGame("플레이어 2 승리!");
        return;
      }

      if (gameMode === "2P") sendScoreUpdate();
      resetRound();
      return;
    }

    // 벽에 닿았을 때
    if (ball.x + ball.radius > canvasWidth || ball.x - ball.radius < 0) {
      ball.vx *= -1;
    }
    if (ball.y - ball.radius < 0) {
      // 천장
      ball.vy *= -1;
    }

    // 네트에 닿았을 때
    if (
      ball.x > net.x - ball.radius &&
      ball.x < net.x + net.width + ball.radius &&
      ball.y > net.y - ball.radius
    ) {
      if (ball.y > net.y) {
        // 네트 옆면
        ball.vx *= -1;
        ball.x += ball.vx * 2;
      } else {
        // 네트 윗면
        ball.vy *= -0.8;
        ball.y = net.y - ball.radius;
      }
    }

    handleCollision(player1);
    handleCollision(player2);

    if (gameMode === "2P") {
      sendBallUpdate();
    }
  }
}

function handleCollision(player) {
  const playerTop = player.y - player.height;
  const playerLeft = player.x - player.width / 2;

  const closestX = Math.max(
    playerLeft,
    Math.min(ball.x, playerLeft + player.width),
  );
  const closestY = Math.max(
    playerTop,
    Math.min(ball.y, playerTop + player.height),
  );

  const distanceX = ball.x - closestX;
  const distanceY = ball.y - closestY;
  const distanceSquared = distanceX * distanceX + distanceY * distanceY;

  if (distanceSquared < ball.radius * ball.radius) {
    // 머리에 맞았을 때 (공이 플레이어 위쪽에 있을 때)
    if (closestY === playerTop) {
      ball.vy = PIKACHU_BOUNCE_STRENGTH;
      const direction = ball.x < player.x ? -1 : 1;
      ball.vx = Math.abs(ball.vx) * direction * 1.5;
    } else {
      // 몸통에 맞았을 때
      const angle = Math.atan2(
        ball.y - (player.y - player.height / 2),
        ball.x - player.x,
      );
      ball.vx = Math.cos(angle) * BALL_SPEED;
      ball.vy = Math.sin(angle) * BALL_SPEED;
    }
  }
}

// 게임 종료 함수
function endGame(message) {
  gameEnded = true;
  endGameMessage = message;
}

function gameLoop() {
  if (!gameMode) return;

  if (!isScoring) {
    updatePlayer1();
    if (gameMode === "1P") {
      updatePlayer2AI();
    } else {
      // 2P
      // updatePlayer2(); // 상대방 정보는 웹소켓으로 받음
    }
    updateBall();
  }

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawCourt();
  drawPlayer(player1);
  drawPlayer(player2);
  drawBall();
  drawScores();
  drawGameStatus();

  // 게임 종료 메시지 표시
  if (gameEnded) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "white";
    ctx.font = "bold 60px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(endGameMessage, canvasWidth / 2, canvasHeight / 2);

    ctx.font = "24px Arial";
    ctx.fillText(
      "메뉴로 돌아가려면 엔터를 누르세요",
      canvasWidth / 2 - 20,
      canvasHeight / 2 + 60,
    );
  }

  requestAnimationFrame(gameLoop);
}

function startGame(mode) {
  gameMode = mode;
  showScreen(canvas); // 여기서 canvas 화면 표시
  player2Score = 0;

  resetRound();
  if (!gameLoop.__started) {
    gameLoop();
    gameLoop.__started = true;
  }
}

// --- 웹소켓 통신 ---
function connectWebSocket() {
  // ws = new WebSocket('ws://localhost:8080');
  ws = new WebSocket(`ws://${window.location.hostname}:8080`);

  ws.onopen = () => {
    console.log("서버에 연결되었습니다.");
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const { type, payload } = data;

    switch (type) {
      case "room_created":
        roomStatus.textContent = `방이 만들어졌습니다. 방 번호: ${payload.roomId}`;
        roomInput.value = payload.roomId;
        createRoomButton.disabled = true;
        joinRoomButton.disabled = true;
        break;
      case "game_start":
        playerIndex = payload.playerIndex;
        // 나의 플레이어 객체를 서버가 지정해준 위치에 따라 설정
        if (playerIndex === 0) {
          // 나는 player1
        } else {
          // playerIndex === 1
          // 나는 player2, player1과 player2의 역할을 바꿈
          // 키 입력이 player2를 조종하도록 하거나, player1 객체 자체를 오른쪽으로 옮김
          player1.x = canvasWidth - 150; // 오른쪽 진영으로 이동
          player1.color = "blue";
          player2.x = 150; // 상대방(원래 player1)은 왼쪽으로
          player2.color = "red";
        }
        startGame("2P");
        break;
      case "update_opponent":
        player2.x = payload.x;
        player2.y = payload.y;
        break;
      case "update_ball":
        if (playerIndex !== 0) {
          // 방장이 아니면 공 위치 업데이트
          ball.x = payload.x;
          ball.y = payload.y;
          ball.vx = payload.vx;
          ball.vy = payload.vy;
        }
        break;
      case "update_score":
        player1Score = payload.player1Score;
        player2Score = payload.player2Score;
        break;
      case "opponent_disconnected":
        gameMode = null;
        showScreen(mainMenu);
        alert("상대방의 연결이 끊겼습니다.");
        break;
      case "error":
        roomStatus.textContent = `오류: ${payload.message}`;
        break;
    }
  };

  ws.onclose = () => {
    console.log("서버와 연결이 끊겼습니다.");
    if (gameMode === "2P") {
      gameMode = null;
      showScreen(mainMenu);
      alert("서버와 연결이 끊겼습니다.");
    }
  };

  ws.onerror = (error) => {
    console.error("WebSocket 오류:", error);
    roomStatus.textContent = "서버에 연결할 수 없습니다.";
  };
}

function sendPlayerUpdate() {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(
      JSON.stringify({
        type: "update_player",
        payload: { x: player1.x, y: player1.y },
      }),
    );
  }
}
function sendBallUpdate() {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(
      JSON.stringify({
        type: "update_ball",
        payload: { x: ball.x, y: ball.y, vx: ball.vx, vy: ball.vy },
      }),
    );
  }
}
function sendScoreUpdate() {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(
      JSON.stringify({
        type: "update_score",
        payload: { player1Score, player2Score },
      }),
    );
  }
}

// --- 이벤트 리스너 ---
onePlayerModeButton.addEventListener("click", () => {
  mainMenu.classList.add("hidden");
  startGame("1P");
});

twoPlayerModeButton.addEventListener("click", () => {
  showScreen(twoPlayerLobby);
  connectWebSocket();
});

createRoomButton.addEventListener("click", () => {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: "create_room" }));
  } else {
    roomStatus.textContent = "서버에 연결되지 않았습니다.";
  }
});

joinRoomButton.addEventListener("click", () => {
  const roomId = roomInput.value.trim();
  if (roomId && ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: "join_room", payload: { roomId } }));
    roomStatus.textContent = `${roomId}번 방에 참가를 시도합니다...`;
  } else if (!roomId) {
    roomStatus.textContent = "방 번호를 입력하세요.";
  } else {
    roomStatus.textContent = "서버에 연결되지 않았습니다.";
  }
});

backToMenuButton.addEventListener("click", () => showScreen(mainMenu));

// 초기 화면 설정
showScreen(mainMenu);
