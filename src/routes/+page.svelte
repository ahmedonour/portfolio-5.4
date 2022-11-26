<script>
	import HeroCircle from '../components/home/heroCircle.svelte';
	import HeroText from '../components/home/heroText.svelte';
	import HeroSocialIcons from '../components/home/heroSocialIcons.svelte';
</script>

<main>
	<div class="herosection">
		<HeroSocialIcons />
		<HeroText />
		<HeroCircle />
	</div>
</main>

<style scoped>
	.herosection {
		height: calc(100vh - 100px);
		display: grid;
		place-items: center;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}
	main {
		background-color: #5200ff;
		width: 100vw;
		height: calc(100vh - calc(3em + 90px));
	}

	@media screen and (max-width: 414px) {
		.herosection {
			height: 80vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
		}
	}
</style>
