class TicTacToe {
    constructor() {
      this.current = 'x';
      this.field = [ ['', '', ''], ['', '', ''], ['', '', ''] ];
    }

    getCurrentPlayerSymbol() {
      return this.current;
    }

    nextTurn(row, col) {
      if ( this.field[row][col] || row < 0 || row > 2 || col < 0 || col > 2 || this.winner) return;
      this.field[row][col] = this.current;

      var win = true;
      for (var i = 0; i < 3; i++) {
        if (this.field[row][i] != this.current) win = false;
      }
      if (!win) {
        win = true;
        for (var i = 0; i < 3; i++) {
          if (this.field[i][col] != this.current) win = false;
        }
      }
      if (!win) {
        win = true;
        for (var i = 0; i < 3; i++) {
          if (this.field[i][i] != this.current) win = false;
        }
      }
      if (!win) {
        win = true;
        for (var i = 0; i < 3; i++) {
          if (this.field[i][2-i] != this.current) win = false;
        }
      }

      if (win) {
        this.winner = this.current;
      }
      (this.current == 'x') ? this.current = 'o' : this.current = 'x';
    }

    isFinished() {
      return ( this.winner || this.isDraw() ) ?  true : false;
    }

    getWinner() {
      return this.winner ? this.winner : null;
    }

    noMoreTurns() {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j <3; j++) {
          if ( !this.field[i][j] ) return false;
        }
      }
      return true;
    }

    isDraw() {
      return ( !this.winner && this.noMoreTurns() ) ? true : false;
    }

    getFieldValue(row, col) {
      return this.field[row][col] ? this.field[row][col] : null;
    }
}

module.exports = TicTacToe;