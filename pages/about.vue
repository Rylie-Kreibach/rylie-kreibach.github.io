<template>
	<div id="app">
        <img :src="image"/>
    </div>

	<h1>Does this work?</h1>
	<head>
		<link href="fancy.css" type="text/css" rel="stylesheet"/>
	</head>

	<PrimePanel header="About Me!" class="my-6">
		About me
		<PrimeButton label="Button!" icon="pi pi-check" />
	</PrimePanel>

	<PrimePanel header="Personal Atwork" class="my-6">
		<img src="flyImage" alt="Fly Image">
	</PrimePanel>
</template>

<script>
export default
{
	data()
	{
		return 
		{
			image: require('@/assets/fly.jpg')
			flyImage: require*'@/assets/fly.jpg'
		};
	}
};
</script>