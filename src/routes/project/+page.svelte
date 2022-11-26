<script>
	import ProjectCard from "../../components/projects/projectCard.svelte";
</script>

<main>
	<ProjectCard 
	srcPath='/Mouckup/MAM-mouckup.jpg'
	projectTitle='M.A.M' 
	projectPargraph='A project for a freind' 
	/>
	<ProjectCard 
	srcPath='/Mouckup/Roshan.jpg'
	projectTitle='Roshan' 
	projectPargraph='a Real Estat website for selling and buying propytes' 
	/>
</main>

<style>
	main {
		/* background-color: #fff; */
		width: 100vw;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: var(--clr-White);
		font-family: var(--ff-montserrat);
	}
</style>
