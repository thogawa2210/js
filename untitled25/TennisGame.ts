export class TennisGame {
    score: string = '';


    getScore(player1Name: string,
             player2Name: string,
             m_score1: number,
             m_score2: number) {
        let equalScore: boolean = m_score1 == m_score2;
        let longGame = m_score1 >= 4 || m_score2 >= 4;

        if (equalScore) {
            switch (m_score1) {
                case 0:
                    this.score = "Love-All";
                    break;
                case 1:
                    this.score = "Fifteen-All";
                    break;
                case 2:
                    this.score = "Thirty-All";
                    break;
                case 3:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;
            }
        } else if (longGame) {
            this.compareForLongGame(m_score1, m_score2);
        } else {
            this.compareInGame(m_score1, m_score2);
        }
    }

    private compareInGame(m_score1: number, m_score2: number) {
        let tempScore;
        for (let i = 1; i < 3; i++) {
            if (i == 1) tempScore = m_score1;
            else {
                this.score += "-";
                tempScore = m_score2;
            }
            switch (tempScore) {
                case 0:
                    this.score += "Love";
                    break;
                case 1:
                    this.score += "Fifteen";
                    break;
                case 2:
                    this.score += "Thirty";
                    break;
                case 3:
                    this.score += "Forty";
                    break;
            }
        }
    }

    private compareForLongGame(m_score1: number, m_score2: number) {
        let minusResult = m_score1 - m_score2;
        if (minusResult == 1) this.score = "Advantage player1";
        else if (minusResult == -1) this.score = "Advantage player2";
        else if (minusResult >= 2) this.score = "Win for player1";
        else this.score = "Win for player2";
    }
}