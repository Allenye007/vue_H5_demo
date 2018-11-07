<template>
  <div id="container">
    <div class="dz" v-show="false">
      <div class="header">
        <i class="bg"></i>
        <div class="avatar">
          <img src="../../../static/images/avatar.jpg" alt="">
        </div>
        <img src="../../../static/images/大众用户.png" alt="" class="dz_vip">
      </div>
      <div class="goBuy">
        <img src="../../../static/images/皇冠.png" alt="" class="crown">
        <div class="goBuyText">
          <span>下单即成店主</span>
          <p>购买指定商品即可成为店主</p>
        </div>
        <div class="goBuyIcon">
          <span>去购买</span>
          <i class="iconImg"></i>
        </div>
      </div>
    </div>
    <div class="zhenxuandianzhu">
      <div class="header2">
        <i class="bg2"></i>
        <div class="header_left">
          <div class="avatar2" @touchstart="goMyShop">
            <img src="../../../static/images/avatar.jpg" alt="">
          </div>
          <div class="header_right">
            <p class="compony">深圳安陶生物科技</p>
            <p class="card">真选店主</p>
          </div>
        </div>
        <div class="goPersonal" @touchstart="goMyShop">
          <p @touchstart="goMyShop">店</p>
          <i class="arrowRight" @touchstart="goMyShop"></i>
        </div>
        <div class="header_detail">
          <ul class="details_total">
            <li v-for="(item,index) in orderList" :key="index">
              <p class="num hid">{{item.num>10000? '10000+':item.num}}</p>
              <p class="txt hid">{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="router">
        <ul>
          <li v-for="(item,index) in iconList" @touchstart="goRouter(index)">
            <img :src="item.icon" alt="" class="routerIcon">
            <p class="routerTitle">{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="order">
        <div class="orderHead">
          <span>客户订单</span>
          <span id="all" @touchstart="goOrder($event)">查看更多<i></i></span>
        </div>
      </div>
      <div>
        <ul class="ordersList">
          <li id="dfk" @touchstart="goOrder($event)">
            <img src="../../../static/images/待付款.png" alt="" class="orderIcon">
            <p class="orderTitle">待付款</p>
            <span v-if="this.dfkNum > 0" class="OrderNum">{{this.dfkNum}}</span>
            <span v-if="this.dfkNum >= 10" class='OrderNum'>...</span>
          </li>
          <li id="dfh" @touchstart="goOrder($event)">
            <img src="../../../static/images/待发货.png" alt="" class="orderIcon">
            <p class="orderTitle">待发货</p>
            <span v-if="this.dfhNum > 0" class="OrderNum">{{this.dfhNum}}</span>
            <span v-if="this.dfhNum >= 10" class='OrderNum'>...</span>
          </li>
          <li id="dsh" @touchstart="goOrder($event)">
            <img src="../../../static/images/待收货.png" alt="" class="orderIcon">
            <p class="orderTitle">待收货</p>
            <span v-if="this.dshNum > 0" class="OrderNum">{{this.dshNum}}</span>
            <span v-if="this.dshNum >= 10" class='OrderNum'>...</span>
          </li>
          <li id="dpj" @touchstart="navDPJ">
            <img src="../../../static/images/待评价.png" alt="" class="orderIcon">
            <p class="orderTitle">待评价</p>
            <span v-if="this.dpjNum > 0" class="OrderNum">{{this.dpjNum}}</span>
            <span v-if="this.dpjNum >= 10" class='OrderNum'>...</span>
          </li>
        </ul>
      </div>
      <ul class="Shopkeeper">
        <li v-for="(item,index) in ShopkeeperList">
          <div class="top">
            <i class="line"></i>
            <span>{{item.title}}</span>
            <span>{{item.why}}</span>
          </div>
          <p class="hid">￥{{item.money>100000? '10000+':item.money}}</p>
        </li>
      </ul>
      <div class="goBuy">
        <img src="../../../static/images/皇冠.png" alt="" class="crown">
        <div class="goBuyText">
          <span>分享小店</span>
          <p>分享小店，好友购买商品您赚佣金</p>
        </div>
        <div class="goBuyIcon">
          <span>去分享</span>
          <i class="iconImg"></i>
        </div>
      </div>
    </div>
    <div class="follow">
      关注公众号，实时推送优惠商品
      <span class="followBtn">立即关注</span>
    </div>
    <div class="rootMain">
      <p class="title">店主专享</p>
      <ul class="goods">
        <li v-for="(item,index) in listShare" :key="index">
          <img :src="item.img" alt="" class="goods_img">
          <div class="detail">
            <p class="goods_name hid">{{item.goods_name}}</p>
            <p class="goods_describe hid">{{item.describe}}</p>
            <p class="goods_notPrice">￥{{item.NotPrice}}</p>
            <p class="goods_price">￥{{item.price}} <img src="../../../static/images/专享价.png" alt="" class="goods_iconP"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        //店主专享商品列表
        listShare:[{
          img:'../../../static/images/1.jpg',
          goods_name:'石榴',
          describe:'好吃非常好吃好吃的不得了啊~~~~~~~~~',
          price:28,
          NotPrice:29.9
        },{
          img:'../../../static/images/1.jpg',
          goods_name:'石榴',
          describe:'好吃非常好吃好吃的不得了啊~~~~~~~~~',
          price:28,
          NotPrice:29.9
        },],
        //真选店主total
        orderList:[{
          num:186,
          title:'日销售额'
        },{
          num:186,
          title:'月销售额'
        },{
          num:186,
          title:'月订单'
        },{
          num:10000000,
          title:'待入账'
        }],
        //数据分析、实时收益、我的客户
        iconList:[{
          icon:'../../../static/images/数据分析.png',
          title:'数据分析'
        },{
          icon:'../../../static/images/实时收益.png',
          title:'实时收益'
        },{
          icon:'../../../static/images/我的客户.png',
          title:'我的客户'
        }],
        //店主总数
        ShopkeeperList:[{
          title:'佣金总数',
          why:'分享赚钱',
          money:102498
        },{
          title:'省钱总计',
          why:'购买省钱',
          money:10245
        }],
        //客户订单个数显示
        dfkNum:0,
        dfhNum:2,
        dshNum:3,
        dpjNum:11
      }
    },
    methods:{
      goMyShop(){
        this.$router.push('/ShopIndex');
      },
      goRouter(index) {
        switch (index) {
          case 0:
            this.navAnalysis();
            break;
          case 1:
            this.navIncome();
            break;
          case 2:
            this.navGuest();
            break;
        }
      },
      navIncome(){
        this.$router.push('/income');
      },
      navAnalysis(){
        this.$router.push('/analysis');
      },
      navGuest(){
        this.$router.push('/guest');
      },
      CustomerOrder(){//客户订单
        this.$router.push('/CustomerOrder');
      },
      goOrder(e){
        switch (e.currentTarget.id) {
          case 'dfk':
            this.navDFK();
            break;
          case 'dfh':
            this.navDFH();
            break;
          case 'dsh':
            this.navDSH();
            break;
          case 'all':
            this.navall();
            break;
        }
      },
      navDFK(){//待付款
        this.$router.push('/CustomerOrder?status=dfk');
      },
      navDFH(){//待发货
        this.$router.push('/CustomerOrder?status=dfh');
      },
      navDSH(){//待收货
        this.$router.push('/CustomerOrder?status=dsh');
      },
      navDPJ(){//待评价
        this.$router.push('/CustomerEvaluate');
      },
      navall(){//查看全部
        this.$router.push('/CustomerOrder?status=all');
      }
    }
  }
</script>

<style scoped>
  .follow{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.28rem;
    color: #FFFFFF;
    background: rgba(0,0,0,0.5);
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .follow span{
    display: inline-block;
    width: 1.8rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border: 0.03rem solid #fff;
    border-radius: 1rem;

  }
/*头部样式*/
  .header{
    width: 100%;
    height: 3.64rem;
    overflow: hidden;
    position: relative;
  }
  .header .bg{
    display: inline-block;
    width: 100%;
    height: 3.64rem;
    background: url("../../../static/images/Rectangle.png") no-repeat;
    background-size: 100%;
  }
  .header .avatar{
    width: 1.42rem;
    height: 1.42rem;
    background: url("../../../static/images/dz.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
  }
  .header .avatar img{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .header .dz_vip{
    width: 1.42rem;
    height: 0.42rem;
    position: absolute;
    bottom: 0.28rem;
    left: 3rem;
  }
  /*去购买*/
  .goBuy{
    width: 6.9rem;
    height: 1rem;
    background: url("../../../static/images/分享小店bg.png") no-repeat;
    margin: 0.3rem auto;
    position: relative;
    overflow: hidden;
  }
  .goBuy .crown{
    width: 0.56rem;
    height: 0.56rem;
    margin: 0.22rem;
    float: left;
  }
  .goBuyText{
    float: left;
    margin-top: 0.11rem;
  }
  .goBuyText span{
    display: inline-block;
    font-weight: bold;
    line-height: 0.3rem;
    font-size: 0.26rem;
    color: #6D4F17;
    letter-spacing:0.92px;
  }
  .goBuyText p{
    opacity: 0.8;
    font-size: 0.22rem;
    line-height: 0.3rem;
    color: #6D4F17;
    letter-spacing:0.92px;
  }
  .goBuyIcon{
    float: right;
    margin-top: 0.3rem;
    margin-right: 0.4rem;
  }
  .goBuyIcon span{
    font-size: 0.22rem;
    color: #6D4F17;
    letter-spacing: 0;
  }
  .goBuyIcon i{
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    background: url("../../../static/images/去分享.png") no-repeat center;
    vertical-align: -2px;
  }
  /*店主专享*/
  .rootMain{
    width: 6.9rem;
    height: 100%;
    margin: 0 auto;
  }
  .rootMain p.title{
    font-size: 0.32rem;
    color: #333333;
    font-weight: bold;
    letter-spacing: 0;
  }
  /*超出隐藏*/
  .hid{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods{
    width: 100%;
    overflow: hidden;
  }
  .goods li{
    padding: 0.3rem 0;
    border-bottom: 0.01rem solid #f4f4f4;
    overflow: hidden;
  }
  .goods li:last-child{
    margin-bottom: 1rem;
  }
  .goods li img.goods_img{
    width: 2rem;
    height: 2rem;
    display: block;
    float: left;
  }
  .goods li .detail{
    width: 4.5rem;
    float: left;
    margin-left: 0.3rem;
  }
  .goods li .detail p{
    line-height: 0.3rem;
  }
  .detail .goods_name{
    font-size: 0.28rem;
    color: #333333;
    letter-spacing: 0;
    margin-top: 0.15rem;
  }
  .detail .goods_describe{
    font-size: 0.24rem;
    color: #999;
    letter-spacing: 0;
    margin-top: 0.15rem;
  }
  .detail .goods_notPrice{
    font-size: 0.26rem;
    color: #999;
    letter-spacing: 0;
    margin-top: 0.3rem;
    text-decoration: line-through;
  }
  .detail .goods_price{
    font-size: 0.32rem;
    color: #F53C28;
    letter-spacing: 0;
    margin-top: 0.1rem;
  }
  .detail .goods_price .goods_iconP{
    width: 0.7rem;
    height: 0.3rem;
    /*margin-top: 0.2rem;*/
    vertical-align: -2px;
  }

  /*真选店主*/
  /*头部*/
  .header2{
    width: 100%;
    height: 4.8rem;
    overflow: hidden;
    position: relative;
  }
  .header2 .bg2{
    display: inline-block;
    width: 100%;
    height: 4.8rem;
    background: url("../../../static/images/dzz.png") no-repeat;
    background-size: 100%;
  }
  .header2 .header_left{
    position: absolute;
    top: 1.58rem;
    left: 0.5rem;
  }
  .header2 .avatar2{
    width: 1.42rem;
    height: 1.42rem;
    background: url("../../../static/images/vip.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
  }
  .header2 .avatar2 img{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .header_right{
    margin-left: 1.7rem;
  }
  .header_right .compony{
    width: 2.08rem;
    height: 0.37rem;
    font-size: 0.26rem;
    color: #5A4215;
    letter-spacing: 0;
    margin-top: 0.16rem;
  }
  .header_right .card{
    width: 1.28rem;
    height: 0.42rem;
    line-height: 0.42rem;
    background: url("../../../static/images/真选店主bg.png") no-repeat;
    background-size: 100%;
    font-size: 0.22rem;
    color: #FDE5AA;
    letter-spacing: 0;
    text-align: center;
    margin-top: 0.16rem;
  }
  .goPersonal{
    width: 1.2rem;
    position: absolute;
    right: 0;
    top: 2rem;
  }
  .goPersonal p{
    width: 0.57rem;
    height: 0.57rem;
    line-height: 0.57rem;
    text-align: center;
    border-radius: 50%;
    background: #5A4215;
    color: #E3BC61;
    font-size: 0.25rem;
  }
  .goPersonal .arrowRight{
    display: inline-block;
    width: 0.39rem;
    height: 0.39rem;
    background: url("../../../static/images/进入小店.png") no-repeat;
    background-size: 100%;
    position: absolute;
    right: 0.18rem;
    top: 0.06rem;
  }
  /*header订单等*/
  .header_detail{
    width: 100%;
    height: 1.16rem;
    background: url("../../../static/images/bg-1.png") no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .details_total{
    width: 100%;
    height: 1.16rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .details_total li{
    width: 25%;
  }
  .details_total li p{
    text-align: center;
  }
.details_total li p.num{
  font-size: 0.34rem;
  line-height: 0.48rem;
  color: #5A4215;
  letter-spacing: 0;
}
  .details_total li p.txt{
    opacity: 0.7;
    font-size: 0.24rem;
    color: #5A4215;
    letter-spacing: 0;
    text-align: center;
    line-height: 0.33rem;
  }
  .router ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.34rem 0;
    border-bottom: 0.04rem solid #F4F4F4;
  }
  .router ul li{
    width: 30%;
  }
  .router ul li .routerIcon{
    display: block;
    margin: 0 auto;
    width: 0.7rem;
    height: 0.7rem;
  }
  .router ul li .routerTitle{
    width: 100%;
    height: 0.37rem;
    line-height: 0.37rem;
    text-align: center;
    font-size: 0.24rem;
  }
  /*订单*/
  .order{
    padding: 0 0.3rem;
  }
  .orderHead{
    padding: 0.15rem 0;
    border-bottom: 0.01rem solid #f4f4f4;
  }
  .orderHead span:first-child{
    font-size: 0.28rem;
    color: #444444;
    letter-spacing: 0;
    font-weight: bold;
  }
  .orderHead span:last-child{
    font-size: 0.22rem;
    color: #999999;
    letter-spacing: 0;
    float: right;
  }
  .orderHead span:last-child i{
    display: inline-block;
    width: 0.28rem;
    height: 0.28rem;
    background: url("../../../static/images/查看更多.png") no-repeat;
    background-size: 100%;
    vertical-align: -2px;
  }
  .ordersList{
    border-bottom: 0.02rem solid #f4f4f4;
    padding: 0.3rem 0;
    display: flex;
    justify-content: space-around;
  }
  .ordersList li{
    position: relative;
  }
  .ordersList li .orderIcon{
    width: 0.8rem;
    height: 0.8rem;
  }
  .ordersList li .orderTitle{
    line-height: 0.33rem;
    font-size: 0.24rem;
    color: #929292;
    letter-spacing: 0;
  }
  .ordersList li .OrderNum{
    display: inline-block;
    width: 0.28rem;
    height: 0.28rem;
    line-height: 0.28rem;
    text-align: center;
    background: #5A4215;
    color: #E7C068;
    border-radius: 50%;
    font-size: 0.24rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  .Shopkeeper{
    padding: 0 4%;
    border-bottom: 0.02rem solid #f4f4f4;
    display: flex;
    justify-content: space-around;
  }
  .Shopkeeper li{
    width: 2.8rem;
    padding: 0 0.25rem;
    background: #F4F4F4;
    border-radius: 0.06rem;
    margin: 0.25rem 0;
  }
  .Shopkeeper li .top{
    line-height: 0.4rem;
    border-bottom: 0.02rem solid rgba(153,153,153,0.5);
    padding-top: 0.12rem;
    padding-bottom: 0.1rem;
    position: relative;
  }
  .Shopkeeper li .top .line{
    display: inline-block;
    width: 0.08rem;
    height: 0.26rem;
    background: #ECC871;
    vertical-align: -2px;
  }
  .Shopkeeper li .top span:first-of-type{
    display: inline-block;
    margin-left: 0.05rem;
    font-size: 0.28rem;
    color: #333333;
  }
  .Shopkeeper li .top span:last-of-type{
    display: inline-block;
    opacity: 0.6;
    font-size: 0.2rem;
    color: #666666;
    position: absolute;
    right: 0;
    top: 0.15rem;
  }
  .Shopkeeper li p{
    width: 2.8rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.36rem;
    color: #333333;
    padding: 0.1rem 0;
  }
</style>
