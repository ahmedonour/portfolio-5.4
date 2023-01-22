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
		<ImageSlider ShowcaseImage="/fg/Desktop - 1.png" />
	</div>
	<ProjectDetails
		titleProject="Product Card"
		description="I am proud to present the product card I designed and developed, inspired by the Front End Mentor challenge. This card is an effective and efficient way to showcase a product, highlighting its features and benefits in an attractive and user-friendly way. The design is modern and sleek, with a focus on creating an aesthetically pleasing and intuitive experience for the user. The card also includes a clear call-to-action, so that customers can easily take the next step and purchase the product. Overall, I am pleased with the results of this project, and I am confident that it will be a valuable asset to any business."
	/>
	<div class="tech">
		<TechLable techName="Html" colour="background: #ff4a03; color: #fff;" />
		<TechLable techName="css" colour="background: #0038a0; color: #fff;" />
		<TechLable techName="figma" colour="background: red; color: #fff;" />
	</div>
</main>
