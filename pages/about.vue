

<template>
	<div id="app">
	  
	  <h1>Does this work?</h1>
	  
	  <PrimePanel header="About Me!" class="my-6">
		About me
		<PrimeButton label="Button!" icon="pi pi-check" />
	  </PrimePanel>
	
	  <PrimePanel header="Personal Artwork" class="my-6">
		<h1>I had no idea what to include for the photo section, so here are so projects I made in highschool.</h1>
		<p><br>I made this one as a gift to my first employer, whom I babysat for. <br>July, 2024</p>
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
  
<style scoped src="@/assets/fancy.css"></style>

<script>
  import flyImage from '@/assets/fly.jpg';
  import candleImage from '@/assets/candle.jpg';
  import flowerImage from '@/assets/flower.jpg';
  import zigImage from '@/assets/zig.jpg';
  
  export default {
	data() {
	  return {
		image: flyImage,
		flyImage: flyImage
	  };
	}
  };
</script>
  