<template>
<div class='all'>
  <div class='header'>复习</div>
  <div class='cards'>
      <div class='video-card'>单词视频</div>
      <div class='radio-card'>单词电台</div>
  </div>
  <div class='fast-review'>
      <h2>快速复习</h2>
      <div class='fast-review-cards'>
          <Card> 
              <div class='each'>
                <div>单词速听</div>
                <div class='review-img'><img src="../../assets/review/r-1.png" alt=""></div>
              </div>
          </Card>
          <Card> 
              <div class='each'>
                <div>单词自检</div>
                <div class='review-img'><img src="../../assets/review/r-2.png" alt=""></div>
              </div>
          </Card>
      </div>
  </div>
  <div class='deep-review'>
     <h2>深度复习</h2>
     <div class='deep-review-cards'>
          <Card> 
              <div class='each'>
                <div>
                    <div>英文选义</div>
                    <div class='reading'>阅读</div>
                    <div class='read-num'>0/50</div>
                </div>
                <div class='review-img'><img src="../../assets/review/r-3.png" alt=""></div>
              </div>
          </Card>
          <Card> 
              <div class='each'>
                <div>
                    <div>中文选词</div>
                    <div class='reading'>阅读</div>
                    <div class='read-num'>0/50</div>
                </div>
                <div class='review-img'><img src="../../assets/review/r-4.png" alt=""></div>
              </div>
          </Card>
          <Card> 
              <div class='each'>
                <div>
                    <div>听音选义</div>
                    <div class='reading'>听力</div>
                    <div class='read-num'>0/50</div>
                </div>
                <div class='review-img'><img src="../../assets/review/r-5.png" alt=""></div>
              </div>
          </Card>
          <Card> 
              <div class='each'>
                <div>
                    <div>填空拼写</div>
                    <div class='reading'>写作</div>
                    <div class='read-num'>0/50</div>
                </div>
                <div class='review-img'><img src="../../assets/review/r-6.png" alt=""></div>
              </div>
          </Card>
          <Card> 
              <div class='each'>
                <div>
                    <div>组合拼写</div>
                    <div class='reading'>写作</div>
                    <div class='read-num'>0/20</div>
                </div>
                <div class='review-img'><img src="../../assets/review/r-7.png" alt=""></div>
              </div>
          </Card>
          <Card> 
              <div class='each'>
                <div>
                    <div>全拼默写</div>
                    <div class='reading'>写作</div>
                    <div class='read-num'>0/20</div>
                </div>
                <div class='review-img'><img src="../../assets/review/r-8.png" alt=""></div>
              </div>
          </Card>
          <Card> 
              <div class='each'>
                <div>
                    <div>读句填空</div>
                    <div class='reading'>口语</div>
                    <div class='read-num'>0/50</div>
                </div>
                <div class='review-img'><img src="../../assets/review/r-9.png" alt=""></div>
              </div>
          </Card>
      </div>
     
  </div>
</div>
    
</template>

<script>
import Card from './card.vue'

export default {
    components:{
        Card
    }
}
</script>

<style scoped>

.all{
    margin-bottom: 10rem;
}
.header{
    background: #DAD5CB;
    text-align: center;
    padding-bottom: 1.5rem;
    padding-top: 4.2rem;
    font-size: 1.7rem;
}
.cards{
    display: flex;
    justify-content: space-between;
    padding: 2.2rem;
    font-size: 2.3rem;
    color: white;
    
}
.video-card{
  height: 11rem;
  width: 20.5rem;
  border-radius: 1rem;;
  background: #01D7C7;
  padding: 2rem 0 0 1.5rem;
  
}
.radio-card{
    height: 11rem;
    width: 20.5rem;
    background: #F79C20;
    border-radius: 1rem;
    padding: 2rem 0 0 1.5rem;

}

.fast-review, .deep-review{
    padding: 2.2rem;
    font-size: 1.5rem;
    font-weight: 500;
    
}
.fast-review-cards, .deep-review-cards{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
}

.each{
    display: flex;
    justify-content: space-between;
}
.review-img img{
    width: 5.5rem;
    margin-top: 0.5rem;
}

.reading{
    font-size: 1.2rem;
    color: #bfbfbf;
}
.read-num{
    font-size: 1.2rem;
    background: #dbdbdb;
    text-align: center;
    width: 70%;
    border-radius: 5px;
    margin-top: 0.5rem;

}
</style>