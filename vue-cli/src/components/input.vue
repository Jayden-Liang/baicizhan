<template>
    <div >
        <div class="input-group" v-if="!exchanged">
          <div v-for="(n,index) in 4" :key="index" class="my-input">
            <input type="number" @input='handleInput' />
          </div>
          <div class="active-outer">
              <div v-for="(n,index) in inputList" :key="index" class='input-active'>
              </div>
          </div>

          
          
        </div>
        <button @click='look'>查看</button>

    </div>
</template>


<script>
export default {
    data(){
        return {
            exchanged: false,
            inputList: [],
            value:''
        }
    },
    methods:{
       handleInput(e){
        console.log('输入了',e.target.value)
        if (e.target.value.length<=4){
           this.inputList=new Array(e.target.value.length)
           console.log('inputlist',this.inputList)
           this.value=e.target.value
        }else{
            e.target.setAttribute("disabled", true);
            e.target.blur();
        }
        
       },
       look(){
           console.log(this.value)
       }
       
    }

}
</script>

<style scoped>

.input-group {
  display: flex;
  width: 60%;
  margin: auto;
  margin-top: 1rem;
  justify-content: space-between;
  position: relative;
}
.my-input {
  background: url("../assets/gift_duihuan_number_bg@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 4.5rem;
  width: 4.5rem;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.input-group input {
  height: 2rem;
  width: 2rem;
  text-align: center;
  border: none;
  color: transparent;
  /* margin: 0.3rem; */
  background: transparent;
}

.input-active {
  height:4.5rem;
  width: 4.5rem;
  margin-left: 3.4rem;
  background: url("../assets/gift_duihuan_number_off@2x.png") !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
}
.input-active:first-child{
    margin-left:0;
}

.active-outer{
  left: 0;
  /* height: 4.5rem;
  width: 10rem; */
  display: flex;
  position: absolute;
}
</style>