<template>
	<div id="app">
	  <img :src="image" alt="Main Image" />
	  
	  <h1>Does this work?</h1>
	  
	  <PrimePanel header="About Me!" class="my-6">
		About me
		<PrimeButton label="Button!" icon="pi pi-check" />
	  </PrimePanel>
	
	  <PrimePanel header="Personal Artwork" class="my-6">
		<img :src="flyImage" alt="Fly Image" />
	  </PrimePanel>
	</div>
  </template>
  
  <script>
  import flyImage from '@/assets/fly.jpg';
  
  export default {
	data() {
	  return {
		image: flyImage,
		flyImage: flyImage
	  };
	}
  };
  </script>
  