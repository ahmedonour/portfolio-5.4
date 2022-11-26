<script>
	export let srcPath;
	export let projectPargraph;
	export let projectTitle;
</script>

<div class="projects-container">
	<div class="project">
		<img src={srcPath} alt="ProjectImage" />
		<div class="textWraper">
			<h1>{projectTitle}</h1>
			<p>{projectPargraph}</p>
		</div>
	</div>
</div>

<style>
	.projects-container {
		width: 90vw;
		height: auto;
		border-radius: 50px;
        margin-bottom: 4rem;
	}
	.project {
		display: flex;
		flex-direction: row-reverse;
	}
	.project img {
		width: 50%;
		border-radius: 50px;
	}
	.textWraper {
		width: 50%;
        position: relative;
	}
	.textWraper h1 {
		font-size: 20vh;
	}
    .textWraper h1:hover{
        cursor: pointer;
        font-size: 10vh;
    }
    .textWraper h1:hover ~ p{
        position: static;
    }
	.textWraper p {
		font-size: 3vh;
        font-weight: 600;
	}
	@media screen and (max-width: 414px) {
		.project {
			flex-direction: column;
		}
		.project img {
			width: 100%;
			border-radius: 20px;
		}
		.textWraper {
            height: 50vh;
			width: 100%;
            text-align: justify;
		}
        .textWraper h1{
            font-size: 10vh;
        }
	}
</style>
