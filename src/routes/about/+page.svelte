<script>
	import AboutButton from '../../components/About/aboutButton.svelte';
	import AboutCircle from '../../components/About/aboutCircle.svelte';
	import AboutText from '../../components/About/aboutText.svelte';
	import { fly, fade } from 'svelte/transition';
</script>

<main in:fly={{ x: 200, duration: 1000 }}>
	<AboutCircle />
	<div class="aboutText">
		<AboutText />
		<AboutButton links="/project" title="Projects" />
	</div>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(6, 1fr);
		height: calc(100vh - calc(3em + 90px));
	}
	/* main > * {
		flex-basis: 20%;
	} */
	.aboutText {
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-column: 4;
		width: 30vw;
	}
	@media screen and (max-width: 1024px) {
		.aboutText {
			width: 90vw;
		}
	}
</style>
