import {TennisGame} from "./TennisGame";

let game = new TennisGame();
game.getScore('player1', 'player2', 6, 6);
console.log(game.score)