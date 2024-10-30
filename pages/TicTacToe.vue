<template>
    <PrimePanel header="Hello!" class="my-6">
      Example new page
    </PrimePanel>
    
    <PrimePanel header="Does this work?" class="my-6">
      <h1>Play Tic Tac Toe</h1>
      <div id="turn">x's Turn</div>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </PrimePanel>
  </template>
  
  <script>
  import { init } from '@/assets/script.js'; // Adjust based on your exports
  
  export default {
    mounted() {
      if (typeof init === 'function') {
        init(); // Call init if it exists
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS here if needed */
  </style>
  