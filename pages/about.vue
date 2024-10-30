<template>
	<link href="fancy.css" type="text/css" rel="stylesheet"/>
	<div id="app">
	  <img :src="image" alt="Main Image"/>
	  
	  <h1>Does this work?</h1>
  
	  <!-- Moved <head> content to <style> and <script> sections outside <template> -->
	  
	  <PrimePanel header="About Me!" class="my-6">
		About me
		<PrimeButton label="Button!" icon="pi pi-check" />
	  </PrimePanel>
  
	  <PrimePanel header="Personal Artwork" class="my-6">
		<img :src="require('@/static/fly.jpg')" alt="Fly Image">
	  </PrimePanel>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		image: require('@/assets/fly.jpg')
	  };
	}
  };
  </script>
  
