<script>
	import Backbutton from '../../../components/projects/backbutton.svelte';
	import ImageSlider from '../../../components/projects/ImageSlider.svelte';
	import ProjectDetails from '../../../components/projects/projectDetails.svelte';
	import TechLable from '../../../components/projects/techLable.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/projects.css" />
</svelte:head>
<Backbutton />
<main>
	<div class="image-container">
		<ImageSlider ShowcaseImage="/fg/Roshan.png" />
	</div>
	<ProjectDetails
		titleProject="Roshan"
		description="I am pleased to present the real estate agency website I built for my graduation project. This website is designed to provide users with an easy-to-use platform to search for and purchase real estate. It features a comprehensive database of properties, allowing users to easily browse and compare different listings. Additionally, the website provides users with helpful resources, such as mortgage calculators and tips for finding the perfect property. The website is also designed to be secure and user-friendly, with a secure payment system and intuitive navigation. I am confident that users will have a positive experience when searching for and purchasing real estate with this website."
	/>
	<div class="tech">
		<TechLable techName="figma" colour="background: red; color: #fff;" />
		<TechLable techName="Express.js" colour="background: #fff; color: #000;" />
		<TechLable techName="sqlite3" colour="background: #038dff; color: #fff;" />
		<TechLable techName="html" colour="background: #ff4a03; color: #fff;" />
		<TechLable techName="Css" colour="background: #0038a0; color: #fff;" />
	</div>
</main>

<style>
	:root {
		color: #0038a0;
	}
</style>
