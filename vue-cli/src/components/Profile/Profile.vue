<template>
<div>
        <ProfileCenter />
    
    <div :class="{ProfileIn: $store.state.current , ProfileOut: !$store.state.current}" >

   <div class='header' @click='toCenter'>
       <div class="portrait">
             <div class='portrait-group'>
                <div class='p-portrait'></div>
                <div class="id-info">
                    <div>{{name}}</div>
                    <div> 百词斩ID: {{ ID }}</div>
                </div>
             </div>
             <div class='left-button'>
                  <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
             </div>
       </div>
    
    <div class='inTotal'>
       <div class='totalDays'> 
           <div>{{ totalDays }}</div>
           <p> 坚持天数 </p>
       </div>
       <div class='totalWords'> 
           <div> {{ totalWords}} </div>
           <p>背单词总数</p>
       </div>
    </div>

   </div>
    <!-- <button @click='backHome' class="btn btn-primary">back to home</button> -->
    <Profile-info />
</div>
</div>


</template>


<script>

import ProfileInfo from './Profile-info.vue'
import ProfileCenter from './Profile-center.vue'


export default {
    components:{
        ProfileInfo,
        ProfileCenter
    },
    data(){
      return {
          name: 'Mist Jayden',
          ID: 1325869334,
          totalDays: 26,
          totalWords: 0,
          show: false,
          current: true,
          centerCmp: 'ProfileCenter'
      }
    },
    methods: {
       toCenter(){
           this.$store.commit('notcurrentp')
        //    this.$router.push('/ProfileCenter')
       }
       
    },
    computed: {
        result(){
            return this.$store.getters.value
        }
    },
    created(){
        console.log('created')
    }

}
</script>

<style  scoped>


.ProfileIn{
    position: fixed;
    width:40rem;
    transform:translateX(0);
    height: 100vh;
    background: #F8F7F1;
    z-index: 10;
    transition: all 0.3s ease-out;
    
}

.ProfileOut{
    position: fixed;
    width:40rem;
    transform:translateX(-10rem);
    height: 100vh;
    background: #F8F7F1;
    z-index: 10;
    transition: all 0.3s ease-out;
}

.header{
    background-image:linear-gradient( rgba(21, 102, 168, 0.8), 
                                    rgba(21, 102, 168, 0.8)), url(../../assets/profile-bg-1.jpg);
    background-size: cover;
    height: 19rem;
    margin-top: 0;
    color: white;
    /* width: calc(100% - 1px); */
    border-right: 1px rgba(25, 78, 121, 0.8) solid;

}

.portrait{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6rem 2.2rem 0 2.2rem;
   
    
    
}



.p-portrait{
    width:5rem;
    height: 5rem;
    background: url(../../assets/portrait.jpg);
    border-radius: 50%;
    
}
.portrait-group{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.id-info{
    margin-left: 1rem;
    font-weight: 100;
}

.id-info div:first-child{
    font-size: 120%;
    font-weight: 300;
}
.left-button{
    font-size: 150%;
}

.inTotal{
    margin-top: 3rem;
    font-size: 120%;
}

.inTotal p{
    font-weight: 100;
    font-size: 70%;
}
.totalDays{
    border-right: 1px white solid;
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 3.5rem;

}
.totalWords{

    display: inline-block;
    width: 49%;
    text-align: center;
}

</style>
