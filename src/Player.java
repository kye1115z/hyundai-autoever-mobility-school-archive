import java.util.ArrayList;
import java.util.List;

public class Player {
    private String name;
    private List<Card> hand = new ArrayList<>();

    public Player(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // 카드 한 장 받기
    public void draw(Card card) {
        hand.add(card);
    }

    public void showHand() {
        for(Card card: hand) {
            System.out.println(card);
        }
    }

    // 낼 수 있는 카드 하나 내기
    public Card play(Card topCard) {
        for (Card card: hand) {
            if (card.canPlayOn(topCard)) {
                hand.remove(card);
                return card;
            }
        }
        return null;
    }

    public int handSize() {
        return  hand.size();
    }
}
