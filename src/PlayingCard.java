public class PlayingCard extends Card {
    private Suit suit;
    private final Rank rank;

    public PlayingCard(Suit suit, Rank rank) {
        this.suit = suit;
        this.rank = rank;
    }

    // 7 문양 바꾸기
    public void setSuit(Suit suit) {
        this.suit = suit;
    }

    public Suit getSuit() {
        return suit;
    }

    public Rank getRank() {
        return rank;
    }


    @Override
    public String toString() {
        return suit + " " + rank;
    }

    @Override
    public boolean canPlayOn(Card topCard) {
            if (!(topCard instanceof PlayingCard other)) return false;

            PlayingCard top = (PlayingCard) topCard;
            return this.suit == top.suit || this.rank == top.rank;
    }



    @Override
    public void applyEffect(Game game) {
        if(rank == Rank.TWO) {
            System.out.println("💥 2 카드! 카드 +2");
            game.addAttack(2);
        }

        if (rank == Rank.ACE) {
            System.out.println("💥 ACE 카드! 카드 +3");
            game.addAttack(3);
        };

        if (rank == Rank.JACK) {
            System.out.println("⏭ J 카드! 다음 플레이어 스킵");
            game.skipNextPlayer();
        }

        if (rank == Rank.QUEEN) {
            System.out.println("🔄 Q 카드! 방향 전환");
            game.reverseDirection();
        }

        if (rank == Rank.KING) {
            System.out.println("\uD83D\uDC51 K 카드! 한 번 더");
            game.stayTurn();
        }

        if(rank == Rank.SEVEN) {
            System.out.println("\uD83C\uDF08 7 카드! 문양 변경");
            game.changeSuit();
        }
    }
}
