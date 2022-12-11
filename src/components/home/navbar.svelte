<script>
    import {fade , fly} from 'svelte/transition';
    let visible = true;
    function toggleVisible(){
        visible = !visible
    }
    // const menu = document.getElementById('link-wrapper');
    // Array.from(document.getElementById("link-items"))
    // .forEach((item,index) =>{
    //     item.onmouseover = () => {
    //         menu.dataset.activeIndex = index;
    //     };
    // });
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
        <div class="link-wrapper" id="link-wrapper">
            <button on:click={toggleVisible}><i class="fas fa-times"></i></button>
            <div id="link-items">
                <a href="/" class="link-item" on:click={toggleVisible}> <li>Home</li></a>
                <a href="/about" class="link-item" on:click={toggleVisible}> <li>About</li></a>
                <a href="/project" class="link-item" on:click={toggleVisible}> <li>Projects</li></a>
                <a href="mailto:ahmedonour.49@gmail.com" class="link-item" on:click={toggleVisible}> <li>Contact Me</li> </a>
                <div class="bg">
                </div>            
            </div>
            <div class="en-ar">
                <a href="/"  on:click={toggleVisible}>EN</a>
                <a href="/ar" on:click={toggleVisible}>AR</a>
                <a href="/"><i class="fas fa-moon"></i></a>
            </div>
        </div>
        
    </ol>
    {/if}
</nav>

<style>

    .bg{
        width: 100vw;
        height: 100vh;
        background-image: radial-gradient(
            rgb(82, 0, 255 , 0.4) 30%,
            transparent 9%
        );
        background-position: 0% 0%;
        background-size: 12vmin 12vmin;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -1;
        transition: all 400ms ease;
    }
    #link-items:hover > .bg{
        background-size: 11vmin 11vmin;
        opacity: .5;
    }
    nav{
        width: 100vw;
        height: 80px;
        display: none;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
        padding: 0 9rem;
        background-color: transparent;
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
        list-style: circle;
        /* list-style-type: disc; */
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
        width: 50vw;
        height: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    #link-items{
        width: 70%;
        margin-left: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .link-item{
        transition: all 600ms ease-in-out;
    }
    #link-items:hover > .link-item{
        opacity: .3;
        font-size: 3rem;
    }
    #link-items:hover > .link-item:hover{
        opacity: 1;
        font-size: 5rem;
    }

    ol a{
        text-decoration: none;
        color: white;
        font-family: 'Montserrat';
        font-weight: var(--fw-900);
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
    ol li a:hover ~ a{
        font-size: 6rem;
        opacity: 0.3;
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
        justify-content: space-between;
        align-items: center;
        width: 30%;
        height: 10%;
        margin-left: 5rem;
        
    }
    ol .en-ar a{
        color: white;
        font-size: 2rem;
    }
    ol .en-ar a .fa-moon{
        font-size: 2rem;
    }
    @media screen and (max-width: 414px){
        nav{
            display: flex;
            padding: 0 1rem;
        }
        ol li{
            font-size: 2.4rem;
        }
        ol a{
            font-size: 2.6rem;
        }
        ol .en-ar{
            width: 50vw;
            margin-left: 1rem;
        }  
        .link-wrapper{
            width: 100vw;
        }
        #link-items{
            
            margin-left: 1rem;
        }
    }
</style>
