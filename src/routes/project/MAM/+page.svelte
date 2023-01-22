<script>
	import Backbutton from '../../../components/projects/backbutton.svelte';
	import ImageSlider from '../../../components/projects/ImageSlider.svelte';
	import ProjectDetails from '../../../components/projects/projectDetails.svelte';
	import TechLable from '../../../components/projects/techLable.svelte';
	const active = 'mouckup';
</script>

<svelte:head>
	<link rel="stylesheet" href="/projects.css" />
</svelte:head>
<Backbutton />
<main>
	<div class="image-container">
		<ImageSlider class={active} ShowcaseImage="/fg/Main-Page.png" />
		<ImageSlider ShowcaseImage="/fg/About-me.png" />
	</div>
	<div>
		<ProjectDetails titleProject="Portfolio" description="Lorem" />
	</div>
	<div class="tech">
		<TechLable techName="svelteKit" colour="background: #ff5e14; color: #fff;" />
		<TechLable techName="figma" colour="background: #7dc2ff; color: #fff;" />
		<TechLable techName="figma" colour="background: #5200ff; color: #fff;" />
	</div>
</main>

<style>
	/* main {
		display: grid;
		place-items: center;
	}
	.tech {
		width: 70%;
		display: flex;

		margin-bottom: 2rem;
	}
	.image-container {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		width: 100vw;
		height: 120%;
	} */
</style>
