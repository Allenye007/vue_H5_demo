<template>
  <div class="header">
    <img src="https://img0.cdn.jinshilife.cn/nav_pd.png" class="backIconImg" alt="" @click="goBack">
    {{this.titleValue}}
  </div>
</template>

<style scoped>
  .header{
    width: 100%;
    height: 1.32rem;
    line-height: 1.82rem;
    text-align: center;
    position: relative;
    font-size: 0.36rem;
    color: #333;
    font-weight: bold;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 0;
    z-index: 9999;
    border-bottom: 0.02rem solid rgba(153, 153, 153, .2);
  }
  .header .backIconImg{
    width: 0.6rem;
    height: 0.6rem;
    position: fixed;
    top: 0.555rem;
    left: 0.1rem;
  }
</style>

<script>
export default {
  name: 'pageTittle',
  data(){
          return {
            hashValue: '',
            titleValue: '',
          }
      },
  methods: {
    goBack() {
      this.$router.back(-1);
    }
  },
  mounted() {
    this.hashValue = window.location.hash
    if(this.hashValue === '#/search') {
      this.titleValue = '🔍搜索';
    } else if(this.hashValue === '#/coupon') {
      this.titleValue = '优惠卷';
    } else if(this.hashValue === '#/serverCenter') {
      this.titleValue = '服务中心';
    } else if(this.hashValue === '#/collect') {
      this.titleValue = '我的收藏';
    }
  }
}
/*
*使用须知*
*在 <pageTittle></pageTittle> 下面，需要设置一个 margin-top: 1.32rem。*
*/

</script>
