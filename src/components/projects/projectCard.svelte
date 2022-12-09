<script>
	// export let srcPath;
	// export let projectPargraph;
	export let projectTitle;
	// export let linkToRepo;
	// export let linkTosite;
</script>

<!-- <div class="projects-container">
	<div class="project">
		<img src={srcPath} alt="ProjectImage" />
		<div class="textWraper">
			<h1>{projectTitle}</h1>
			<p>{projectPargraph}</p>
			<div class="linkButtons">
				<a href={linkToRepo}>
					<button>Repo</button>
				</a>
				<a href={linkTosite}>
					<button>Site</button>
				</a>
			</div>
		</div>
		
	</div>
</div> -->
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
	/* .projects-container {
		width: 90vw;
		height: auto;
		border-radius: 50px;
		margin-bottom: 4rem;
	}
	.project {
		display: flex;
		flex-direction: column;
	}
	.project img {
		width: 40vw;
		border-radius: 30px;
	}
	.textWraper {
		width: 50%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: baseline;
		align-items: center;
	}
	.textWraper h1 {
		font-size: 10vh;
		cursor: pointer;
	}
	.textWraper h1:hover ~ p {
		position: static;
	}
	.textWraper p {
		font-size: 3vh;
		font-weight: 600;
	}
	.linkButtons {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: left;
  }
  .linkButtons a button {
    width: 150px;
    height: 50px;
    border-radius: 40px;
    border: none;
    background: #260090;
    font-family: var(--ff-montserrat);
    font-size: 1.3rem;
	font-weight: 700;
    color: var(--clr-White);
    box-shadow: inset 0px 9px 10px rgba(255, 255, 255, 0.50),
      inset 0px -10px 9px rgba(0, 0, 0, 0.50);
    cursor: pointer;
	transition: all 800ms ease-in-out;
  }
  .linkButtons a button:active{
	background-color: #fff;
	color: #260090;
  }
  .linkButtons a button:hover{
	background-color: #fff;
	color: #260090;
  }
  .linkButtons a:nth-child(1){
	margin-right: 4rem;
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
		.textWraper h1 {
			font-size: 10vh;
		}
	} */
</style>
