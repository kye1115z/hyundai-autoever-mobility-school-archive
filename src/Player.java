import java.util.ArrayList;
import java.util.List;

public class Player {
    private String name;
    private List<Card> hand = new ArrayList<>();
    private boolean isHuman;

    public Player(String name, boolean isHuman) {
        this.name = name;
        this.isHuman = isHuman;
    }

    public String getName() {
        return name;
    }

    public boolean isHuman() {
        return isHuman;
    }

    // 카드 한 장 받기
    public void draw(Card card) {
        hand.add(card);
    }

    public Card getCard(int index) {
        return hand.get(index);
    }

    public void removeCard(Card card) {
        hand.remove(card);
    }

    public void showHand() {
        System.out.println(name + "의 패: ");
        for(int i=0; i<hand.size(); i++) {
            System.out.print("[" + (i+1) + "] " + hand.get(i) + "\n");
        }
        System.out.println();
    }

    public Card playBot(Card topCard) {
        for (Card card: hand) {
            if (card.canPlayOn(topCard)) {
                hand.remove(card);
                return card;
            }
        }
        return null;
    }

    //  방어 카드
    public Card playBotDefense(Card topCard) {
        for(Card card: hand) {
            if (card instanceof PlayingCard && topCard instanceof PlayingCard) {
                PlayingCard myCard = (PlayingCard) card;
                PlayingCard target = (PlayingCard) topCard;

                if (myCard.getRank() == target.getRank()) {
                    hand.remove(card);
                    return card;
                }
            }
        }
        return null;
    }

    public int handSize() {
        return  hand.size();
    }
}
