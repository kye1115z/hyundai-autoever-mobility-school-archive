import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Game {

    private Deck deck;
    private List<Player> players = new ArrayList<>();
    private int currentPlayerIndex = 0;
    private int direction = 1; // 정방향 1, 역방향 -1
    private Player player;
    private Card topCard;
    private int pendingDraw = 0; // 공격받은 카드 장수

    private Scanner sc = new Scanner(System.in);


    // 생성자(덱과 플레이어 생성)
    public Game() {
        deck = new Deck();
    }

    // 게임 세팅(카드 7장씩 분배, 시작 카드 지정)
    public void start() {
        System.out.println("원카드 게임에 오신 것을 환영합니다.");
        System.out.print("플레이 할 인원 수를 입력하세요.(2~5명) ");
        int playerCount = sc.nextInt();

        System.out.print("플레이어 이름: ");
        String myName = sc.next();
        players.add(new Player("나(" + myName + ")", true));

        for (int i=1; i<playerCount; i++) {
            System.out.print("봇 이름: ");
            String botName = sc.next();
            players.add(new Player(botName, false));
        }

        for (Player player : players) {
            for(int i=0; i<7; i++) {
                player.draw(deck.draw());
            }
        }

        // 시작 카드
        topCard = deck.draw();
        System.out.println("시작 카드: " + topCard);

        playGame();
    }

    // 게임 시작
    private void playGame() {
        while(true) {
            if (isGameOver()) break;
            playTurn();
            moveToNextPlayer();
        }
    };

    private boolean isGameOver() {
        for (Player p: players) {
            if(p.handSize() == 0) {
                System.out.println("\n\uD83C\uDF89 축하드립니다! 우승자는 " + p.getName() + "님입니다.");
                return true;
            }
        }
        return false;
    }

    private void playTurn() {
        // 사용자 선정
        Player current = players.get(currentPlayerIndex);

        // 초기 출력
        System.out.println("\n👉 현재 플레이어: " + current.getName() + " (남은 카드: " + current.handSize() + "장)");
        System.out.println("테이블 카드: " + topCard);

        // 이전 카드가 공격 카드인지 아닌지 확인 및 처리
        if(pendingDraw > 0) System.out.println("⚠️ 공격 받음! 누적 카드: " + pendingDraw + "장");

        if (pendingDraw > 0) {
            // 방어할 카드가 있는지 체크하는 로직은 나중에 추가하자.
            System.out.println("❌ " + current.getName() + "님의 방어 실패! " + pendingDraw + "장을 먹습니다.");
            for(int i=0; i<pendingDraw; i++) {
                current.draw(deck.draw());
            }
            pendingDraw = 0;
            return;
        }

        current.showHand();

        Card playedCard = null;

        if (current.isHuman()) {
            playedCard = processHumanTurn(current);
        } else {
            playedCard = current.playBot(topCard);
        }

        if (playedCard != null) {
            System.out.println("낸 카드: " + playedCard);
            topCard = playedCard;
            playedCard.applyEffect(this);
        } else {
            Card drawn = deck.draw();
            if (drawn != null) {
                current.draw(drawn);
            }
            System.out.println(current.getName() + "님이 카드 1장 뽑았습니다.");
        }
    }

    private Card processHumanTurn(Player player) {
        while (true) {
            System.out.println("낼 카드의 번호를 입력하세요 (0: 카드 뽑기): ");
            int input = sc.nextInt();

            if(input == 0) {
                return null;
            }

            int cardIndex = input - 1;
            if (cardIndex < 0 || cardIndex >= player.handSize()) {
                System.out.println("잘못된 번호입니다. 다시 입력해주세요.");
                continue;
            }

            Card selected = player.getCard(cardIndex);

            if (selected.canPlayOn(topCard)) {
                player.removeCard(selected);
                return selected;
            } else {
                System.out.println("그 카드는 낼 수 없습니다. (무늬나 숫자가 같아야 합니다.)");
            }
        }
    }

    public void moveToNextPlayer() {
        currentPlayerIndex += direction;

        if (currentPlayerIndex < 0) {
            currentPlayerIndex = players.size() - 1;
        } else if (currentPlayerIndex >= players.size()) {
            currentPlayerIndex = 0;
        }
    }

    public void skipNextPlayer() {
        moveToNextPlayer();
    }

    public void reverseDirection() {
        direction *= -1;
    }

    public void addAttack(int amount) {
        this.pendingDraw += amount;
    }
}
