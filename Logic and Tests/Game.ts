export type XO = "X" | "O" | " " | "Test";

export class Game {
  currentPlayer: XO = "X";
  board: XO[] = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  winner: XO = " ";
  winningComboLocation: number = 11;
  gameOverAnimation: string = ""
  //Lines 1-3, Columns 3-6, Diagonals 7-8
  getCells(): XO[] {
    return this.board;
  }

  getTurn(): XO {
    if (this.currentPlayer === "X") {
      return (this.currentPlayer = "O");
    } else if (this.currentPlayer === "O") {
      return (this.currentPlayer = "X");
    }
    return " ";
  }

  getWinner(): XO {
    //Lines
    if (
      this.board[0] === this.board[1] &&
      this.board[1] === this.board[2] &&
      this.board[0] !== " "
    ) {
      this.winningComboLocation = 1;
      return this.board[0];
    } else if (
      this.board[3] === this.board[4] &&
      this.board[4] === this.board[5] &&
      this.board[3] !== " "
    ) {
      this.winningComboLocation = 2;
      return this.board[3];
    } else if (
      this.board[6] === this.board[7] &&
      this.board[7] === this.board[8] &&
      this.board[6] !== " "
    ) {
      this.winningComboLocation = 3;
      return this.board[6];
    }

    //Columns
    else if (
      this.board[0] === this.board[3] &&
      this.board[3] === this.board[6] &&
      this.board[0] !== " "
    ) {
      this.winningComboLocation = 4;
      return this.board[0];
    } else if (
      this.board[1] === this.board[4] &&
      this.board[4] === this.board[7] &&
      this.board[1] !== " "
    ) {
      this.winningComboLocation = 5;
      return this.board[1];
    } else if (
      this.board[2] === this.board[5] &&
      this.board[5] === this.board[8] &&
      this.board[2] !== " "
    ) {
      this.winningComboLocation = 6;
      return this.board[2];
    } 
    //Diagonals
    else if (
      this.board[0] === this.board[4] &&
      this.board[4] === this.board[8] &&
      this.board[0] !== " "
    ) {
      this.winningComboLocation = 7;

      return this.board[0];
    } else if (
      this.board[2] === this.board[4] &&
      this.board[4] === this.board[6] &&
      this.board[2] !== " "
    ) {
      this.winningComboLocation = 8;
      return this.board[2];
    }
    return " ";
  }

  isTie(): boolean {
    if (this.getWinner() === "X") {
      return false;
    }
    if (this.getWinner() === "O") {
      return false;
    }
    if (this.board.includes(" ")) {
      return false;
    } else return true;
  }

  onClick(i: number) {
    if (!this.gameOver()) {
      if (this.getCells()[i] === " ") {
        this.getCells()[i] = this.currentPlayer;
        this.getTurn();
        this.getWinner();
        return;
      } else return this.getCells()[i];
    } else return;
  }

  restart(): XO[] {
    console.log("Restart");
    this.gameOverAnimation = ''
    this.winningComboLocation = 0;
    this.currentPlayer = "X";
    return (this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  }

  gameOver(): boolean {
    if (this.isTie()) {
      return true;
    }
    if (this.getWinner() === "X") {
      this.gameOverAnimation = 'fadeIn'
      return true;
    }
    if (this.getWinner() === "O") {
      this.gameOverAnimation = 'fadeIn'
      return true;
    }
    return false;
  }

  showWin1(){
    if (this.winningComboLocation===1){
      return true
    }
    else {
      return false
    }
   }
   showWin2(){
    if (this.winningComboLocation===2){
      return true
    }
    else {
      return false
    }
   }

   showWin3(){
    if (this.winningComboLocation===3){
      return true
    }
    else {
      return false
    }
   }

   showWin4(){
    if (this.winningComboLocation===4){
      return true
    }
    else {
      return false
    }
   }

   showWin5(){
    if (this.winningComboLocation===5){
      return true
    }
    else {
      return false
    }
   }

   showWin6(){
    if (this.winningComboLocation===6){
      return true
    }
    else {
      return false
    }
   }

   showWin7(){
    if (this.winningComboLocation===7){
      return true
    }
    else {
      return false
    }
   }

   showWin8(){
    if (this.winningComboLocation===8){
      return true
    }
    else {
      return false
    }
   }

}
