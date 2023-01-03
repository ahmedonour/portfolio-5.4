<script>
	export let projectImg;
	export let srcPath;
	export let projectName;
	export let projectDes;
	let visible = true;
	export function toggleVisible() {
		visible = !visible;
	}
</script>

<div class="projects">
	<button on:click={toggleVisible}><img src={projectImg} alt="Insparition for project" /></button>
</div>
{#if !visible}
	<main>
		<button on:click={toggleVisible}><i class="fas fa-x" /></button>
		<div class="projectsShowCase">
			<div class="project-image">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src={srcPath} alt="project image" />
			</div>
			<div class="projectDescription">
				<h1>{projectName}</h1>
				<p>{projectDes}</p>
			</div>
		</div>
	</main>
{/if}

<style>
	.projects img {
		width: 100%;
		height: auto;
		border-radius: 20px;
		border: 2px solid #fff;
		/* margin-bottom: 10rem; */
	}
	.projects button {
		background-color: rgba(0, 0, 0, 0);
		border: none;
		cursor: pointer;
	}
	main {
		width: 100vw;
		height: auto;
		background-color: rgba(0, 0, 0, 0.2);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
		cursor: auto;
		overflow: scroll;
	}
	main .projectsShowCase {
		background-color: #260090;
		width: 100vw;
		height: fit-content;
		padding-block: 5rem;
		margin-top: 10vh;
		top: 0;
		left: 0;
		border-radius: 1rem 1rem 0 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		color: white;
		overflow: scroll;
	}
	main button {
		background: none;
		border:none;
		font-size: 1.5rem;
		color: rgb(173, 0, 0);
		position: absolute;
		width: 3rem;
		height: 3rem;
		border-radius: 50px;
		right: 10%;
		top: 10%;
		cursor: pointer;
		transition: all 550ms ease-in;
	}
	main button:hover {
		background-color: #fff;
		color: #260090;
		font-size: 2rem;
	}
	main .projectsShowCase .project-image {
		display: flex;
		justify-content: center;
	}
	main .projectsShowCase .project-image img {
		width: 30%;
		border-radius: 20px;
		margin: 2rem;
	}
	.projectDescription {
		width: 50%;
		line-height: 1.5;
		text-align: justify;
	}
	@media only screen and (max-width: 420px) {
		main{
			position: absolute;
		}
		main .projectsShowCase .project-image img {
			width: calc(100% - 2rem);
		}
		.projectDescription {
			width: calc(100% - 2rem);
		}
	}
</style>
