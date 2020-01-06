<template>
   <div class='footer-wrapper'>
      <keep-alive>
      <div class='footer'> 
         <div @click='homeClick'>
            <router-link to='/'  exact >  
                <IconSvg :name='nameList[0]'  :current='current' ></IconSvg>
            </router-link>         
         </div>

         <div @click='reviewClick'>
                <router-link to='/review'  exact >  
                <IconSvg :name='nameList[1]'  :current='current' ></IconSvg>                        
              </router-link>
         </div>

          <div @click='classClick'>
                <router-link to='/classroom'  exact >  
                <IconSvg :name='nameList[2]'  :current='current' ></IconSvg>                        
              </router-link>
         </div>
         <div @click='mallClick'>
                <router-link to='/mall'  exact >  
                <IconSvg :name='nameList[3]'  :current='current' ></IconSvg>                        
              </router-link>
         </div>

         <div @click='circleClick'>
                <router-link to='/circle'  exact >  
                <IconSvg :name='nameList[4]'  :current='current' ></IconSvg>                        
              </router-link>
         </div>


    </div>
    </keep-alive>
   </div>
</template>
 
 <script>
  import IconSvg from './Svg.vue'


  export default {
     components: {
        IconSvg
     },
     data(){
        return {
           current: "home",
           nameList: ['首页', '复习','小课堂','商城','圈子']
        }
     },
     methods: {
        homeClick(){
           this.current='home'
        },
        reviewClick(){
           this.current='review'
        },
        classClick(){
           this.current='class'
        },
        mallClick(){
           this.current='mall'
        },
        circleClick(){
           this.current='circle'
        }

     }
  }
 </script>
<style scoped>


.router-link-active{
   color: #54A9DC!important;
}


 .footer-wrapper{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #F8F7F1;
    padding: 0.5rem 2rem;
    z-index:1000;
    text-align: center;
    
    
 }
  .footer{
      display: flex;
      justify-content: space-between;
      font-size: 
      
  }

  .footer a{
     color: #bfbfbf ;
     text-decoration: none;
  }

  .icon{
     height: 2.5rem;
     width: 2.5rem;
     color: yellow;
  }
</style>


         // <div @click='homeClick'>
         //        <router-link to='/'  exact >
         //         <div  class='picture'> <IconSvg :iconName='home' /> </div>  
         //         <div>首页</div>                               
         //      </router-link>
         // </div>
         // <div @click='reviewClick'>
         //        <router-link to='/review'  exact >  
         //         <div>tupian</div>  
         //         <div>复习</div>                               
         //      </router-link>
         // </div>