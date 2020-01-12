<template>
<div>
    <div class='header'>
       <div></div>     
       <div class='h-tag'>小讲堂</div>
       <div class='collection'>收藏</div>
    </div>
    <transition 
          @before-enter='beforeEnter'
          @enter='enter'
          @after-enter='afterEnter'
          @enter-cancelled='enterCancelled'


          @before-leave='beforeLeave'
          @leave='leave'
          @after-leave='afterLeave'
          @leave-cancelled='leaveCancelled'

          appear>
       <div :class='ProgressClass' style="height: 100px; background-color:lightgreen; "></div>
    </transition>
    
</div>
    
</template>


<script>
export default {
    data(){
        return{
            ProgressClass:'initialClass',
            elementWidth: 100,
            dataLoaded: false
        }
    },
    created(){
        console.log(window.screenWidth )
        setTimeout(()=>{
         this.dataLoaded=true
        }, 1000)
    },
    methods:{
        beforeEnter(el){
            this.elementWidth =100
            el.style.width=this.elementWidth+'px'
        },
        enter(el, done){
        let round =1
        const interval = setInterval(()=>{
           el.style.width= this.elementWidth + round*10 +'px';
           round++
           if (this.dataLoaded){
               console.log('yes')
               clearInterval(interval)
               done()          
           }
        },20)
       },
       afterEnter(el){
           console.log('afterEnter')
       },
       enterCancelled(el){
           console.log('enterCancelled')
       },
       beforeLeave(el){
           console.log('beforeLeave')
           this.elementWidth=300
           el.style.width=this.elementWidth+'px'
       },
       leave(el,done){
           console.log('Leave')
           let round =1
           const interval = setInterval(()=>{
           el.style.width= (this.elementWidth - round*10) +'px';
           round++
           if (round>20){
               clearInterval(interval)
               done()          
           }
        },20)
       },
       afterLeave(el){
           console.log('afterLeave')
       },
       leaveCancelled(el){
           console.log('leaveCancelled')
       }
    }
    
}
</script>

<style  scoped>
.header{
    padding: 0 2.5rem;
    padding-top: 4.2rem;
    background: #DAD5CB;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    color: grey;
    
}

.h-tag{
    font-size: 1.7rem;
}
.collection{
   font-size: 1.5rem;
}

/* .initialClass{
    background: blue;
    height: 3px;
    width: 0%;
    transition: all 0.3 ease-in;
}

.endClass{
    background: green;
    height: 3px;
    width: 100%;
    transition: all 0.3 ease-in;
} */
</style>