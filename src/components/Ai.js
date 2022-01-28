class Ai {
  static findBestMove(b, checkGameOver) {
    let bestVal = -1000,
        bestMove = -1;

    for (let i = 0; i <= 8; i++) {
      if (b[i] === '') {
        b[i] = 'o';

        const val = this.minimax(b, 0, false, checkGameOver);

        b[i] = '';

        if (val > bestVal) {
          bestVal = val;
          bestMove = i;
        }
      } 
    }
    
    return bestMove;
  }

  static minimax(b, depth, maximize, checkGameOver) {
    const winner = this.checkGameOver(b);
    let score = 0;

    if (winner && winner[0]) {
      if (winner[1] === 'o') {
        score = 20;
      } else if (winner[1] === 'x') {
        score = -20;
      } else {
        score = 0;
      }

      return score;
    }

    if (maximize) {
      score = -1000;

      for (let i = 0; i <= 8; i++) {
        if (b[i] === '') {
          b[i] = 'o';

          const val = this.minimax(b, depth + 1, false);

          b[i] = '';

          score = Math.max(val, score);
        } 
      }
    } else {
      score = 1000;

      for (let i = 0; i <= 8; i++) {
        if (b[i] === '') {
          b[i] = 'x';

          const val = this.minimax(b, depth + 1, true);

          b[i] = '';

          score = Math.min(val, score);
        }
      }
    }
    return score - depth;
  }
  
  static checkGameOver(b) {
    for (let i = 0; i <= 6; i += 3) {
      if (b[i] === b[i + 1] && b[i] === b[i + 2] && b[i] !== '') {
        return [true, b[i], [i, i + 1, i + 2]];
      }
    }

    for (let i = 0; i <= 2; i++) {
      if  (b[i] === b[i + 3] && b[i] === b[i + 6] && b[i] !== '') {
        return [true, b[i], [i, i + 3, i + 6]];
      }
    }

    if (b[0] === b[4] && b[0] === b[8] && b[0] !== '') {
      return [true, b[4], [0, 4, 8]];
    }    
    
    if (b[2] === b[4] && b[2] === b[6] && b[2] !== '') {
      return [true, b[4], [2, 4, 6]];
    }    
    
    if (!b.includes('')) {
      return [true, '']
    }
  }
}

export default Ai;
