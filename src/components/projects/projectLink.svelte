<script>
    export let link;
    export let Imgsrc;
</script>

<div class="project-link">
    <a href={link} rel="noreferrer"><img src={Imgsrc} alt="" srcset=""></a>
</div>
<style>
    img{
        border-radius: 50px;
        width: 100%;
        box-shadow: 10px 10px 0px rgba(0, 0, 0, 1);
        border: 5px solid #000;
        transition: all 400ms ease-in-out;
    }
    img:hover{
        box-shadow: 20px 20px 0px rgba(0, 0, 0, 1);
    }
</style>