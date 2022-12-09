<script>
	import ProjectCard from "../../components/projects/projectCard.svelte";
</script>

<main>
	<h1>Selected Projects</h1>
	<div class="SelectedProjects">
		<ProjectCard
		srcPath='/mouckup/m.a.m.png'
		projectTitle='01  M.A.M'
		projectPargraph='A project for a freind'
		/>
		<ProjectCard
		srcPath='/mouckup/m.a.m.png'
		projectTitle='02 Roshan'
		projectPargraph='A project for a freind'
		/>
		<ProjectCard
		srcPath='/mouckup/m.a.m.png'
		projectTitle='03 Product Card'
		projectPargraph='A project for a freind'
		/>
	</div>
	<div class="otherProjects">
		<h1>Other Projects</h1>
		<div class="projects">
			<i class="fab fa-github"></i>
		</div>
		
	</div>
</main>

<style>
	.SelectedProjects{
		display: grid;
		grid-template-columns: 2;
		width: 100%;
		padding-inline: 5rem;
	}
	.otherProjects{
		margin-top: 10rem;
		display: flex;
		flex-direction: column;
	}
	.otherProjects h1{
		font-size: 8vw;
		font-weight: 900;
	}
	.otherProjects .projects{
		width: 100%;
		display: grid;
		grid-template-columns: 2;
		place-items: center;
		padding: 5rem 20rem;
	}
	.otherProjects .fa-github{
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
	main h1{
		font-size: 8vw;
		font-weight: 900;
	}
	@media screen and (min-width: 412px){
		main{
			flex-direction: column;
			padding: 0 2.5rem;
		}
		.otherProjects .projects{
			padding: 3rem 0;
		}
		.SelectedProjects{
			padding-inline: 0;
		}
		.otherProjects{
			margin-top: 2rem;
		}
	}
</style>
