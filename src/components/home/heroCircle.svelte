<script>
</script>

<div class="heroCircle ">
	<!-- animate__animated animate__heartBeat animate__infinite -->
	<div class="circle" />
	<div class="circleShadow" />
</div>

<style>
	.heroCircle {
		width: auto;
		height: 25em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		grid-column: 4;
		grid-row: 2;
	}
	.circle {
		width: 21rem;
		height: 21rem;
		font-size: 20vw;
		border-radius: 400px;
		background-color: #260090;
		box-shadow: inset 0px 15px 22px rgba(255, 255, 255, 0.51),
			inset 0px -21px 39px 5px rgba(0, 0, 0, 0.5);
	}
	.circleShadow {
		width: 21rem;
		height: 1.25rem;
		border-radius: 30%;
		background-color: rgb(0, 0, 0, 0.5);
		filter: blur(10px);
	}
	@media (max-width: 414px) {
		.circle {
			/* width: 60vw;
      height: 60vw;
      position: absolute;
      top: 20vh;
      left: 20vw;
      font-size: 40vw;
      z-index: 0; */
			display: none;
		}
		.circleShadow {
			display: none;
		}
		.animate__heartBeat {
			display: none;
		}
	}
</style>
