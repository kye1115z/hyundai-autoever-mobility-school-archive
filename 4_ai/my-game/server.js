// 2인용 피카츄 배구 서버
// 실행 전 'npm install ws' 를 통해 웹소켓 라이브러리를 설치해주세요.
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// 활성화된 게임 방 목록
// rooms = { '1234': { players: [ws1, ws2] }, ... }
const rooms = {};

console.log('피카츄 배구 서버가 8080 포트에서 시작되었습니다. ⚡️');

wss.on('connection', (ws) => {
    console.log('[연결] 새로운 클라이언트가 연결되었습니다.');
    ws.roomId = null; // 클라이언트가 속한 방 ID

    ws.on('message', (message) => {
        let data;
        try {
            data = JSON.parse(message);
        } catch (error) {
            console.error('[오류] 잘못된 JSON 메시지 형식입니다:', message);
            return;
        }

        const { type, payload } = data;
        const room = ws.roomId ? rooms[ws.roomId] : null;

        // console.log(`[메시지 수신] 타입: ${type}, 방 ID: ${ws.roomId}`);

        switch (type) {
            case 'create_room':
                handleCreateRoom(ws);
                break;

            case 'join_room':
                handleJoinRoom(ws, payload);
                break;

            case 'update_player':
                if (room) {
                    // 상대방에게만 플레이어 위치 정보 전송
                    room.players.forEach(player => {
                        if (player !== ws && player.readyState === WebSocket.OPEN) {
                            player.send(JSON.stringify({ type: 'update_opponent', payload }));
                        }
                    });
                }
                break;

            case 'update_ball':
                if (room) {
                     // 방장(player 0)이 보낸 공 정보만 상대방에게 전송
                    if (room.players[0] === ws) {
                        const otherPlayer = room.players[1];
                        if (otherPlayer && otherPlayer.readyState === WebSocket.OPEN) {
                           otherPlayer.send(JSON.stringify({ type: 'update_ball', payload }));
                        }
                    }
                }
                break;
            
            case 'update_score':
                 if (room) {
                    // 모든 플레이어에게 점수 정보 전송
                    room.players.forEach(player => {
                        if (player.readyState === WebSocket.OPEN) {
                             player.send(JSON.stringify({ type: 'update_score', payload }));
                        }
                    });
                }
                break;

            default:
                console.log(`[알 수 없는 타입] ${type}`);
        }
    });

    ws.on('close', () => {
        console.log(`[연결 종료] 클라이언트 연결이 끊겼습니다. 방 ID: ${ws.roomId}`);
        if (ws.roomId && rooms[ws.roomId]) {
            const room = rooms[ws.roomId];
            const remainingPlayer = room.players.find(player => player !== ws);

            if (remainingPlayer && remainingPlayer.readyState === WebSocket.OPEN) {
                // 남아있는 플레이어에게 상대방의 연결 끊김을 알림
                remainingPlayer.send(JSON.stringify({ type: 'opponent_disconnected' }));
            }
            // 방 삭제
            delete rooms[ws.roomId];
            console.log(`[방 삭제] ${ws.roomId} 방이 삭제되었습니다.`);
        }
    });

     ws.on('error', (error) => {
        console.error('[웹소켓 오류] 오류가 발생했습니다:', error);
    });
});

function handleCreateRoom(ws) {
    const roomId = generateRoomId();
    rooms[roomId] = { players: [ws] };
    ws.roomId = roomId;
    
    ws.send(JSON.stringify({ type: 'room_created', payload: { roomId } }));
    console.log(`[방 생성] 플레이어가 ${roomId}번 방을 생성했습니다.`);
}

function handleJoinRoom(ws, payload) {
    const { roomId } = payload;
    const room = rooms[roomId];

    if (room && room.players.length < 2) {
        room.players.push(ws);
        ws.roomId = roomId;

        console.log(`[방 참가] 새로운 플레이어가 ${roomId}번 방에 참가했습니다.`);

        // 두 플레이어 모두에게 게임 시작 메시지를 전송
        room.players.forEach((player, index) => {
            player.send(JSON.stringify({
                type: 'game_start',
                payload: { playerIndex: index } // 0번: 방장, 1번: 참가자
            }));
        });
        console.log(`[게임 시작] ${roomId}번 방의 게임을 시작합니다.`);

    } else {
        const message = room ? '방이 꽉 찼습니다.' : '존재하지 않는 방입니다.';
        ws.send(JSON.stringify({ type: 'error', payload: { message } }));
        console.log(`[참가 실패] ${roomId}번 방 참가에 실패했습니다: ${message}`);
    }
}


function generateRoomId() {
    // 간단한 4자리 숫자 방 ID 생성
    return Math.floor(1000 + Math.random() * 9000).toString();
}