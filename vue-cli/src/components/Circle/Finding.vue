<template>
    <div>
        <div class='each'>
            <div class='pic'><img src="" alt=""></div>
            <div class='discription'>
                <div class='head'>百词斩小班</div>
                <div class='detail'>和朋友一起学英语</div>
            </div>
        </div>
        <div class='each'>
            <div class='pic'>图片</div>
            <div class='discription'>
                <div class='head'>单词对战</div>
                <div class='detail'>比比谁的单词记得牢</div>
            </div>
        </div>
        <div class='each'>
            <div class='pic'>图片</div>
            <div class='discription'>
                <div class='head'>斩家活动</div>
                <div class='detail'>挑战自我，还能得铜板</div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>

<style  scoped>

.each{
    display: flex;
    background: #F8F7F1; 
    height: 7.3rem;
    margin: 3rem 1.5rem;
    border-radius: 0.2rem;
}

.pic{
    width:20%;
}

.head{
    font-size: 1.7rem;
}
.discription{
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.detail{
    color:  #bfbfbf;
}

</style>