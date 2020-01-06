<template>
    <div>
        <div class='togglar'>

               <div :class="{active:attached, normal: !anything}" @click="Finding">
                   发现
               </div>
               <div :class="{active:!attached, normal: !anything}" @click="Friend">
                   好友
               </div>                    
        </div>
        <transition name='myFade' mode='out-in'> 
              <component :is='selectedCmp'></component>

        </transition>
         
    </div>
</template>


<script>
import Friend from './Friend.vue'
import Finding from './Finding.vue'

export default {
    components:{
        Friend,
        Finding
    },
    data(){
        return {
            attached: true,
            selectedCmp: 'Finding'
        }
    },
    methods:{
        Finding(){
            this.attached=true,
            this.selectedCmp='Finding'
        },
        Friend(){
            this.attached=false,
            this.selectedCmp='Friend'
        }
    }

}
</script>



<style scoped>
.togglar{
    text-align: center;
    padding-top: 4.2rem;
    font-size: 1.7rem;
    background: #DAD5CB;
}


 .normal{
     list-style: none;
     display: inline-block;
     width: 49.5%;
     height: 4rem;
     text-decoration: none;
     color: grey;
     font-size: 1.7rem;
 }
.active{
    border-bottom: 3px #4c4cff solid;
    color: 	#9999ff;
}




</style>