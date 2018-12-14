<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
        <ul class="NAV">
      <router-link tag="li" :to="{name: 'index'}" active-class="active">
        <i></i>
        <span>HOME</span>
      </router-link>
      <router-link tag="li" :to="{name: 'shop'}" active-class="active">
        <i></i>
        <span>SHOP</span>
      </router-link>
      <router-link tag="li" :to="{name: 'cart'}" active-class="active">
        <i></i>
        <span>CART</span>
      </router-link>
      <router-link tag="li" :to="{name: 'mine'}" active-class="active">
        <i></i>
        <span>MINE</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
// import index from "./index/index"
// import index from "../views/indexShop/myShop/index"
// import mine from "../views/mine/mine"
// import myCart from "../views/myCart/myCart"

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    // index,
    // index,
    // mine,
    // myCart
  }
};
</script>

<style scoped>
#app {
  box-sizing: border-box;
}
.NAV {
  position: fixed;
  bottom: 0;
  height: 0.99rem;
  background: #fff;
  border-top: 1px solid #d8d8d8;
  display: flex;
  z-index: 2;
}
.NAV li {
  width: 1.875rem;
}
.NAV li i {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/indexg.png") no-repeat center
    center;
  background-size: 0.42rem 0.42rem;
}
.NAV li:nth-child(2) i {
  width: 0.36rem;
  height: 0.45rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/partnerg.png") no-repeat
    center center;
  background-size: 0.4rem 0.42rem;
}
.NAV li:nth-child(3) i {
  width: 0.36rem;
  height: 0.45rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/cartg.png") no-repeat center
    center;
  background-size: 0.4rem 0.42rem;
}
.NAV li:nth-child(4) i {
  width: 0.36rem;
  height: 0.4rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/mineg.png") no-repeat center
    center;
  background-size: 0.42rem 0.42rem;
}
.NAV li.active i {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/indexh.png") no-repeat center
    center;
  background-size: 0.42rem 0.42rem;
}
.NAV li.active:nth-child(2) i {
  width: 0.36rem;
  height: 0.45rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/partnerh.png") no-repeat
    center center;
  background-size: 0.4rem 0.42rem;
}
.NAV li.active:nth-child(3) i {
  width: 0.36rem;
  height: 0.4rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/carth.png") no-repeat center
    center;
  background-size: 0.42rem 0.42rem;
}
.NAV li.active:nth-child(4) i {
  width: 0.36rem;
  height: 0.4rem;
  display: block;
  margin: 0.12rem auto 0;
  background: url("https://img0.cdn.jinshilife.cn/mineh.png") no-repeat center
    center;
  background-size: 0.42rem 0.42rem;
}
.NAV li span {
  text-align: center;
  display: block;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
