<nav>
    <h1>AS</h1>
    <div class="nav_links">
        <a href="/">
            <li>01 Home</li>
        </a><a href="/about">
            <li>02 About</li>
        </a><a href="/project">
            <li>03 Projects</li>
        </a><a href="mailto:ahmedonour.49@gmail.com">
            <li>04 Contact Me</li>
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
    nav h1{
        font-family: var(--ff-Plaster);
        color: #fff;
        font-size:4rem;
    }
    nav .nav_links{
        display: flex;
        justify-content: space-between;
        width: 50%;
        font-family: var(--ff-montserrat);
        list-style: none;
    }
    nav .nav_links a{
        font-size: 1.4rem;
        color: #fff;
        font-weight: 300;
    }
    @media screen and (max-width: 414px){
        nav{
            display: none;
        }
    }
</style>