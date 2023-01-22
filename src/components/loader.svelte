<script>
	import { draw } from 'svelte/transition';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Plaster&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<svg viewBox="0 0 100 100" width="200" height="200">
	<path d="M10 10 H 90 V 90 H 10 L 10 10" fill="none" stroke="black" in:draw={{ duration: 2000 }} />
	<path d="M30 20 L 70 20" fill="none" stroke="black" in:draw={{ delay: 500, duration: 2000 }} />
	<path d="M40 30 L 40 80" fill="none" stroke="black" in:draw={{ delay: 1000, duration: 2000 }} />
	<path d="M60 30 L 60 80" fill="none" stroke="black" in:draw={{ delay: 1500, duration: 2000 }} />
	<path
		d="M45 45 Q 55 55, 45 65"
		fill="none"
		stroke="black"
		in:draw={{ delay: 2000, duration: 2000 }}
	/>
	<path
		d="M55 45 Q 45 55, 55 65"
		fill="none"
		stroke="black"
		in:draw={{ delay: 2500, duration: 2000 }}
	/>
</svg>

<style>
	/*.loader {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		font-family: 'Montserrat';
		background: #5200ff;
		color: white;
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		place-items: center;
		z-index: 9999;
	}
	svg {
		grid-row: 3;
	}
	p {
		grid-row: 5;
	}
	@media screen and (max-width: 414px) {
		svg {
			width: 80%;
			height: 100%;
		}
	}*/
</style>
