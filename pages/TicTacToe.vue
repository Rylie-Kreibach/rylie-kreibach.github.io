<template>
    <title>Tic Tac Toe</title>
    <link href="fancy.css" type="text/css" rel="stylesheet"/>
    
	<PrimePanel header="Hello!" class="my-6">
		Example new page
	</PrimePanel>
    <PrimePanel header="Does this work?" class="my-6">
		<head>
		<title>Tic Tac Toe</title>
		
	    </head>

        <body>
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

            
        </body>
	</PrimePanel>
    
</template>

<script>
// Import your JavaScript file
import script from '@/assets/script.js';

export default {
  mounted() {
    // Call a function from your script.js if it exports one
    if (typeof script.init === 'function') {
      script.init(); // Assuming you have an init function
    }
  }
};
</script>