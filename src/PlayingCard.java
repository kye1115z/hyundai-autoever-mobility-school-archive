public class PlayingCard extends Card {
    private final Suit suit;
    private final Rank rank;

    public PlayingCard(Suit suit, Rank rank) {
        this.suit = suit;
        this.rank = rank;
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
            System.out.println("💥 2 카드! 즉시 상대가 카드 2장 먹음");
            for (int i = 0; i < 2; i++) {
                game.moveToNextPlayer();
            }
        }

        if (rank == Rank.JACK) {
            System.out.println("⏭ J 카드! 다음 플레이어 스킵");
            game.skipNextPlayer();
        }

        if (rank == Rank.QUEEN) {
            System.out.println("🔄 Q 카드! 방향 전환");
            game.reverseDirection();
        }
    }
}
