<template>
 <transition name='myFade' appear>
    <div class='all'>
        <div class='each'>
            <div class='pic'><img src="../../assets/brush.png" alt=""></div>
            <div class='discription'>
                <div class='head'>百词斩小班</div>
                <div class='detail'>和朋友一起学英语</div>
            </div>
        </div>
        <div class='each'>
            <div class='pic'><img src="../../assets/sword.png" alt=""></div>
            <div class='discription'>
                <div class='head'>单词对战</div>
                <div class='detail'>比比谁的单词记得牢</div>
            </div>
        </div>
        <div class='each'>
            <div class='pic'><img src="../../assets/baobao.png" alt=""></div>
            <div class='discription'>
                <div class='head'>斩家活动</div>
                <div class='detail'>挑战自我，还能得铜板</div>
            </div>
        </div>

    </div>
    </transition>
</template>


<script>
export default {
    
}
</script>

<style  scoped>
.all{
    position: fixed;
    top: 8rem;
    left: 0;
    width: 100%;

}

  .myFade-enter{
     transform: translateX(-300px);
     opacity: 0;

  }
  .myFade-enter-active{
      transition: all 0.3s;
  }
  .myFade-leave{

  }
  .myFade-leave-active{
      transition: all 0.1s;
      transform: translateX(-300px);
      opacity: 0;

  }


.each{
    display: flex;
    background: #F8F7F1; 
    height: 7.3rem;
    margin: 3rem 1.5rem;
    border-radius: 0.2rem;
    
    
}

.pic{
    width:29.5%;

    position: relative;
    
}
.pic img{
     position: absolute;
     top:-2.7rem;
     height: 10rem;

}

.head{
    font-size: 1.7rem;
}
.discription{
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.detail{
    color:  #bfbfbf;
}

</style>