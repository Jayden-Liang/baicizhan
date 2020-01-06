<template>
  <div id='main'>
     <Footer/> 
      <router-view></router-view>

  </div>
</template>

<script> 
import Footer from './components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">

html, body{
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  background-color: #eeeeee;
  font-family: "Noto Sans SC";
}
 #main{
   margin: 0 auto;
 }

 @media (min-width: 1000px){
   #main{
        width: 40rem; 


   }
   
 }
</style>
