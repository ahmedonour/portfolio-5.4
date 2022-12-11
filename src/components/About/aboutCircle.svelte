<script>
</script>
<!-- animate__animated animate__heartBeat animate__infinite -->
<div class="heroCircle ">
  <div class="circle circleColor" />
  <div class="circleShadow" />
</div>

<style>
  .heroCircle {
    width: auto;
    height:25em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-column: 2;
  }
  
  .circle {
    width: 21rem;
    height: 21rem;
    border-radius: 400px;
    background-color: var(--clr-Blue);
    box-shadow: inset 0px 15px 22px rgba(255, 255, 255, 0.51),
      inset 0px -21px 39px 5px rgba(0, 0, 0, 0.5);
  }
  .circleShadow {
    width: 21rem;
    height: 1.25rem;
    border-radius: 30%;
    background-color: rgb(0, 0, 0, 0.5);
    filter: blur(10px);
  }
  @media screen and (max-width: 414px){
    .circle{
      /* width: 60vw;
      height: 60vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1; */
      display: none;
    }
    .circleShadow{
      display: none;
    }

  }
</style>
