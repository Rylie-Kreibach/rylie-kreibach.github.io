

<template>
	<div id="app">
	  
	  <h1>Does this work?</h1>
	  
	  <PrimePanel header="About Me!" class="my-6">
		<h2>Play a game of 1 truth</h2>
		
		<ol> 
			<li>I've climbed 7 14'ners</li>
			<li>I speak 2 languages</li>
			<li>I've been on 3 cruises</li>
			<li>I've traveled to 31 states</li>
		</ol>

		<h2>Make a guess</h2>
		<div v-for="(question, index) in questions" :key="index">
			<p>{{ question.text }}</p>
			<div v-for="(option, optionIndex) in question.options" :key="optionIndex">
				<input 
					type="checkbox" 
					:id="`option-${index}-${optionIndex}`" 
					v-model="selectedOptions[index]" 
					:value="option.value" 
				/>
				<label :for="`option-${index}-${optionIndex}`">{{ option.text }}</label>
			</div>
			<button @click="checkAnswer(index)">Check Answer</button>
			<p v-if="showResult[index]">
			{{ selectedOptions[index].includes(question.correctAnswer) ? "Correct!" : "Incorrect." }}
			</p>
	    </div>	

		<PrimeButton label="Button!" icon="pi pi-check" />
	  </PrimePanel>
	
	  <PrimePanel header="" class="my-6">
		<h1>Personal Artwork</h1>
		<p>I had <b>no idea</b> what to include for the photo section, so here are so projects I made in highschool.
		<br><br>I made this one as a gift to my first employer, whom I babysat for. <br>July, 2024</p>
		<img :src="flyImage" alt="Fly Image" class="image_size"/>
		<p><br>This was the first time I dealt with acrylic. I did it for a class, but I ended up really enjoying it. 
			A little unfinished in the details though.
			<br>May, 2024</p>
		<img :src="candleImage" alt="Candle Image" class="image_size"/>
		<p><br>My favorite watercolor assignment. I just really like it. <br>Dec, 2023</p>
		<img :src="flowerImage" alt="Flower Image" class="image_size"/>
		<p><br>This is just some random artwork I did Covid year in illustration 1. 
			I only choose this one because it has a clear picture and I found it pretty quickly. It's <i>kinda</i> fun to look at.
			<br>Dec, 2020</p>
		<img :src="zigImage" alt="zig Image" class="image_size"/>
	  </PrimePanel>
	</div>
</template>
  

<script>
  import flyImage from '@/assets/fly.jpg';
  import candleImage from '@/assets/candle.jpg';
  import flowerImage from '@/assets/flower.jpg';
  import zigImage from '@/assets/zig.jpg';
  
  export default {
	data() {
	//   return {
	// 	image: flyImage,
	// 	flyImage: flyImage
	//   }

	  return {
		questions: [
		  {
			text: "What is the capital of France?",
			options: [
			  { text: "Berlin", value: "berlin" },
			  { text: "Paris", value: "paris" },
			  { text: "Madrid", value: "madrid" }
			],
			correctAnswer: "paris"
		  },
		  {
			text: "What is the largest ocean in the world?",
			options: [
			  { text: "Atlantic Ocean", value: "atlantic" },
			  { text: "Indian Ocean", value: "indian" },
			  { text: "Pacific Ocean", value: "pacific" }
			],
			correctAnswer: "pacific"
		  }
		],
		selectedOptions: [],
		showResult: []
	  };
	},
	methods: {
	  checkAnswer(index) {
		this.showResult[index] = true;
	  }
	}
  };
</script>
  


 