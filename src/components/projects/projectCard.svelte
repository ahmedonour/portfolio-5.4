<script>
	export let projectTitle;
</script>
<div class="projcets">
	<div class="projects-list">
		<ol>
			<li>{projectTitle}</li>
		</ol>

	</div>
</div>
<style>
	
	.projects-list{
		width: 100%;
	}
	ol{
		list-style: none;
		font-size: 3rem;
		padding-inline: 3rem;
		width: 60%;
		line-height: 2;
	}
	ol li{
		border-bottom: 5px solid #fff;
		font-weight: 800;
	}
	@media (max-width: 414px){
		ol{
			padding-inline: 0;
			width: 70vw;
			font-size: 2rem;
		}
	}
</style>
