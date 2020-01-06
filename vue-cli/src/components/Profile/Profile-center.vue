<template>
    <div :class="{slideOut: $store.state.current , slideIn: !$store.state.current}" >
        <div class="header">
            <div class='back' @click='navBack'><font-awesome-icon :icon="['fas', 'chevron-left']"></font-awesome-icon></div>
            <p class='info-center'>个人中心</p>
        </div>

        <div class='id-info'>
            <div class='portrait'> 
                <div>头像</div>
                <div class='pic-group'>
                    <div class='portrait-pic'></div>
                    <div class='left-button'>
                        <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
                    </div>
                </div>
            </div>
            <div class='each'>
                <div>昵称</div>
                <div class='pic-group'>
                    <div>Mist Jayden</div>
                    <div class='left-button'>
                        <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
                    </div>
                </div>
                
            </div>
            <div class='each'>
                <div>性别</div>
                <div class='pic-group'>
                    <div>少侠</div>
                    <div class='left-button'>
                        <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
                    </div>
                </div>
                
            </div>
            <div class='each'>
                <div>百词斩ID</div>
                <div class='pic-group'>
                    <div class='id-num'>1324345356</div>

                </div>
                
            </div>
        </div>
        <div class='account'>
                <div>账号管理</div>
                <div class='icon-group'>
                    <div class='my-icon mobile'>
                        <font-awesome-icon :icon="['fas', 'mobile-alt']"></font-awesome-icon>
                    </div>
                    <div class='my-icon weixin'>
                        <font-awesome-icon :icon="['fab', 'weixin']"></font-awesome-icon>
                    </div>
                    <div class='my-icon qq'>
                        <font-awesome-icon :icon="['fab', 'qq']"></font-awesome-icon>
                    </div>
                    <div class='my-icon chevron-right'>
                        <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
                    </div>
                </div>
        </div>

        <div class="finishied-plan">
            <div>已完成计划</div>
            <div class='my-icon chevron-right'>
                        <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
            </div>
        </div>

        <div class='quit'>退出账号</div>

    </div>
</template>

<script>
export default {
    methods: {
        navBack(){
            this.$store.commit('currentp')

        }
    }
}
</script>

<style scoped>
.slideIn{
    font-size: 1.6rem;
    z-index: 1000;
    width: 100vw;
    transform: translateX(0);
    position:fixed;
    height: 100vh;
    transition: all 0.5s ease-out;
    background: #F3F5F4;
}

.slideOut{
    font-size: 1.6rem;
    z-index: 1000;
    width: 100vw;
    position:fixed;
    height: 100vh;
    background: #F3F5F4;
    transform: translateX(1000px);
    transition: all 0.5s ease-out;
}
.all{
    
}
.header{
    text-align: center;
    height: 8rem;
    background: #1A1D1A;
    color: white;
    position: relative;
}
.info-center{
    padding-bottom: 1.5rem;
    border: 1px white solid;
    padding-top: 4rem;
    font-size: 1.7rem;
}
.back{
    position: absolute;
    bottom: 1.5rem;
    font-size: 2rem;
    margin-left: 2rem;
}
.id-info{
    background: #FDFFFD;
    margin-top: 2rem;
    

}
.portrait{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #cccccc solid;
    padding: 1rem 1.6rem;

}
.pic-group{
    display: flex;
    align-items: center;
    color: #b2b2b2;
    font-weight: 400;

}

.portrait-pic{
  width:4.5rem;
  height: 4.5rem;
  background: url(../../assets/portrait.jpg);
  border-radius: 50%;
  background-size: cover;
  
}

.left-button{
  margin-left: 1rem;
  font-size: 1.5rem;
  
}


.each{
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-bottom: 1px #cccccc solid;
}
.id-num{
    letter-spacing: 2px;
}

/* acount */

.account{
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #FDFFFD;
}

.icon-group{
    display: flex;
}
.my-icon{
    background: #b2b2b2;
    display: flex;
    border-radius: 50%;
    color: white;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 0.5rem;
}
.qq{
    background: #339AF0;
}
.chevron-right{
   background: none; 
   color: #b2b2b2;
   font-size: 1.5rem;
}

.finishied-plan{
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background: #FDFFFD;
}

.quit{
    margin-top: 2.5rem;
    text-align: center;
    background: #FDFFFD;
    padding: 1rem 0;
    color: #fa8072;
}
</style>