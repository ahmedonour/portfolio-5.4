<script>
	import ProjectCard from "../../components/projects/projectCard.svelte";
</script>

<main>
	<ProjectCard 
	srcPath='/mouckup/m.a.m.png'
	projectTitle='M.A.M' 
	projectPargraph='A project for a freind' 
	/>
	<ProjectCard 
	srcPath='/mouckup/roshan.png'
	projectTitle='Roshan' 
	projectPargraph='a Real Estat website for selling and buying propytes' 
	/>
	<ProjectCard 
	srcPath='/mouckup/Book.png'
	projectTitle='Book Author' 
	projectPargraph='a Real Estat website for selling and buying propytes' 
	/>
	<ProjectCard 
	srcPath='/mouckup/procduct.png'
	projectTitle='Product Card' 
	projectPargraph='a Real Estat website for selling and buying propytes' 
	/>
</main>

<style>
	main {
		/* background-color: #fff; */
		width: 100vw;
		height: fit-content;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		color: var(--clr-White);
		font-family: var(--ff-montserrat);
		padding: 0 3rem;
	}
	@media screen and (min-width: 412px){
		main{
			flex-direction: column;
		}
	}
</style>
