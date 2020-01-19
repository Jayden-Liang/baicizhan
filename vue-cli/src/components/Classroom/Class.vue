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
       <div :class='ProgressClass' v-if='!dataLoaded' style="height: 5px; background-color:lightgreen; "></div>
    </transition>

    <div>
        <h2>延伸学习</h2>
        <div class='each'>
            <div class='pic'>图片</div>
            <div class='des-group'>
                <div>一串单词</div>
                <div>用记住一个单词的时间，记住一串单词。</div>
                <div>共21篇文章</div>
            </div>
        </div>
    </div>
    
</div>
    
</template>


<script>
const axios = require('axios');

export default {
    data(){
        return{
            ProgressClass:'initialClass',
            elementWidth: 0,
            dataLoaded: false,
            serverData:''
        }
    },
    created(){
        setTimeout(()=>{
        axios.get('http://hit-the-road.cc/api/classroom/show').then(
             (response)=>{
                 const r=JSON.parse(response.data)
                 this.serverData=r
             }
         )
         this.dataLoaded=true
        },50)
    },
     beforeMount(){
         console.log('beforeMount')
         

     },

    methods:{
        beforeEnter(el){
            this.elementWidth =0
            el.style.width=this.elementWidth+'px'
        },
        enter(el, done){
            if (this.dataLoaded==false){
                console.log('once')
            const interval = setInterval(()=>{
            this.elementWidth=this.elementWidth+10
            el.style.width= this.elementWidth +'px';
            if (this.dataLoaded || this.elementWidth>500){
               console.log('yes')
               clearInterval(interval)
               done()          
           }
        },50)
            }
            
       },
       afterEnter(el){

           
       },
       enterCancelled(el){
           console.log('enterCancelled')
       },
       beforeLeave(el){
           el.style.width=this.elementWidth+'px'
       },
       leave(el,done){
           console.log('Leave')
              if (this.dataLoaded==true){
              const interval = setInterval(()=>{
            this.elementWidth=this.elementWidth+50
           el.style.width= this.elementWidth +'px';
           if (this.elementWidth>=800){
               console.log('yes')
               el.style.opacity=0
               clearInterval(interval)
           }
        },20)
           }
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

.each{
    display: flex;
}

.pic{
    height: 100px;
    width:200px;
}

h2{
    margin: 2rem;
    padding-left: 1rem;
    border-left: 2px red solid;
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