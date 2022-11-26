<script>
	import ProjectCard from "../../components/projects/projectCard.svelte";
</script>

<main>
	<ProjectCard 
	srcPath='/Mouckup/MAM-mouckup.jpg'
	projectTitle='M.A.M' 
	projectPargraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, iure enim eum error, itaque unde minus expedita quia sunt ratione aspernatur. Ipsam odio illo labore sed est saepe, provident at.' 
	/>
	<ProjectCard 
	srcPath='/Mouckup/Roshan.jpg'
	projectTitle='Roshan' 
	projectPargraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, iure enim eum error, itaque unde minus expedita quia sunt ratione aspernatur. Ipsam odio illo labore sed est saepe, provident at.' 
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
