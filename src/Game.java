import java.util.ArrayList;
import java.util.List;

public class Game {

    private Deck deck;
    private List<Player> players = new ArrayList<>();
    private int currentPlayerIndex = 0;
    private int direction = 1;
    private Player player;
    private Card topCard;
    private int pendingDraw = 0;


    // 생성자(덱과 플레이어 생성)
    public Game() {
        deck = new Deck();
        players.add(new Player("YE"));
        players.add(new Player("MT"));
        players.add(new Player("SJ"));
        players.add(new Player("HE"));
    }

    // 게임 세팅(카드 7장씩 분배, 시작 카드 지정)
    public void start() {
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
            playTurn();
            moveToNextPlayer();
        }
    };

    private void playTurn() {
        Player current = players.get(currentPlayerIndex);

        System.out.println("\n👉 현재 플레이어: " + current.getName());
        System.out.println("테이블 카드: " + topCard);

        current.showHand();

        Card played = current.play(topCard);

        if (played != null) {
            topCard = played;
            played.applyEffect(this);
        } else {
            Card drawn = deck.draw();
            current.draw(drawn);
            System.out.println(current.getName() + "이(가) 카드 한 장 뽑음");
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


}
