<script>
    import {fade , fly} from 'svelte/transition';
    let visible = true;
    function toggleVisible(){
        visible = !visible
    }
</script>
<nav>
    <a href="/">
        <h1>AS</h1>
    </a>
    <button on:click={toggleVisible}><i class="fas fa-bars"></i></button>
    {#if !visible}
    <ol 
    in:fly={{x:1000 , duration: 500}}
    out:fly={{x: -1000 , duration: 500}}
    >
        <div class="link-wrapper">
            <button on:click={toggleVisible}><i class="fas fa-times"></i></button>
            <li>01 <a href="/" on:click={toggleVisible}> Home</a></li>
            <li>02 <a href="/about" on:click={toggleVisible}> About</a></li>
            <li>03 <a href="/project" on:click={toggleVisible}> Projects</a></li>
            <li>04 <a href="mailto:ahmedonour.49@gmail.com" on:click={toggleVisible}> Contact Me</a></li>
            <div class="en-ar">
                <a href="/"  on:click={toggleVisible}>EN</a>
                <a href="/ar" on:click={toggleVisible}>AR</a>
                <button><i class="fas fa-moon"></i></button>
            </div>
        </div>
    </ol>
    {/if}
</nav>

<style>
    nav{
        width: 100vw;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
        padding: 0 9rem;
        background-color: #5200ff;
    }
    nav button{
        background-color: transparent;
        color: rgb(255, 255, 255);
        width: 70px;
        height: 70px;
        border-radius: 50px;
        border: 5px solid #24036b;
        font-size: 2rem;
        cursor: pointer;
    }
    ol{
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding-left: 4rem;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: #24036b;
    }
    .link-wrapper{
        height: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    ol li{
        text-decoration: none;
        color: white;
        font-family: 'Montserrat';
        font-weight: var(--fw-400);
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    ol li a{
        text-decoration: none;
        color: white;
        font-family: 'Montserrat';
        font-weight: var(--fw-800);
        font-size: 5rem;
        transition: all 800ms ease-in-out;
    }
    ol li a:hover{
        font-size: 6rem;
    }
    nav h1{
        font-family: 'Plaster';
        font-size: 4rem;
        color: white;
    }
    ol .link-wrapper .fa-times{
        position: absolute;
        top: 30px;
        right: 50px;
    }
    ol .link-wrapper button{
        background-color: transparent;
        color: rgb(255, 255, 255);
        border: none;
        font-size: 3rem;
        width: max-content;
        cursor: pointer;
    }
    ol .en-ar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50%;
    }
    ol .en-ar a{
        color: white;
        font-size: 2rem;
    }
    /* @media (prefers-color-scheme: ){
        nav{
            background-color: transparent;
        }
        nav h1{
            color: #5200ff;
        }
        ol li {
            color: #5200ff;
        }
        ol li a{
            color: #5200ff;
        }
    } */
    @media screen and (max-width: 414px){
        nav{
            padding: 0 2.5rem;
        }
        ol li{
            font-size: 1.4rem;
        }
        ol li a{
            font-size: 2.6rem;
        }
        ol .en-ar{
            width: 50vw;
        }        
    }
</style>
