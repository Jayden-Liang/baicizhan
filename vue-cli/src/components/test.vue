<template>
    <!-- <div  class="ta_c"><img class="Rotation img"  src="../assets/circle_0000.png" alt=""></div> -->
    <div class='my-img' >
        <div class='img-1'  :class="{imgactive: active}"><img class='heart-img' @click='handleclick' src="../assets/C3_0000.png" alt=""></div>
        
         <div class='rotate-img'></div>

    </div>
    
</template>

<script>
export default {
    data(){
        return{
            active: false
        }
    },
    methods:{
        handleclick(){
           this.active = !this.active
        }
    }
}
</script>

<style scoped lang='scss' >

*{margin: 0; padding: 0;}

.ta_c{text-align: center;
margin-top: 100px;}

@-webkit-keyframes rotation{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(360deg);}
}

.Rotation{
-webkit-transform: rotate(360deg);
animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}
.img-1{
    perspective: 800px;
    border: 1px red solid;
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
   height: 7rem;
  width:7rem;
  padding:0;
  transition: all 0.5s ease-in;
}

.heart-img{
    perspective: 800px;
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  height: 7rem;
  width:7rem;
  border: 1px blue solid;
  /* transform: rotateY(60deg); */
  animation: myanimation 2s linear infinite;
}

.imgactive {
  transform: rotateY(180deg)!important;
  perspective: 800px;
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  transition: all 0.5s ease-in;
}


@keyframes myanimation{
    0%{
        transform: rotateY(10deg);
    }

    50%{
        transform: rotateY(-10deg);
    }

    100%{
        transform: rotateY(10deg);
    }
}

.rotate-img{
    height: 8rem;
    width:8rem;
    background-size: 100% 100%;
    animation: testanimation 2s linear infinite;
}

@keyframes testanimation{
  @for $i from 1 to 31 {
    #{$i * 3.3%} {
      background-image: url("../assets/C2/C2_000#{$i}.png");
    }
  }
}


.img{border-radius: 250px;}
</style>