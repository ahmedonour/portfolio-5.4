<script>
	export let titleProject;
	export let description;
</script>

<div>
	<h2>Title</h2>
	<h1>{titleProject}</h1>
	<h2>Description</h2>
	<p>{description}</p>
	<h2>Tech</h2>
</div>

<style>
	div {
		width: 70vw;
		font-family: 'Montserrat';
		color: white;
		padding: 5rem 0 0 0;
	}
	div h2 {
		text-transform: uppercase;
		padding: 1rem 0;
		text-decoration: underline;
	}
	div p {
		width: 50%;
		text-align: justify;
		font-weight: 400;
	}
	@media (max-width: 1024px) {
		div {
			width: 90vw;
		}
		div p {
			width: 100%;
			text-align: justify;
			line-height: 1.4;
		}
	}
</style>
