<template>
  <div>
    <header>
      <div @click="goSearch" class="search">🔍搜索商品，共有{{this.num}}款商品</div>
      <!-- 轮播图 -->
      <div class="swiper-container lunbo">
        <div class="swiper-wrapper lunbo-wrapper">
          <div class="swiper-slide lubo-one">
            <img class="luobo-img" src="http://pcgkntovx.bkt.clouddn.com/885651011761754909.jpg" alt="">
          </div>
          <div class="swiper-slide lubo-one">
            <img class="luobo-img" src="https://m.360buyimg.com/mobilecms/jfs/t1/23142/9/1014/151558/5c0e924dE3506cf8a/5fa5a13086e78504.jpg!cr_1125x549_0_72" alt="">
          </div>
          <div class="swiper-slide lubo-one">
            <img class="luobo-img" src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/18786/14/446/118851/5c09dd86Ed8fc2ed7/18b0ff1a99340c79.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    </header>
    <!-- 导航 -->
    <section>
      <div class="swiper-container lunbo">
          <div class="swiper-wrapper lunbo-wrapper">
            <div class="swiper-slide lubo-one">
              <div class="NAVBox">
                <div class="NAV noBot" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png" alt="">
                  <span class="NAVDetail">京东超市</span>
                </div>
                <div class="NAV noBot" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png" alt="">
                  <span class="NAVDetail">海屯全球</span>
                </div>
                <div class="NAV noBot noRight" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19901/25/1420/4154/5c120d54E094b1a3f/91d7f19338f9d5c2.png" alt="">
                  <span class="NAVDetail">京东时尚</span>
                </div>
                <div class="NAV" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png" alt="">
                  <span class="NAVDetail">京东生鲜</span>
                </div>
                <div class="NAV">
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t28555/115/779891280/9203/882d1b69/5bfe3365N4b8a218f.png" alt="">
                  <span class="NAVDetail">京东旅行</span>
                </div>
                <div class="NAV noRight">
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png" alt="">
                  <span class="NAVDetail">充值缴费</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide lubo-one">
              <div class="NAVBox">
                <div class="NAV noBot" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png" alt="">
                  <span class="NAVDetail">9.9元拼购</span>
                </div>
                <div class="NAV noBot" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27590/32/1099/14900/5c0f4ebbE9f6fd5a5/a49b1d1e46d66dee.png" alt="">
                  <span class="NAVDetail">领劵</span>
                </div>
                <div class="NAV noBot noRight" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png" alt="">
                  <span class="NAVDetail">赚钱</span>
                </div>
                <div class="NAV" >
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png" alt="">
                  <span class="NAVDetail">京东生鲜</span>
                </div>
                <div class="NAV">
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t28555/115/779891280/9203/882d1b69/5bfe3365N4b8a218f.png" alt="">
                  <span class="NAVDetail">京东旅行</span>
                </div>
                <div class="NAV noRight">
                  <img class="NAVImg" src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png" alt="">
                  <span class="NAVDetail">全部</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </section>
    <div class="boxs">
      <div @click="goGoodsDetail(list)" class="box" v-for="list in RXlist" :key="list.num">
        <div class="boxImg"><img class="goodsImg" :src=list.default_image alt=""></div>
        <h1>{{list.name}}</h1>
        <p>{{list.describe}}</p>
        <div class="bot">
          <h6>￥{{list.goods_price}}</h6>
          <span>{{list.top_price}}</span>
          <span>销量:</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.min";

.boxs {
  /* height: 100%;
    width: 100%; */
  margin-bottom: 1.5rem;
  margin-top: 0.15rem;
  overflow: scroll;
}
.box {
  height: 5.02rem;
  width: 6.9rem;
  margin-left: 0.3rem;
  border-radius: 0.2rem;
  background: #ffffff;
  box-shadow: 0 0 0.14rem 0 rgba(102, 102, 102, 0.3);
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
}

.boxImg1 {
  height: 3.15rem;
  width: 6.9ren;
}
.goodsImg {
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  height: 3.15rem;
  width: 6.9rem;
  margin-left: 0.2px;
}
.box h1 {
  font-family: PingFangSC-Medium;
  font-size: 0.32rem;
  color: #666666;
  letter-spacing: 0;
  height: 0.45rem;
  line-height: 0.45rem;
  margin-left: 0.3rem;
  margin-top: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 6.3rem;
}
.box p {
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  color: #999999;
  letter-spacing: 1.36px;
  margin-left: 0.3rem;
  display: inline-block;
  margin-top: 0.05rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 6.3rem;
  /* margin-right: 0.3rem; */
}
.bot {
  height: 0.84rem;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
}
.box h6 {
  font-family: PingFangSC-Medium;
  font-size: 0.4rem;
  color: #f53c28;
  letter-spacing: 0.22px;
  text-align: left;
  display: inline-block;
}
.bot span {
  opacity: 0.6;
  font-family: PingFangSC-Regular;
  font-size: 0.22rem;
  color: #999999;
  letter-spacing: 0.12px;
  text-align: right;
  float: right;
  margin-right: 0.1rem;
}
.goTop {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 100%;
  position: fixed;
  bottom: 2.3rem;
  right: 0.22rem;
}
.goTopImg {
  height: 0.8rem;
  width: 0.8rem;
}
.tabBarBox {
  height: 0.98rem;
  width: 7.5rem;
  position: fixed;
  bottom: 0;
  background-color: red;
}

section {
  opacity: 0.9;
}
.NAVBox {
  margin: 0.1rem 0rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 0.2rem;
}
.NAV {
  text-align: center;
  width: 2.5rem;
  height: 1.67rem;
  display: inline-block;
  border-bottom: rgba(153, 153, 153, 0.06) 1px solid;
  border-top: 1px solid rgba(153, 153, 153, 0.06);
  border-right: 1px solid rgba(153, 153, 153, 0.06);
  box-sizing: border-box;
}
.noBot {
  border-bottom: none;
}
.noRight {
  border-right: none;
}
.NAVImg {
  width: 0.6rem;
  height: 0.6rem;
  display: inline-block;
  margin-top: 0.35rem;
}
.NAVDetail {
  display: block;
  font-size: 0.14rem;
}
/* 搜索 */
header {
  background-color: #fff;
  padding-top: 0.01rem;
  opacity: 0.8;
}
.search {
  height: 0.5rem;
  width: 6.9rem;
  background-color: #ebe7e7;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  border-radius: 0.8rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  /* padding-left: 2rem; */
  text-align: center;
  box-sizing: border-box;
  padding-top: 0.06rem;
  position: fixed;
  z-index: 99999;
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
  height: 3rem;
  width: 7.5rem;
  /* margin-top: 0.5rem; */
}
</style>

<script>
import Swiper from "swiper";
import {getGoods1List} from '../../api/api';
export default {
  data() {
    return {
      num: 895522,
      RXlist: [],
    };
  },
  mounted() {
    this.handelGetGoodsList();
    // 轮播图
    this.lunBo();
  },
  methods: {
    // 跳转查找
    goSearch() {
      this.$router.push({
        name: "search"
      });
    },
    // 跳转详情
    goGoodsDetail(list) {
      console.log(list)
    },
    async handelGetGoodsList() {
      const {data} =  await getGoods1List();
      // console.log(data.msg);
      this.RXlist = data.msg.rows;
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
