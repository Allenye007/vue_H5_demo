<template>
    <div class="container">
      <div class="banner">
        <div class="aa">
          <img src="https://img0.cdn.jinshilife.cn/pic1534503585246f3jlks5bjof.jpg" alt="">
        </div>
        <img src="" alt="">
      </div>
      <img src="https://img0.cdn.jinshilife.cn/nav_pd.png" class="backImg" @click="goback">
      <div>
        <div class="goodDesc">
          <div class="goodDescLeft">
            <p class="name hid">{{Item.name}}</p>
            <p class="describe hid">{{Item.describe}}</p>
          </div>
          <div class="goodDescRight">
            <p class="fen">100%</p>
            <p class="fentxt">好评率</p>
            <img src="https://img0.cdn.jinshilife.cn/%E5%8E%BB%E6%88%91%E7%9A%84%E8%AE%A2%E5%8D%95.png">
          </div>
        </div>
        <div class="PriceBox">
          <div class="PriceNow">￥{{Item.min_price}}</div>
          <div class="cashPrice"><img src="https://img0.cdn.jinshilife.cn/hot.png" alt=""><span>￥{{Item.cashback}}</span></div>
          <div class="sale">销量：{{Item.sales}}</div>
        </div>
      </div>
      <div class="goBuy">
        <img src="https://img0.cdn.jinshilife.cn/%E7%9A%87%E5%86%A0.png" alt="" class="crown">
        <div class="goBuyText">
          <span>立刻分享</span>
          <p>每销售一件可赚{{Item.cashback}}元</p>
        </div>
        <div class="goBuyIcon">
          <span>去分享</span>
          <!--<i class="iconImg"></i>-->
        </div>
      </div>
      <div class="service">
        <div class="fuwut">服务</div>
        <div class="fuwul">
          <div class="fuwul-detail" v-for="(item,index) in Item.service" :key="index">{{item}}</div>
          <!--<div class="fuwul-detail"> 包邮（新疆、西藏、港澳台门地区不发货）</div>-->
        </div>
      </div>
      <div class="guige" @click="Showguige">
        <span>选择</span>{{guigeName? guigeName + ' ' +buyNumber +'件':'选择规格'}}
        <img src="https://cdn.jiyong365.com/qqq%E6%9F%A5%E7%9C%8B.png" alt="">
      </div>
      <div class="tudetails">
        <div class="tudetails-title-box">
          <img src="https://img0.cdn.jinshilife.cn/icon-book.png" alt="">
          <div class="tudetails-title">商品介绍</div>
        </div>
        <!-- <div class="aa" v-for="(item,index) in Item.detail_image" :key="index">
          <img :src="item" alt="">
        </div> -->
      </div>
      <div class="footerBar" v-show="footerBarShow">
        <ul>
          <li @click="goKeFu"><img src="../../../../static/images/kefu-gd.png" alt="" class="footerImg"></li>
          <li>
            <img :src="collentShow ? '../../../../static/images/sc-gd.png':'../../../../static/images/sccg-gd.png'" alt="" class="footerImg" @click="collent">
          </li>
          <li @click="goCart"><img src="../../../../static/images/gwc-gd.png" alt="" class="footerImg"></li>
        </ul>
        <div class="addBuy">
          <div class="addCar" @click="Showguige2">加入购物车</div>
          <div class="Buy" @click="Showguige2">立即购买</div>
        </div>
      </div>
      <div class="BuyMask" v-show="guigeShow" @click.self="closeShow">
        <div class="Maskcontainer">
          <img src="https://cdn.jiyong365.com/%E5%88%A0%E9%99%A4delete.png" alt="" class="close" @click="closeShow">
          <div style="border-bottom: 0.05rem solid #f6f6f6;">
            <div class="maskDesc">
              <img :src="Item.default_image" alt="">
              <div class="maskDescPrice">
                <p class="price">价格：<span>￥{{Item.min_price}}</span></p>
                <p class="guiges">已选：<span>{{guigeName}}</span></p>
              </div>
            </div>
          </div>
          <ul class="maskguige">
            <li v-for="(item,index) in Item.styles" :key="index" v-if="index === 0">
              <div class="marginBox">
                <p class="guigeTitle">{{item.name}}</p>
                <div class="guigeDefault">
                  <span v-for="(item,index2) in item.namelist" :key="index2" :data-skuvalue="item" :class="item ===guigeSpan? 'classRed':'Bor'" @click="selectSection(index,index2,$event)">{{item}}</span>
                </div>
              </div>
            </li>
            <li v-for="(item,index) in Item.styles" :key="index" v-if="index === 1">
              <div class="marginBox">
                <p class="guigeTitle">{{item.name}}</p>
                <div class="guigeDefault">
                  <span v-for="(item,index2) in item.namelist" :key="index2" :data-skuvalue1="item" :class="item ===guigeSpan1? 'classRed':'Bor'" @click="selectSection1(index,index2,$event)">{{item}}</span>
                </div>
              </div>
            </li>
            <li v-for="(item,index) in Item.styles" :key="index" v-if="index === 2">
              <div class="marginBox">
                <p class="guigeTitle">{{item.name}}</p>
                <div class="guigeDefault">
                  <span v-for="(item,index2) in item.namelist" :key="index2" :data-skuvalue2="item" :class="item ===guigeSpan2? 'classRed':'Bor'" @click="selectSection2(index,index2,$event)">{{item}}</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="shuliang">
            <div class="shuliangt">数量</div>
            <div class="choose">
              <div class="jian" @click="NumberJian">-</div>
              <div class="liang"><input type="number" disabled="" :value="buyNumber"></div>
              <div class="jia" @click="NumberJia">+</div>
            </div>
          </div>
          <div class="maskBtnNo" v-if="notice">{{notice}}</div>
          <div class="maskBtn" @click="AddBuy" v-else>{{maskCarTxt}}</div>
        </div>
      </div>
    </div>
</template>

<script>
var skunames = "";
var skunams = "";
var rename = "";
import {getGoodsDescribe} from '../../../api/api';
import { Indicator } from 'mint-ui';
export default {
  name: "myGoodDetail",
  data() {
    return {
      id: this.$route.query.gid,
      guigeSpan: "",
      guigeSpan1: "",
      guigeSpan2: "",
      guigeName: "",
      collentShow: true, //收藏按钮
      footerBarShow: true,
      buyNumber: 1, //起购商品数量
      limitNumber: 1,
      maskCarTxt: "立即购买", //门板按钮字
      notice: "",
      guigeShow: false, ////规格显示和隐藏
      Item: {
        show: false,
        service: [
          "上海远喜实业有限公司发货并提供售后服务",
          "包邮（新疆、西藏、港澳台门地区不发货）"
        ],
        styles: [
          {
            //规格选项
            name: "颜色",
            namelist: ["梦幻蓝", "浅灰色"]
          },
          {
            name: "尺寸",
            namelist: ["S", "M"]
          }
        ],
        default_image:
          "https://img0.cdn.jinshilife.cn/pic1534503518057kgzc0gp7v4m.jpg",
        detail_image: [
          "https://img0.cdn.jinshilife.cn/pic1534503518057kgzc0gp7v4m.jpg",
          "https://img0.cdn.jinshilife.cn/pic1534503518057kgzc0gp7v4m.jpg"
        ],
        carousel_image: [
          "https://img0.cdn.jinshilife.cn/pic1534503585246f3jlks5bjof.jpg",
          "https://img0.cdn.jinshilife.cn/pic1534503585246f3jlks5bjof.jpg",
          "https://img0.cdn.jinshilife.cn/pic1534503585246f3jlks5bjof.jpg"
        ],
        name: "美味水果干 三种口味",
        describe:
          "热饮组合装：可乐香槟雪碧可乐香槟雪碧可乐香槟雪碧可乐香槟雪碧可乐香槟雪碧",
        min_price: 34.9,
        goods_price: "34.9",
        cashback: 22.4,
        sales: 3564,
        skus: [
          {
            show: true,
            image:
              "https://img0.cdn.jinshilife.cn/pic1541647284561rohs9un9ofh.jpg",
            stock: 0,
            type_id: "梦幻蓝 S",
            number: 1,
            limit: -1,
            price: 99,
            cashback: 11
          },
          {
            show: true,
            image:
              "https://img0.cdn.jinshilife.cn/pic1541647284561rohs9un9ofh.jpg",
            stock: 222,
            type_id: "梦幻蓝 M",
            number: 1,
            limit: -1,
            price: 99,
            cashback: 11
          },
          {
            show: true,
            image:
              "https://img0.cdn.jinshilife.cn/pic1541647350252nbl4nggzfw.jpg",
            stock: 222,
            type_id: "浅灰色 S",
            number: 1,
            limit: -1,
            price: 88,
            cashback: 22
          },
          {
            show: true,
            image:
              "https://img0.cdn.jinshilife.cn/pic1541647350252nbl4nggzfw.jpg",
            stock: 0,
            type_id: "浅灰色 M",
            number: 1,
            limit: -1,
            price: 88,
            cashback: 22
          }
        ]
      }
    };
  },
  methods: {
    goback() {
      //返回上一级
      this.$router.back(-1);
    },
    goIndex() {
      this.$router.push({
        name: "homeIndex"
      });
    },
    Showguige() {
      //显示选择规格
      this.guigeShow = true;
    },
    Showguige2(event) {
      //显示选择规格
      var el = event.currentTarget;
      this.maskCarTxt = el.innerText;
      this.guigeShow = true;
    },
    AddBuy() {
      var typelist = [];
      var newskuslist = this.Item.skus;
      for (var i = 0; i < newskuslist.length; i++) {
        typelist.push(newskuslist[i].type_id);
      }
      if (typelist.indexOf(skunams) != -1) {
        var el = event.currentTarget.innerText;
        if (el === "加入购物车") {
          // console.log(this.Item);
          console.log("<<<<<<<加入购物车");
        } else {
          console.log(">>>>>>>立即购买");
        }
      } else {
        this.$toast("请选择正确的规格");
      }
    },
    closeShow() {
      //隐藏选择规格
      this.guigeShow = false;
    },
    collent() {
      //点击收藏
      if (this.collentShow) {
        this.collentShow = false;
      } else {
        this.collentShow = true;
      }
    },
    NumberJian() {
      //商品数量加减
      let currentNum = this.buyNumber;
      if (currentNum <= this.Item.skus[0].number) {
        this.$toast("该商品起购" + this.Item.skus[0].number + "件~");
      } else {
        currentNum--;
        this.buyNumber = currentNum;
      }
    },
    NumberJia() {
      let currentNum = this.buyNumber;
      if (this.Item.skus[0].limit === "-1" || this.Item.skus[0].limit === -1) {
        currentNum++;
        this.buyNumber = currentNum;
      } else {
        if (currentNum >= this.Item.skus[0].limit) {
          this.$toast("该商品限购" + this.Item.skus[0].limit + "件~");
        } else {
          currentNum++;
          this.buyNumber = currentNum;
        }
      }
    },
    setSkuMsg() {
      //选规格是触发的事件
      var newskuslist = this.Item.skus;
      // console.log(newskuslist);
      let n = 0;
      for (var i = 0; i < newskuslist.length; i++) {
        n++;
        // console.log('<<<', newskuslist[i].type_id);
        if (newskuslist[i].type_id === skunams) {
          n--;
          // console.log(newskuslist[i]);
          this.Item.min_price = newskuslist[i].price;
          this.Item.cashback = newskuslist[i].cashback;
          this.Item.default_image = newskuslist[i].image;
          //判断每个商品有没有库存
          if (newskuslist[i].stock === 0) {
            this.notice = "暂无库存";
          } else {
            this.notice = "";
          }
        }
      }
    },
    selectSection(index, index2, e) {
      this.guigeSpan = e.target.attributes[1].value;
      // var result = '"' + this.guigeSpan + ' ' + this.guigeSpan1 + this.guigeSpan2 + '"';
      skunames = `${this.guigeSpan} ${this.guigeSpan1} ${this.guigeSpan2}`;
      skunams = skunames.replace(/(\s*$)/g, "");
      rename = `"${skunams}"`;
      this.guigeName = rename;
      this.setSkuMsg();
    },
    selectSection1(index, index2, e) {
      this.guigeSpan1 = e.target.attributes[1].value;
      // var result = '"' + this.guigeSpan + ' ' + this.guigeSpan1 + this.guigeSpan2 + '"';
      skunames = `${this.guigeSpan} ${this.guigeSpan1} ${this.guigeSpan2}`;
      skunams = skunames.replace(/(\s*$)/g, "");
      rename = `"${skunams}"`;
      this.guigeName = rename;
      this.setSkuMsg();
    },
    selectSection2(index, index2, e) {
      this.guigeSpan2 = e.target.attributes[1].value;
      // var result = '"' + this.guigeSpan + ' ' + this.guigeSpan1 + this.guigeSpan2 + '"';
      skunames = `${this.guigeSpan} ${this.guigeSpan1} ${this.guigeSpan2}`;
      skunams = skunames.replace(/(\s*$)/g, "");
      rename = `"${skunams}"`;
      this.guigeName = rename;

      this.setSkuMsg();
    },
    // 去客服
    goKeFu() {
      this.$router.push({
        name: "serverCenter"
      });
    },
    // 去购物车
    goCart() {
      this.$router.push({
        name: "myCart"
      });
    }
  },
  mounted() {
    Indicator.open('Loading...');
    console.log(this.$route.query );
    var P = {
      gid:this.$route.query
    };
    getGoodsDescribe(P).then((res)=>{
      console.log(res);
      this.Item = res.data.msg;
    })

    // console.log(this.id);
    // if(this.Item.show){
    //   this.footerBarShow = true;
    // }else{
    //   this.footerBarShow = false;
    //   this.$toast('该商品已下架');
    // }
  }
};
</script>

<style scoped>
.maskguige {
  width: 100%;
  height: 4.2rem;
  overflow: hidden;
  overflow-y: scroll;
}
.maskguige li {
  /*padding: 0.3rem 0;*/
  padding: 0.3rem 0 0.3rem 0.35rem;
  border-bottom: 0.05rem solid #f5f5f5;
}
.guigeTitle {
  color: rgba(97, 97, 97, 1);
  font-size: 0.28rem;
  line-height: 0.5rem;
}
.guigeDefault span.Bor {
  display: inline-block;
  margin-left: 0.35rem;
  margin-top: 0.1rem;
  height: 0.68rem;
  border: 0.01rem solid #999;
  border-radius: 0.06rem;
  color: #999;
  text-align: center;
  line-height: 0.68rem;
  font-size: 0.26rem;
  font-weight: 400;
  margin-bottom: 0.15rem;
  padding: 0 0.1rem;
  min-width: 0.8rem;
}
.guigeDefault span:first-of-type {
  margin-left: 0;
}
/*-----------------------*/
.classRed {
  display: inline-block;
  margin-left: 0.35rem;
  margin-top: 0.1rem;
  height: 0.68rem;
  border: 0.01rem solid #f53c28;
  border-radius: 0.06rem;
  color: #f53c28;
  text-align: center;
  line-height: 0.68rem;
  font-size: 0.26rem;
  font-weight: 400;
  margin-bottom: 0.15rem;
  padding: 0 0.1rem;
  min-width: 0.8rem;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 1.1rem;
}
.hid {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.banner {
  width: 100%;
  height: 7.5rem;
}
.banner img {
  width: 7.5rem;
  height: 7.5rem;
}
.backImg {
  width: 0.76rem;
  height: 0.76rem;
  display: block;
  position: fixed;
  top: 0.49rem;
  left: 0.3rem;
  z-index: 9;
}
.shareImg {
  width: 1.8rem;
  height: 0.76rem;
  position: absolute;
  right: 0;
  top: 6.5rem;
  z-index: 9;
}
.goodDesc {
  padding: 0.3rem 0.33rem 0.2rem 0.3rem;
  overflow: hidden;
}
.goodDesc .goodDescLeft {
  width: 5.1rem;
  padding-right: 0.1rem;
  float: left;
  border-right: 0.02rem solid rgba(153, 153, 153, 0.2);
  box-sizing: border-box;
}
.goodDescLeft .name {
  line-height: 0.5rem;
  font-size: 0.36rem;
  color: #333333;
  letter-spacing: 0.95px;
  font-weight: bold;
}
.goodDescLeft .describe {
  line-height: 0.4rem;
  font-size: 0.28rem;
  color: #666666;
  letter-spacing: 0;
  margin-top: 0.1rem;
}
.goodDesc .goodDescRight {
  width: 1.5rem;
  float: right;
  position: relative;
  overflow: hidden;
}
.goodDescRight .fen {
  width: 100%;
  font-weight: bold;
  line-height: 0.45rem;
  font-size: 0.32rem;
  color: #f53c28;
  letter-spacing: 1.14px;
}
.goodDescRight .fentxt {
  line-height: 0.4rem;
  font-size: 0.28rem;
  color: #666666;
  letter-spacing: 1px;
}
.goodDescRight img {
  width: 0.248rem;
  height: 0.34rem;
  position: absolute;
  right: 0rem;
  top: 0.25rem;
}
.PriceBox {
  line-height: 0.67rem;
  padding: 0rem 0.33rem 0.2rem 0.3rem;
  overflow: hidden;
  border-bottom: 0.08rem solid #f5f5f5;
}
.PriceBox .PriceNow {
  width: 1.8rem;
  line-height: 0.67rem;
  overflow: hidden;
  float: left;
  font-size: 0.48rem;
  font-weight: bold;
  color: #f53c28;
  letter-spacing: 0;
  text-align: left;
}
.PriceBox .cashPrice {
  width: 1.8rem;
  float: left;
  overflow: hidden;
}
.PriceBox .cashPrice img {
  width: 0.7rem;
  height: 0.34rem;
  /*float: left;*/
  vertical-align: -2px;
}
.PriceBox .cashPrice span {
  width: 1rem;
  display: inline-block;
  line-height: 0.76rem;
  /*float: left;*/
  font-size: 0.36rem;
  color: #ffc845;
  letter-spacing: 0;
}
.PriceBox .sale {
  width: 2.6rem;
  line-height: 0.76rem;
  float: right;
  text-align: right;
}
.goBuy {
  width: 6.9rem;
  height: 1rem;
  background: url("../../../../static/images/分享小店bg.png") no-repeat;
  background-size: 100%;
  position: relative;
  overflow: hidden;
  margin: 0.3rem auto;
}
.goBuy .crown {
  width: 0.56rem;
  height: 0.56rem;
  margin: 0.22rem;
  float: left;
}
.goBuyText {
  float: left;
  margin-top: 0.21rem;
}
.goBuyText span {
  display: inline-block;
  font-weight: bold;
  line-height: 0.3rem;
  font-size: 0.26rem;
  color: #6d4f17;
  letter-spacing: 0.92px;
}
.goBuyText p {
  opacity: 0.8;
  font-size: 0.22rem;
  line-height: 0.3rem;
  color: #6d4f17;
  letter-spacing: 0.92px;
}
.goBuyIcon {
  float: right;
  margin-top: 0.38rem;
  margin-right: 0.4rem;
}
.goBuyIcon span {
  font-size: 0.22rem;
  color: #6d4f17;
  letter-spacing: 0;
}
.goBuyIcon i {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background: url("../../../../static/images/去分享.png") no-repeat center;
  vertical-align: 0px;
}
.service {
  width: 7.5rem;
  min-height: 0.5rem;
  padding: 0.2rem 0 0.2rem 0.35rem;
  display: flex;
  border-bottom: 0.08rem solid #f6f6f6;
  border-top: 0.08rem solid #f6f6f6;
  position: relative;
}
.fuwut {
  font-size: 0.28rem;
  color: #666;
  opacity: 0.7;
  letter-spacing: 0;
  display: flex;
  align-items: center;
}
.fuwul {
  width: 5.8rem;
  display: flex;
  padding-top: 0.05rem;
  margin-left: 0.4rem;
  flex-wrap: wrap;
}
.fuwul-detail {
  font-size: 0.24rem;
  letter-spacing: 0.92px;
  margin-right: 0.17rem;
  color: #999999;
}
.guige {
  width: 7.15rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.05rem solid #f6f6f6;
  letter-spacing: 0;
  padding-left: 0.35rem;
  position: relative;
  opacity: 0.8;
  font-size: 0.28rem;
  color: #333;
}
.guige span {
  display: inline-block;
  margin-right: 0.3rem;
  opacity: 0.8;
  font-size: 0.28rem;
  color: #666666;
  letter-spacing: 0;
}

.guige img {
  width: 0.12rem;
  height: 0.24rem;
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
}
.tudetails-title-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.24rem;
  margin-left: 0.3rem;
  margin-bottom: 0.2rem;
}
.tudetails-title-box img {
  width: 0.26rem;
  height: 0.26rem;
}
.tudetails-title {
  font-size: 0.28rem;
  color: #666;
  letter-spacing: 0.26px;
  margin-left: 0.06rem;
}
.aa img {
  width: 7.5rem;
  vertical-align: bottom;
}
.footerBar {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 0.01rem solid rgba(135, 135, 135, 0.2);
}
.footerBar ul {
  width: 3.06rem;
  height: 1rem;
  float: left;
  display: flex;
}
.footerBar ul li {
  width: 1.02rem;
  height: 1rem;
  position: relative;
  border-right: 0.01rem solid rgba(135, 135, 135, 0.2);
  box-sizing: border-box;
}
.footerBar ul li .footerImg {
  width: 0.7rem;
  height: 0.7rem;
  display: block;
  margin: 0.15rem auto 0;
}
.addBuy {
  width: 4.44rem;
  height: 1rem;
  overflow: hidden;
  float: left;
}
.addBuy div {
  width: 50%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  float: left;
}
.addBuy .addCar {
  background: #ffebe0;
  font-size: 0.3rem;
  color: #f25253;
}
.addBuy .Buy {
  background: #f53c28;
  font-size: 0.3rem;
  color: #fff;
}
.BuyMask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.close {
  width: 0.31rem;
  height: 0.31rem;
  position: absolute;
  top: 0.3rem;
  right: 0.35rem;
}
.Maskcontainer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 7.5rem;
  /*height: 5rem;*/
  background-color: white;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  z-index: 10;
}
.maskDesc {
  margin-top: 0.35rem;
  margin-left: 0.35rem;
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.maskDesc img {
  width: 1.7rem;
  height: 1.7rem;
}
.maskDesc .maskDescPrice {
  width: 4.6rem;
  margin-top: 0.85rem;
  margin-left: 0.2rem;
}
.maskDesc .maskDescPrice p {
  width: 100%;
  height: 0.37rem;
  color: rgba(97, 97, 97, 1);
  font-size: 0.26rem;
  line-height: 0.37rem;
  margin-bottom: 0.1rem;
}
.maskDesc .maskDescPrice .price span {
  display: inline-block;
  height: 0.5rem;
  color: rgba(255, 75, 75, 1);
  font-size: 0.36rem;
  line-height: 0.38rem;
}

.shuliang {
  margin-left: 0.35rem;
  color: rgba(97, 97, 97, 1);
  font-size: 0.28rem;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
}
.shuliangt {
  margin-bottom: 0.1rem;
}
.choose {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 0.01rem solid rgba(160, 160, 160, 1);
  width: 3.34rem;
  height: 0.7rem;
  line-height: 0.7rem;
  box-sizing: border-box;
  font-size: 0.28rem;
  color: rgba(97, 97, 97, 1);
  border-radius: 0.06rem;
  margin-bottom: 0.56rem;
}
.choose .jian {
  width: 33%;
  text-align: center;
  font-size: 0.35rem;
  border-right: 0.01rem solid rgba(160, 160, 160, 1);
}
.choose .liang {
  width: 33%;
  height: 0.69rem;
  text-align: center;
  border-left: none;
}
.choose .liang input {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.28rem;
  color: rgba(97, 97, 97, 1);
  border: none;
  background: #fff;
  outline: none;
  text-align: center;
}
.choose .jia {
  width: 33%;
  text-align: center;
  font-size: 0.35rem;
  border-left: 0.01rem solid rgba(160, 160, 160, 1);
}
.maskBtn {
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
  background-color: #f53c28;
}
.maskBtnNo {
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
  background-color: #686868;
}
</style>

