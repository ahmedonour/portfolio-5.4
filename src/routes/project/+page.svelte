<script>
	import { onMount } from 'svelte';
	import ProjectCard from '../../components/projects/projectCard.svelte';
	import ProjectLink from '../../components/projects/projectLink.svelte';
	// onMount(() => {
	// 	const cursor = document.querySelector('.cursor');
	// 	document.addEventListener('mousemove', (e) => {
	// 		cursor.style.left = e.pageX + 'px';
	// 		cursor.style.top = e.pageY + 'px';
	// 	});
	// });
</script>

<main>
	<h1>Selected Projects</h1>
	<div class="SelectedProjects">
		<div class="project-1">
			<ProjectLink link='/project/authorLanding/' Imgsrc="/mouckup/Book.png" />
			<!-- <div class="cursor"><p>See More</p></div> -->
		</div>
		<div class="project-2">
			<ProjectLink link='/project/Roshan/' Imgsrc="/mouckup/roshan.png" />
		</div>
		<div class="project-3">
			<ProjectLink link='/project/MAM/' Imgsrc="/mouckup/m.a.m.png" />
		</div>
		<div class="project-4">
			<ProjectLink link='/project/Product card/' Imgsrc="/mouckup/procduct.png" />
		</div>
	</div>
	<div class="otherProjects">
		<h1>Other Projects</h1>
		<div class="projects">
			<a href="https://github.com/ahmedonour/" target="_blank" rel="noreferrer"
				><i class="fab fa-github" /></a
			>
		</div>
	</div>
</main>

<style>
	/* .cursor {
		background-color: rgba(255, 255, 255, 0.171);
		width: 40px;
		height: 40px;
		border: 2px solid black;
		border-radius: 50px;
		transition: 0.1s;
		transform: translate(-50%, -50%);
		position: fixed;
		display: none;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(1px);
		-webkit-backdrop-filter: blur(1px);
		mix-blend-mode: normal;
	}
	.cursor p {
		font-size: 50%;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		text-align: center;
		color: #000;
	}
	.SelectedProjects .project-1 > .cursor{
		display: flex;
	}
	.SelectedProjects .project-1:hover > .cursor {
		transform: scale(3);
	} */
	.SelectedProjects {
		display: grid;

		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		place-items: center center;
		row-gap: 5rem;
		column-gap: 5rem;
		padding-inline: 2rem;
		cursor: none;
	}
	.SelectedProjects .project-1 {
		grid-row: 1;
		grid-column: 2;
	}
	.SelectedProjects .project-2 {
		grid-row: 2;
		grid-column: 2;
	}
	.SelectedProjects .project-3 {
		grid-row: 1;
		grid-column: 1;
	}
	.SelectedProjects .project-4 {
		grid-row: 2;
		grid-column: 1;
	}
	.otherProjects {
		margin-top: 10rem;
		display: flex;
		flex-direction: column;
	}
	.otherProjects h1 {
		font-size: 8vw;
		font-weight: 900;
	}
	.otherProjects .projects {
		width: 100%;
		display: grid;
		grid-template-columns: 2;
		place-items: center;
		padding: 5rem 20rem;
	}
	.otherProjects .fa-github {
		color: #fff;
		font-size: 20vw;
		grid-column: 1;
		width: 20%;
		margin-bottom: 5rem;
		cursor: pointer;
	}
	main {
		/* background-color: #fff; */
		width: 100vw;
		height: fit-content;
		/* display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center; */
		color: var(--clr-White);
		font-family: var(--ff-montserrat);
		padding: 0 9rem;
	}
	main h1 {
		font-size: 8vw;
		font-weight: 900;
	}
	@media screen and (max-width: 415px) {
		main {
			flex-direction: column;
			padding: 0 1rem;
		}
		.otherProjects .projects {
			padding: 3rem 0;
		}
		.SelectedProjects {
			padding-inline: 0;
			row-gap: 1rem;
			column-gap: 1rem;
		}
		.otherProjects {
			margin-top: 2rem;
		}
	}
</style>
