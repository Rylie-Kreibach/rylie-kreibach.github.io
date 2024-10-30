<template>
    <PrimePanel header="Hello!" class="my-6">
      Example new page
    </PrimePanel>
    
    <PrimePanel header="Does this work?" class="my-6">
      <h1>Play Tic Tac Toe</h1>
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
  
  <style scoped>
  /* Add your CSS here for styling the table and cells */
  table {
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  td {
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 24px;
  }
  
  td:hover {
    background-color: #f0f0f0;
  }
  </style>
  