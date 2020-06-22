<template>
    <div>
        <button @click='handleClick'>点击扫一扫</button>
    </div>
</template>


<script>
import wx from "weixin-jsapi";

export default {
    methods:{
        handleClick(){
            
        }
    }
}
</script>
<style scoped>
button{
    margin-top: 4rem;
    margin-left: 3rem;
}
</style>