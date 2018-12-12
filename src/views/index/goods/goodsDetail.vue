<template>
  <div class="container">
    <header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/e76622df-3a05-40df-8b41-890230dcf18e.jpg.592x432.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/e8b4da96-61c3-41c2-993f-49117fb143b9.jpg.592x432.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/1768a71f-19d7-41f1-8e74-1a03d4c8d031.jpg.592x432.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/4a49e25e-30cc-4496-9c1b-a3f2d8fd4cab.jpg.592x432.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/5)"></div>
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/e76622df-3a05-40df-8b41-890230dcf18e.jpg.592x432.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/e8b4da96-61c3-41c2-993f-49117fb143b9.jpg.592x432.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/1768a71f-19d7-41f1-8e74-1a03d4c8d031.jpg.592x432.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(https://image1.ljcdn.com/hdic-resblock/4a49e25e-30cc-4496-9c1b-a3f2d8fd4cab.jpg.592x432.jpg)"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </header>
    <section>
      <div class="box">
        <a class="imgBox">
          <!-- <img :src=lists.imgSrc alt="" class="imgL"> -->
        </a>
        <h3>{{lists.title}} <span>{{lists.lab1}}</span><span>{{lists.lab1}}</span></h3>
        <div><span>{{lists.address1}}</span><span>{{lists.address2}}</span><span>{{lists.address3}}</span></div>
        <p>{{lists.area}}</p>
        <div><span>{{lists.price}}元/平(均价)</span><span>|</span><span>{{lists.priceSec}}</span></div>
      </div>
      <div class="shareIcon" @click="handelShowShare">
        <img class="shareImg" src="http://taobao.90sheji.com/58pic/15/44/31/54C58PICxYd.png" alt="">
      </div>
    </section>
    <footer>footer</footer>
    <div id="bg" @click="handelCloseBG">
      <div class="saveBtn" v-on:click.stop="handelSaveImg">保存图片</div>
    </div>
  </div>
</template>

<style scoped>

@import '../../../../node_modules/swiper/dist/css/swiper.min';
  .container{
    width: 100%;
    height: 100%;
    position: relative;
    /* overflow: hidden; */
  }
  header{
    height: 7rem;
    width: 7.5rem;
  }

  .swiper-container {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    left: 40%;
    top: 30.4%;
    margin-left: -150px;
    margin-top: -150px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  section {
    position: relative;
  }

  .shareImg,shareIcon {
    height: 0.3rem;
    width: 0.3rem;
  }
  .shareIcon {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  }
  #bg{
    width: 100%;
    height: 20rem;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    display: none;
  }
  .saveBtn{
    width: 6rem;
    line-height: 0.8rem;
    text-align: center;
    background: red;
    color: #fff;
    font-size: 0.32rem;
    border-radius: 0.15rem;
    position: fixed;
    bottom: 0.2rem;
    left:0.75rem;
  }
</style>

<script>
import { getGoodsDetail } from '../../../api/api';
import Swiper from 'swiper';
export default {
  data() {
    return {
      goodsID: '',
      lists: {}
    }
  },
  mounted() {
    // 获取主页传过来的ID
    this.goodsID = this.$route.params.id
    // if(this.goodsID === null) {
    //   this.$router.push({
    //     name:'index'
    //   })
    // }
    this.handelGetGoodsDetail();
    // 轮播图
    this.lunBo()
  },
  beforeCreate() {

  },
  methods: {
    async handelGetGoodsDetail() {
      let P = {
            id : this.goodsID,
          };
      const res = await getGoodsDetail(P)
      // 当在详情页刷新时，跳转出去
      if(res.data.msg === null) {
        this.$router.push({
          name:'index'
        })
      }
      if(res.data.code === 0) {
        this.lists = res.data.msg;
      }
      console.log(res.data)
    },
    // 显示分享页面
    handelShowShare() {

      var bg = document.getElementById('bg');
      var W = window.screen.width;
      var H = window.screen.height;
      console.log(W, H);
      bg.style.display = 'block';

      var canvas = document.createElement('canvas')
      canvas.width = 0.8*W;
      canvas.height = 0.6*H;

      // 样式
      canvas.style.position = 'fixed'
      canvas.style.top = 2+'rem'
      // canvas.style.left = window.screen.width*0.1 + 'rem'

      var ctx = canvas.getContext('2d');

      ctx.fillStyle="#fff";
      ctx.fillRect(0,0,300,480);





      bg.appendChild(canvas);
    },
    // 关闭弹出框
    handelCloseBG() {
      var bg = document.getElementById('bg');
      bg.style.display = 'none';
    },
    // 保存图片
    handelSaveImg() {
      alert(123)
    },




















    // 轮播图
    lunBo() {
      var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  },

}
</script>
