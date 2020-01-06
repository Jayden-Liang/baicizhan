<template>
<div>
  <Profile >  </Profile>

<div :class="{homePagetoR: $store.state.showProfile , homePage: !$store.state.showProfile}" >
    <div class='backdrop' v-if='$store.state.showProfile' @click='hideDetail'>

    </div>
   <div class='header row '>
       <div class='col mycol portrait col-8'> 
           <div class='portrait-group' @click='toDetail'>
               <div class='three-dot'> <div></div><div></div><div></div></div>
               <div class='portrait-pic'></div>
           </div>
       </div>
       <div class='col mycol lookup col-2'>查词</div>
       <div class='col mycol calendar col-2'>日历</div>
   </div>
    <div class='infocard'>
        <div class='row remaining'>
            <div class='col'>
                <div class='text'>剩余</div>
                <div  class='num-group'> <span class='num'>{{ days }}</span>天</div> 
            </div>
            <div class='col'>
                <div class='text'>今日单词</div>
                <div class='num-group'> <span class='num'>{{ nums }}</span>个</div> 
            </div>
        </div>
        <div class='schedule'>
            <p>经济学人</p>
            <div class='schedule-btn' >修改计划</div>
        </div>
        <div class='finished'>
            <div>已学完  <div class='finished-num'>{{ finishedNum }} / <span class='unfinished'>{{ unfinished }}</span></div></div>
            <div class='word-group'>
                <div class='offline-pk'>下载离线包</div>
                <div class='words-list'>单词列表</div>
            </div>
        
        </div>
        <div class="progressBar"> 
            <transition name='progressAnimation' appear>
               <span :style='progressClasses' v-if='show' class='progress-inner'></span>
            </transition>
         </div>
    </div>
    <div class='learn-info'><span>今日需新学30/30</span> <span>今日需复习7</span></div>
    <div class=' exercise-btn'>
        <div>开始背单词吧</div>
    </div>
    <div class=' reading-btn'>
        <div>爱阅读</div>
    </div>

</div>
</div>
    
</template>


<script>
import Footer from '../Footer.vue'
import Profile from '../Profile/Profile.vue'

export default {
    components: {
        Footer,
        Profile
    },
    data(){
        return {
            days: 25,
            nums: 30,
            showProfile: false,
            touched: false,
            show: true,
            finishedNum: 594,
            unfinished: 1332

        }
    },
    methods: {
        toDetail(){
            this.$store.commit('showp')
            // this.showProfile = !this.showProfile
            // this.touched =true
            // this.$router.push('/Profile')          
        },
        hideDetail(){
            this.$store.commit('hidep')
        }

    },
    computed:{
        progressClasses: function(){
            return{
                width: parseInt(this.finishedNum/this.unfinished*100)+'%'
            }
        }
    }
}
</script>

<style scoped>


/* -------------------header */

.homePage{
  width: 100%;
  height: 100%;
  position: fixed;
  transition: all 0.5s ease-out;
  transform:translateX(0);
  z-index: 100;
  background-color: #eeeeee;
}

.homePagetoR{
  position: fixed;
  width: 100%;
  height: 100%;
  transform:translateX(40rem);
  transition: all 0.5s ease-out ;
  z-index: 100;
  background-color: #eeeeee;
}

.backdrop{
    position: absolute;
    background: rgb(83, 81, 81);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.6;
    z-index: 1000;
}
 .header .col{
     display: inline-block;
     padding: 3rem 2rem;

 }

.portrait-pic{
   width: 3rem;
   height: 3rem;
   background: url(../../assets/portrait.jpg);
   background-size: cover;
   border-radius: 50%;
   display: inline-block;
}

.three-dot{
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
}

.three-dot div{
  width: 5px;
  height: 5px;
  background: #c0c0c0;
  margin: 5px 0;
}
 .lookup{
     text-align: center;
     
 }
 .lookup:before{
     content: '';
     position:absolute;
     left: 0;
     width: 50px;
     height: 37px;
     background:url(../../assets/lookup.png)no-repeat;
     background-size: cover;
 }


 .calendar{
     text-align: center;
 }

 .calendar:before{
     content: '';
     position:absolute;
     left: -3px;
     width: 50px;
     height: 37px;
     background:url(../../assets/cal.png)no-repeat;
     background-size: cover;
 }



/*----------------- card */

.infocard{
    background-color: #F8F7F1;
    margin: 0 2rem;
    border-radius: 2rem;
    color: #636e72;
    padding-bottom: 6rem;
}

.remaining .col{
   text-align: center;
   margin: 5rem 0;
   margin-top: 6rem;

}

.text{
    font-size: 1.7rem;
    font-weight:300;
    color: #636e72;
}
.num-group{
    margin-top: 1rem;
}
.num{
    font-size: 4rem;
    font-weight: 500;
    margin-right: 10px;
    color: black;

}
.schedule{
    display: flex;
    justify-content: space-between;
    margin: 0 2.5rem;
    border-bottom: 1px #cccccc solid;
    padding-bottom: 2rem;

}

.schedule p{
    font-size: 1.7rem;
    
}

.schedule-btn{
    margin-top: 10px;
    padding: 2px 20px;
    text-align: center;
    border: 1px #636e72 solid;
    height: 2.3rem;
    color: #636e72;
    font-weight: 300;
    border-radius: 2.5rem;
}

.finished{
    margin: 0 2.5rem;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
}
.finished-num{
    font-size: 1.5rem;
    color: #fa8072;
    display: inline-block;
    margin-left: 1rem;

}

.unfinished{
    color: #b2bec3;
}

.word-group{
    display: flex;
    justify-content: space-between;
    position: relative;
    font-weight: 300;
    font-size: 1.1rem;
    margin-top: 0.5rem;

}

.offline-pk{
    margin-right: 1rem;
}
.offline-pk:before{
     content: '';
     position:absolute;
     top:-2.3rem;
     left: 1.5rem;
     width: 50px;
     height: 45px;
     background:url(../../assets/download.png)no-repeat;
     background-size: cover;
}

.words-list{
    position: relative;
}
.words-list:before{
     content: '';
     position:absolute;
     top:-2.3rem;
     left: 1.1rem;
     width: 50px;
     height: 45px;
     background:url(../../assets/list.png)no-repeat;
     background-size: cover;
}

.progressBar{
    margin: 0 2.5rem;
    margin-top: 2rem;
    height: 30px;
    border: 1px blue solid;
    border-radius: 2rem;
    display: flex;
    align-items: center;

    
}

.progress-inner{
    
    height: 18px;
    background: #54A9DC;
    display: inline-block;
    border-radius: 10px 0 0 10px;
    margin-left: 5px;
    
}

.progressAnimation-enter{
    width: 0 !important;
}

.progressAnimation-enter-active{
    transition: width 1s;
}
/* .progressAnimation-leave{

} */
.progressAnimation-leave-active{
    transition: width 1s;
    width: 0;
}


/* bottom part */

.learn-info{
    text-align: center;
    margin-top: 5.5rem;
    color: #636e72; 
}

.learn-info span:last-child{
    margin-left: 1rem;
}

.exercise-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    margin-top: 1rem;
    height: 5.5rem;
    background: #54A9DC;
    text-align: center;
    border-radius: 0.5rem;
}
.exercise-btn div{
    font-size: 2.3rem;
    color: white;
    letter-spacing: 3px;
}
.reading-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    margin-top: 2rem;
    height: 4.5rem;
    text-align: center;
    border-radius: 0.5rem;
    background-color: #F8F7F1;
}
.reading-btn div{
    font-size: 1.7rem;
    color: #54A9DC;
    letter-spacing: 3px;
}
</style>