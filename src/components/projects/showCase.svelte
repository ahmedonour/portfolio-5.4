<script>
    export let srcPath;
    export let projectName;
    export let projectDes;
    let visible = true;
    export function toggleVisible(){
        visible = !visible
    }
</script>
{#if !visible}
<main>
    
    <div class="projectsShowCase">
        <button on:click={toggleVisible}><i class="fas fa-x"></i></button>
        <div class="project-image">
            <img src={srcPath} alt="project image">
        </div>
        <div class="projectDescription">
            <h1>{projectName}</h1>
            <p>{projectDes}</p>
        </div>
    </div>
    
</main>
{/if}
<style>
    main{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.2);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        position: fixed;
        z-index: 99999;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }
    main .projectsShowCase{
        background-color: #260090;
        width: 100vw;
        height: auto;
        padding-block: 5rem;
        margin-top: 10vh ;
        border-radius: 5rem 5rem 0 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: white;
    }
    main .projectsShowCase button{
        background: none;
        border: 5px solid #fff;
        font-size: 3rem;
        color: rgb(173, 0, 0);
        position: absolute;
        width: 5rem;
        height: 5rem;
        border-radius: 50px;
        right: 5rem;
        top: 7rem;
        cursor: pointer;
        transition: all 550ms ease-in;
    }
    main .projectsShowCase button:hover{
        background-color: #fff;
        color: #260090;
        font-size: 2rem;
    }
    main .projectsShowCase .project-image{
        display: flex;
        justify-content: center;
    }
    main .projectsShowCase .project-image img{
        width: 30%;
        border-radius: 20px;
    }
</style>