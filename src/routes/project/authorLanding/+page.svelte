<script>
	import Backbutton from '../../../components/projects/backbutton.svelte';
	import TechLable from '../../../components/projects/techLable.svelte';
	import ProjectDetails from '../../../components/projects/projectDetails.svelte';
	import ImageSlider from '../../../components/projects/ImageSlider.svelte';
</script>
<svelte:head>
	<link rel="stylesheet" href="/projects.css">
</svelte:head>
<Backbutton />

	<main>
		<div class="image-container">
			<ImageSlider ShowcaseImage="/fg/Book-Writer.png" />
		</div>
		<ProjectDetails titleProject="Book Author Landing Page" description="The Book Author Landing Page is a comprehensive platform for authors to showcase their work and reach their target audience. It provides a wide range of features to help authors promote their books, such as a customizable author profile, book reviews, and a blog. This platform is an invaluable resource for authors looking to build their brand and increase their exposure. With its intuitive design and comprehensive features, the Book Author Landing Page is an invaluable tool for any author looking to make their mark in the literary world." />
		<div class="tech">
			<TechLable techName="figma" colour="background: red; color: #fff;" />
		</div>
	
	</main>

