<script>
	import { onMount } from 'svelte';
	import ProjectCard from '../../components/projects/projectCard.svelte';
	onMount(() => {
		const cursor = document.querySelector('.cursor');
		document.addEventListener('mousemove', (e) => {
			cursor.style.left = e.pageX + 'px';
			cursor.style.top = e.pageY + 'px';
		});
	});
</script>

<main>
	<h1>Selected Projects</h1>
	<div class="SelectedProjects">
		<ProjectCard
			srcPath="/mouckup/m.a.m.png"
			projectTitle="01  M.A.M"
			projectPargraph="A project for a freind"
		/>
		<ProjectCard
			srcPath="/mouckup/m.a.m.png"
			projectTitle="02 Roshan"
			projectPargraph="A project for a freind"
		/>
		<ProjectCard
			srcPath="/mouckup/m.a.m.png"
			projectTitle="03 Product Card"
			projectPargraph="A project for a freind"
		/>
	</div>
	<div class="otherProjects">
		<h1>Other Projects</h1>
		<div class="projects">
			<i class="fab fa-github" />
		</div>
	</div>
	<div class="cursor"><p>See More</p></div>
</main>

<style>
	.cursor{
		background-color: rgba(255, 255, 255, 0.171);
		width: 40px;
		height: 40px;
		border: 2px solid black;
		border-radius: 50px;
		transition: .1s;
		transform: translate( -50% , -50%);
		pointer-events: none;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(1px);
		-webkit-backdrop-filter: blur(1px);
		mix-blend-mode: normal;
	}
	.cursor p{
		font-size: 50%;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		text-align: center;
		color: #000;
	}
	.SelectedProjects {
		display: grid;
		grid-template-columns: 2;
		width: 70%;
		padding-inline: 2rem;
		cursor: none;
	}
	.SelectedProjects:hover ~ .cursor{
		transform: scale(3);
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
		}
		.otherProjects {
			margin-top: 2rem;
		}
	}
</style>
