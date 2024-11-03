<template>
	<title>Home</title>
	<PrimePanel header="Welcome to Website..." class="my-6" id="indent">
		<p><b>But</b> <i>sometimes</i> the sounds - like the pain - faded, and then there was only the haze. 
			he remembered darkness: solid darkness hhad come before the haze. Did that mean he was making progress? 
			Let there be light (even of the hazy variety), and the light wasgood, and so on and so on? 
			Had those sounds existed in the darkness? He didn't know the answers to any of these questions.
			 Did it make sense to ask them? He didn't know the answer to that one, either.</p>
		<p><b>The</b> <i>pain</i> was somewhere below the sounds. The pain was east of the sun and south of his ears. 
			That was all he did know.</p>
		<p><b>For</b> <i>some</i> length of time that seemed very long (and so <i>was</i>, 
			since the pain and the stormy haze were the only two things which existed) 
			those sounds were the only outer reality. He had no idea who he was or where he was
			 and cared to know neither. He wished he was dead, but through the pain-soaked haze that 
			 filled his mind like a summer storm-cloud, he did not know he wished it.</p>
		<p><b>Stephen King's</b> <i>Misery</i> 1988 </p>
		<p>Chapter 2</p>
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
		methods:{
			makeMove(row, col) {
				console.log('Click @ row ${row}, col ${col}');
			
			
				if (this.board[row][col] ===""){
					this.$set(this.board[row], col, this.currentTurn);
					this.currentTurn = this.currentTurn === 'X' ? 'O' : 'X'; // Switch turns
				}
			}
		}
	};
</script>