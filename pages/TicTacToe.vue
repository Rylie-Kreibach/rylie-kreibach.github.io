<template>
    <PrimePanel header="Hello!" class="my-6">
      Example new page
    </PrimePanel>
    <PrimePanel header="Play Tic Tac Toe" class="my-6">
      <div id="turn">X's Turn</div>
      <table>
        <tbody>
          <tr>
            <td @click="() => makeMove(0, 0)"></td>
            <td @click="() => makeMove(0, 1)"></td>
            <td @click="() => makeMove(0, 2)"></td>
          </tr>
          <tr>
            <td @click="() => makeMove(1, 0)"></td>
            <td @click="() => makeMove(1, 1)"></td>
            <td @click="() => makeMove(1, 2)"></td>
          </tr>
          <tr>
            <td @click="() => makeMove(2, 0)"></td>
            <td @click="() => makeMove(2, 1)"></td>
            <td @click="() => makeMove(2, 2)"></td>
          </tr>
        </tbody>
      </table>
    </PrimePanel>
  </template>
  
  <script>
  // Import the functions from your JavaScript file
  import { init, makeMove } from '@/assets/script.js';
  
  export default {
    mounted() {
      init(); // Call the init function when the component is mounted
    },
    methods: {
      makeMove(row, col) {
        makeMove(row, col); // Call the makeMove function from script.js
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here */
  </style>
  