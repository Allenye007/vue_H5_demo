<template>
    <div class="tabBarNav1">
      <div class="tabBar1" @touchstart="handelActiveHome">
        <img v-if="ActiveHome" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-hot.png" alt="">
        <img v-if="!ActiveHome" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-%E7%94%9F%E6%B4%BB.png" alt="">
        <span :class="[ActiveHome?'tabBar-active1':'tabBar-no-active1']">首页</span>
      </div>
      <div class="tabBar1" @touchstart="handelActiveShop">
        <img v-if="ActiveShop" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-hot.png" alt="">
        <img v-if="!ActiveShop" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-%E7%94%9F%E6%B4%BB.png" alt="">
        <span :class="[ActiveShop?'tabBar-active1':'tabBar-no-active1']">店铺</span>
      </div>
      <div class="tabBar1" @touchstart="handelActiveCar">
        <img v-if="ActiveCar" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-hot.png" alt="">
        <img v-if="!ActiveCar" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-%E7%94%9F%E6%B4%BB.png" alt="">
        <span :class="[ActiveCar?'tabBar-active1':'tabBar-no-active1']">购物车</span>
      </div>
      <div class="tabBar1" @touchstart="handelActiveMine">
        <img v-if="ActiveMine" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-hot.png" alt="">
        <img v-if="!ActiveMine" class="tabBarImg1" src="https://img0.cdn.jinshilife.cn/icon-%E7%94%9F%E6%B4%BB.png" alt="">
        <span :class="[ActiveMine?'tabBar-active1':'tabBar-no-active1']">我的</span>
      </div>
    </div>
</template>

<style>
 .tabBarNav1 {
    display: flex;
    padding-left : 0.4rem;
    background: #FFFFFF;
    box-shadow: 0 -0.01rem 0.14rem 0 rgba(130,30,30,0.06);
    height: 0.98rem  ;
    /* padding-top: 0.1rem; */
    position: fixed;
    bottom: 0rem;
 }
 .tabBar1 {
   margin-right: 1.16rem;
   text-align: center;
 }
 .tabBarImg1 {
    display: inline-block;
    height: 0.54rem;
    width: 0.54rem;
    margin-top: 0.1rem;
 }
 .tabBar-active1 {
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #F25253;
    letter-spacing: 0;
    text-align: center;
    height: 0.3rem;
    line-height: 0.05rem;
    width: 0.8rem
 }
 .tabBar-no-active1 {
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #B7B7B7;
    letter-spacing: 0;
    text-align: center;
    height: 0.3rem;
    line-height: 0.05rem;
    width: 0.8rem
 }

</style>

<script>
export default {
  name: 'tabBar',
  data() {
    return {
      ActiveHome: true,
      ActiveShop: '',
      ActiveCar: '',
      ActiveMine: '',
    }
  },
  methods: {
    handelActiveHome() {
      this.ActiveHome = true;
      this.ActiveShop = '';
      this.ActiveCar = '';
      this.ActiveMine = '';
    },
    handelActiveShop() {
      this.ActiveHome = '';
      this.ActiveShop = true;
      this.ActiveCar = '';
      this.ActiveMine = '';
    },
    handelActiveCar() {
      this.ActiveHome = '';
      this.ActiveShop = '';
      this.ActiveCar = true;
      this.ActiveMine = '';
    },
    handelActiveMine() {
      this.ActiveHome = '';
      this.ActiveShop = '';
      this.ActiveCar = '';
      this.ActiveMine = true;
    },

  }
}
</script>
