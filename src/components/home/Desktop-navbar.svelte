<nav>
	<h1>AS</h1>
	<div class="nav_links">
		<p><a href="/ar">ar</a></p>
		<button><i class="fas fa-sun" /></button>
		<a href="/">
			<li>01 Home</li>
		</a><a href="/about">
			<li>02 About</li>
		</a>
		<a href="/project">
			<li>03 Projects</li>
		</a>
		<a href="https://blog.ahmedsuliman.com" target="_blank" rel="noreferrer">
			<li>04 Blog</li>
		</a>
		<a href="mailto:ahmedonour.49@gmail.com">
			<li>05 Contact Me</li>
		</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		padding-inline: 9rem;
	}
	nav h1 {
		font-family: var(--ff-Plaster);
		color: #fff;
		font-size: 4rem;
	}
	nav .nav_links {
		display: flex;
		justify-content: space-between;
		width: 60%;
		font-family: var(--ff-montserrat);
		list-style: none;
	}
	nav .nav_links button {
		background: none;
		border: none;
		font-size: 1.5rem;
		color: #fff;
	}
	nav .nav_links p {
		color: #fff;
		font-weight: 700;
	}
	nav .nav_links a {
		font-size: 1.2rem;
		color: #fff;
		font-weight: 200;
	}
	nav .nav_links a::after{
		content: "";
		width: 100%;
		height: 5px;
		background-color: #fff;
		transition: all 0.5s ease-in-out;
		transform: scale(0);
	}
	nav .nav_links a:hover:after{
		transform: scale(1);
	}
	@media screen and (max-width: 414px) {
		nav {
			display: none;
		}
	}
</style>
