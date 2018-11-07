<template>
  <section class="container">
    <div class="head">
      <div class="headInner">
        <div class="backIcon"><img class="backIconImg" @touchstart="goBack"  src="https://img0.cdn.jinshilife.cn/nav_pd.png" alt=""></div>
        <div v-if="this.showShopName"><h2>店铺名称</h2></div>
        <div v-if="this.showNumber"><h2>微信号</h2></div>
        <div v-if="this.showNotice"><h2>店铺公告</h2></div>
      </div>
    </div>
    <div class="tabBar">
      <div class="inpBox">
        <input class="inp" type="text" name="" id="">
      </div>
      <div class="tabBarBg">
      </div>
      <div class="btn">完成</div>
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      showShopName: '',
      showNumber: '',
      showNotice: '',
    }
  },
  mounted() {
    this.getParams();
  },
  methods: {
    // 返回
    goBack() {
      this.$router.back(-1);
    },
    getParams() {
      // 取到路由带过来的参数
      let key = this.$route.params.key
      console.log(key);
      // 将数据放在当前组件的数据内
      // 显示店铺名称
      if(key === 'showShopName') {
        console.log(key,1);
        this.showShopName = true;
        this.showNumber = false;
        this.showNotice = false;
      } else if(key === 'showNumber') {
        console.log(key,2);
        this.showShopName = false;
        this.showNumber = true;
        this.showNotice = false;
      } else if(key === 'showNotice') {
        console.log(key,3);
        this.showShopName = false;
        this.showNumber = false;
        this.showNotice = true;
      }
    }

  }

}
</script>

<style scoped>
  body {
   background: red!important;
  }
  #app {
    height: 100%;
    overflow: hidden;
  }
  .container {
    width: 100%;
  }
  .head {
    position: relative;
    width: 7.5rem;
    background-color: #fff;
  }
  .headInner {
    position: fixed;
    top: 0;
    left: 0;
    width: 7.50rem;
    padding-top: 0.44rem;
    line-height: 0.88rem;
    border-bottom: 0.04rem solid #f4f4f4;
    background-color: #fff;
    z-index: 99999;
  }
  .backIcon {
    height: 0.6rem;
    width: 0.6rem;
    position: absolute;
    top: 0.59rem;
    left: 0.15rem;
  }
  .backIconImg {
    height: 0.6rem;
    width: 0.6rem;
  }
  h2 {
    height: 0.88rem;
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #333333!important;
    text-align: center;
  }

  .tabBar {
    overflow: hidden;
    margin-top: 1.32rem;
    position: relative;
  }

  .tabBarBg {
    height: 15rem;
    background-color: #f8f8f8;
  }

  .inp {
    width:6.595rem;
    height:0.93rem;
    padding-left:0.305rem;
    /* background:#fff; */
    font-family:PingFangSC-Regular;
    font-size:0.32rem;
    color:#666666;
    letter-spacing:0;
    /* margin-top: 1.52rem; */
    outline:0;
  }

  .inpBox {
    width:6.595rem;
    height:0.93rem;
    position: fixed;
    top: 1.6rem;
    left: 0.25rem;
  }
  .btn {
    width:7.50rem;
    height:0.977rem;
    line-height:0.977rem;
    color:#fff;
    font-size:0.28rem;
    opacity:0.8;
    background:#F53C28;
    text-align:center;
    position:fixed;
    bottom:0;
    left:0;

  }
</style>
