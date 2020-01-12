<template>
    <div>
        <div class='togglar'>

               <div :class="{active:attached}" @click="Finding">
                   发现
               </div>
               <div :class="{active:!attached}" @click="Friend">
                   好友
               </div>                    
        </div>
        <div class='cmp'>
           <component :is='selectedCmp'></component>
        </div>
              
         
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

.cmp{
    position: relative;
}
.togglar{
    width: 100%;
    text-align: center;
    padding-top: 4.2rem;
    font-size: 1.7rem;
    background: #DAD5CB;
}


 .togglar div{
     list-style: none;
     display: inline-block;
     width: 49.3%;
     height: 4rem;
     text-decoration: none;
     color: grey;
     font-size: 1.7rem;
 }
.active{
    border-bottom: 3px #4c4cff solid;
    color: 	#9999ff !important;
}






</style>