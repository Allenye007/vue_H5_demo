<template>
  <div class="container">
    <div class="head">
      <div class="back">
        <img class="backImg" src="https://img2.cdn.jinshilife.cn/nav_pd.png" alt="">
        <h2>数据分析</h2>
      </div>
      <h1>15646546</h1>
      <h6>年度总销售额</h6>
    </div>
    <nav>
      <div
          @click="activeDay"
          :class="[tabDay? 'active' : 'no-active']"
          class="l">今日</div>
      <div
          @click="activeMonth"
          :class="[tabMonth? 'active' : 'no-active']"
          class="r">30日</div>
    </nav>
    <div v-if="this.tabDay" class="box">
      <section>
        <div class="title">销售总计</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>16单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
      <section>
        <div class="title">佣金收入</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>16123单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
      <section>
        <div class="title">自购减免</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>16123单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
      <section>
        <div class="title">邀请店主</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>16单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
    </div>
    <div v-if="this.tabMonth" class="box">
      <section>
        <div class="title">销售总计</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>16单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
      <section>
        <div class="title">佣金收入</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>165656单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
      <section>
        <div class="title">自购减免</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>16单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
      <section>
        <div class="title">邀请店主</div>
        <div class="bot">
          <div class="left">
            <p>总订单</p>
            <span>16单</span>
          </div>
          <div class="line"></div>
          <div class="right">
            <p>总金额</p>
            <span>40元</span>
          </div>
        </div>
      </section>
    </div>


  </div>
</template>

<style scoped>
  .container {
    height: 100%  ;
  }
  /* 头部 */
  .head {
    position: fixed;
    top: 0;
    /* position: relative; */
    width: 7.5rem;
    height: 4rem;
    background-image: linear-gradient(134deg, #FFE29D 0%, #DDB353 100%);
    text-align: center;
  }
  .back {
    position: relative;
    height: 0.88rem;
    width: 7.5rem;
    padding-top: 0.55rem;
    line-height: 0.88rem;
    text-align: center;
    display: inline-block;
  }
  .back h2 {
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #333333;
    text-align: center;
  }
  .backImg {
    position: absolute;
    height: 0.6rem;
    width: 0.6rem;
    bottom: 0.14rem;
    left: 0.1rem;
  }

  .head h1 {
    margin-top: 0.5rem;
    font-family: PingFangSC-Medium;
    font-size: 0.64rem;
    color: #5A4215;
    letter-spacing: 0;
  }

  .head h6 {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #5A4215;
    letter-spacing: 0;
    margin-top: 0.35rem;
  }

  /* tab切换蓝 */
  nav {
    height: 0.6rem;
    margin: 0.3rem 4% 0.3rem 4%;
    border-radius: 0.1rem;
    margin-top: 4.3rem;
  }
  nav div {
    height: 0.6rem;
    width: 3.45rem;
    line-height: 0.6rem;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    letter-spacing: 0;
    text-align: center;
    box-shadow: 0 2px 14px 0 rgba(157,120,51,0.20);

  }
  .l {
    border-radius: 0.10rem 0 0 0.10rem;
  }
  .r {
    border-radius: 0 0.10rem 0.10rem 0;
  }
  .active {
    background: #ECC871;
    color: #FFFFFF;
  }
  .no-active {
    background: #FFFFFF;
    color: #999;
  }

  section {
    height: 2.09rem;
    width: 6.90rem;
    background: #F4F4F4;
    border-radius: 0.1rem;
    margin-left: 4%;
    margin-bottom: 0.2rem;
  }

  .title {
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    border-bottom: 0.02rem solid rgba(153, 153, 153, 0.06);
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
  }

  .bot {
    display: flex;
  }

  .left,.right {
    width: 344rem;
    margin-top: 0.2rem;
    text-align: center;
  }

  .left {
    border-right: 0.02rem solid rgba(153, 153, 153, 0.06);
  }

  .line {
    height: 0.6rem;
    width: 0.02rem;
    opacity: 0.1;
    background: #999999;
  }

  .bot p {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
  }

  .bot  {
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
  }


</style>


<script>
export default {
  data(){
    return {
      // tab兰切换
      tabDay: true,
      tabMonth: '',

    }
  },
  methods: {
    // 激活天
    activeDay() {
      this.tabDay = true;
      this.tabMonth = false;
    },
    // 激活月
    activeMonth() {
      this.tabDay = false;
      this.tabMonth = true;
    }
  }
}
</script>


