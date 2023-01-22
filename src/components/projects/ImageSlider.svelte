<script>
	export let ShowcaseImage;
</script>

<div class="slides">
	<img id="image" alt="Showcase" src={ShowcaseImage} />
</div>

<style>
	.slides {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 50vmax;
		border-radius: 25px;
		box-shadow: 20px 20px 0px #000;
		margin-left: 5rem;
		animation: slide 20s ease infinite;
	}
	img:hover {
		animation: none;
	}

	@keyframes slide {
		from {
			transform: translateX(200%);
		}
		to {
			transform: translateX(-200%);
		}
	}
</style>
