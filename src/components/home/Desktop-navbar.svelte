<nav>
	<h1>AS</h1>
	<div class="nav_links">
		<p><a href="/ar">ar</a></p>
		<button><i class="fas fa-sun" /></button>
		<a href="/">
			<li>01 Home</li>
		</a>
		<a href="/about">
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
		font-size: 1rem;
		color: #fff;
		font-weight: 800;
	}
	nav .nav_links a li {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 100%;
	}
	nav .nav_links a li::after {
		content: '';

		width: 100%;
		transform: scaleX(0);
		height: 2px;
		/*	position: absolute;
		bottom: 0;
		left: 0;*/
		background-color: #fff;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}
	nav .nav_links a li:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
	@media screen and (max-width: 1024px) {
		nav {
			display: none;
		}
	}
</style>
