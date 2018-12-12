<template>
  <div>
    <header>
      <div @click="goSearch" class="search">🔍搜索商品，共有{{this.num}}款商品</div>
      <div class="swiper-container lunbo">
        <div class="swiper-wrapper lunbo-wrapper">
          <div class="swiper-slide lubo-one">
            <img class="luobo-img" src="http://pcgkntovx.bkt.clouddn.com/885651011761754909.jpg" alt="">
          </div>
          <div class="swiper-slide lubo-one">
            <img class="luobo-img" src="http://pcgkntovx.bkt.clouddn.com/885651011761754909.jpg" alt="">
          </div>
          <div class="swiper-slide lubo-one">
            <img class="luobo-img" src="http://pcgkntovx.bkt.clouddn.com/885651011761754909.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    </header>
  </div>
</template>

<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.min";
/* 搜索 */
header {
  background-color: #e7e1e1;
  padding-top: 0.001rem
}
.search {
  height: 0.5rem;
  width: 6.9rem;
  background-color: #ebe7e7;
  margin-left: 0.3rem;
  border-radius: 0.8rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  /* padding-left: 2rem; */
  text-align: center;
  box-sizing: border-box;
}
/* 轮播图1 */
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.luobo-img {
  height: 4rem;
  width: 7.5rem;
}
</style>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      num: 895522,
    }
  },
  mounted() {
    // 轮播图
    this.lunBo();
  },
  methods: {
    goSearch() {
      this.$router.push({
        name: 'search'
      })
    },
    // 轮播图
    lunBo() {
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
};
</script>
