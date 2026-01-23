import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Deck {
    // 1.
    private List<Card> cards = new ArrayList<>();

    public Deck() {
        createCard();
        shuffle();
    }

    private void createCard() {
        for (Suit suit : Suit.values()) {
            for (Rank rank: Rank.values()) {
                cards.add(new PlayingCard(suit, rank));
            }
        }
    }

    private  void shuffle() {
        Collections.shuffle(cards);
    }

    public Card draw() {
        return cards.remove(0);
    }

    public int size() {
        return cards.size();
    }


}
