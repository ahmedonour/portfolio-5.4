<script>
	import Herobuttons from './herobuttons.svelte';
</script>

<div class="herotext">
	<p>Hi There I am</p>
	<h1>Ahmed Suliman</h1>
	<p>Front-End Developer & Designer 🔥</p>
	<p>Crafting beautiful and functional websites, one pixel at a time</p>
	<div class="heroButtons">
		<Herobuttons links="mailto:ahmedonour.49@gmail.com" title="Contact" />
		<Herobuttons links="/project" title="Projects" />
	</div>
</div>

<style>
	.herotext {
		height: 50vh;
		width: 60vw;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		font-family: 'Montserrat';
		grid-column: 3;
		grid-row: 2;
	}
	.herotext h1 {
		text-transform: uppercase;
		letter-spacing: 5px;
		font-size: 6vw;
		font-weight: 200;
		color: var(--clr-Dark-Purple);
	}
	.herotext p:nth-of-type(1) {
		font-weight: 500;
		font-size: 2rem;
		display: none;
	}
	.herotext p:nth-of-type(2) {
		font-weight: 500;
		font-size: 2rem;
		color: var(--clr-Dark-Purple);
	}
	.herotext p:nth-of-type(3) {
		font-weight: 900;
		font-size: 1.8rem;
		font-family: 'Cabin', sans-serif;
		width: 70%;
		letter-spacing: 3px;
		text-transform: uppercase;
	}
	.heroButtons {
		display: flex;
		width: 80%;
		justify-content: space-between;
	}
	@media screen and (max-width: 1024px) {
		.herotext {
			z-index: 3;
			/* background: rgb(255, 255, 255, 0.5); */
			width: 80vw;
			--clr-Dark-Purple: #fff;
			margin-top: 3rem;
		}
		.herotext h1 {
			text-align: center;
			font-size: 4rem;
		}
		.herotext p:nth-of-type(2) {
			font-size: 1em;
			font-weight: 800;
			text-align: center;
		}
		.herotext p:nth-of-type(3) {
			font-size: 1rem;
			text-align: center;
			letter-spacing: 1px;
			width: 100%;
		}
		.heroButtons {
			flex-direction: column;
			align-items: center;
			height: 200px;
			width: 100%;
		}
	}
</style>
