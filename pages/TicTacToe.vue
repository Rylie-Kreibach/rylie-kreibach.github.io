

<template>
    <PrimePanel header="Hello!" class="my-6">
      Welcome to the game page! Look at this awesome list of games. I mean there's just so many options...
    </PrimePanel>
    
    <PrimePanel header="" class="my-6">
      <h1>Want to play <b>Tic Tac Toe?</b></h1>
      <div id="turn">{{ currentTurn }}'s Turn</div>
      <table>
        <tbody>
          <tr v-for="(row, rowIndex) in board" :key="rowIndex">
            <td v-for="(cell, colIndex) in row" :key="colIndex" @click="makeMove(rowIndex, colIndex)">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </PrimePanel>
</template>
  


<script>
  export default {
    data() {
      return {
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        currentTurn: 'X',
      };
    },
    methods: {
      makeMove(row, col) {
        if (this.board[row][col] === '') {
          this.$set(this.board[row], col, this.currentTurn);
          this.currentTurn = this.currentTurn === 'X' ? 'O' : 'X'; // Switch turns
        }
      }
    }
  };
</script>

  