<script>
	export let ShowcaseImage;
</script>
<div class="slides">
	<img id="image" alt="Showcase" src={ShowcaseImage}>
	/fg/Main-Page.png
</div>
<style>
	.slides{
		display: grid;
		place-items: center;
	}
	img{
		width: 50%;
		border-radius: 50px;
		box-shadow: 20px 20px 0px #000;
	}
</style>