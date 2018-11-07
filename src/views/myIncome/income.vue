<template>
  <section class="container">
    <div class="head">
      <div class="headInner">
        <div class="backIcon"><img class="backIconImg" @touchstart="goBack"  src="https://img0.cdn.jinshilife.cn/nav_pd.png" alt=""></div>
        <div><h2>实时收益</h2></div>
      </div>
    </div>
    <div class="tabBar">
      <div @click="activeL"
      :class="[tabActiveL?'active':'no-active']"
      class="tabL">收入</div>

      <div @click="activeR"
        :class="[tabActiveR?'active':'no-active']"
        class="tabR">减免</div>
    </div>

    <div class="tabBarBot">
      <div
          @click="ActiveD"
          :class="[tabActiveD?'active_bot':'no-active_bot']"
          class="tabBarBotL">
          <!-- :class="[tabActiveD?'active_bot':'no-active_bot']" -->
        <span
          :class="[tabActiveD?'point-active':'point-no-active']"
          class="point"></span>
        <div class="botTxt"><p>本日</p></div>
      </div>

      <div class="line"></div>

      <div
          @click="ActiveM"
          :class="[tabActiveM?'active_bot':'no-active_bot']"
          class="tabBarBotR no-active_bot">
          <!-- :class="[tabActiveM?'active_bot':'no-active_bot']" -->

        <span
          :class="[tabActiveM?'point-active':'point-no-active']"
          class="point"></span>
        <div class="botTxt"><p>本月</p></div>
      </div>
    </div>

    <div class="conten">
      <!-- 水电费水电费水电费水电费 -->
      <!-- 收入 -->
      <ul id="example-1" v-if="this.tabActiveL">
        <li class="list" v-for="list in listsL" :key="list.monery">
          <div class="user">
            <h5 class="userName">{{list.userName}}</h5>
            <p class="time">{{list.time}}分钟前</p>
          </div>
          <div class="trand">
            <!-- <h6>交易金额</h6> -->
            <p>+{{list.monery}}</p>
          </div>
        </li>
      </ul>
      <!-- 减免 -->
      <ul id="example-1" v-if="this.tabActiveR">
        <li class="list" v-for="list in listsR" :key="list.monery">
          <div class="user">
            <h5 class="userName">{{list.userName}}</h5>
            <p class="time">{{list.time}}分钟前</p>
          </div>
          <div class="trand">
            <!-- <h6>交易金额</h6> -->
            <p>+{{list.monery}}</p>
          </div>
        </li>
      </ul>
      <!-- 本日 -->
      <ul id="example-1" v-if="this.tabActiveD">
        <li class="list" v-for="list in listsD" :key="list.monery">
          <div class="user">
            <h5 class="userName">{{list.userName}}</h5>
            <p class="time">{{list.time}}分钟前</p>
          </div>
          <div class="trand">
            <!-- <h6>交易金额</h6> -->
            <p>+{{list.monery}}</p>
          </div>
        </li>
      </ul>
      <!-- 本月 -->
      <ul id="example-1" v-if="this.tabActiveM">
        <li class="list" v-for="list in listsM" :key="list.monery">
          <div class="user">
            <h5 class="userName">{{list.userName}}</h5>
            <p class="time">{{list.time}}分钟前</p>
          </div>
          <div class="trand">
            <!-- <h6>交易金额</h6> -->
            <p>+{{list.monery}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      // tab 切换
      // 收入减免切换
      tabActiveL: true,
      tabActiveR: '',
      // 本日本月切换
      tabActiveD: true,
      tabActiveM: '',
      listsL: [
        {
          id: '1',
          userName: '安陶面膜',
          src: 'https://img2.cdn.jinshilife.cn/shareFriend.png',
          time: '15',
          monery: '213'
        },
        {
          id: '1',
          userName: '安陶面膜',
          src: 'https://img2.cdn.jinshilife.cn/shareFriend.png',
          time: '33',
          monery: '123'
        },
      ],
      listsR: [
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '9199'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '9919'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '9909'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '9599'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '9969'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '9299'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '9799'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '99223'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '9934349'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '92399'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '99349'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '99419'
        },
      ],
      listsD: [
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '9199'
        },
        {
          id: '1',
          userName: '安陶减肥',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '9909'
        },
        {
          id: '1',
          userName: '安陶面膜',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '99419'
        },
      ],
      listsM: [
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '9199'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '9909'
        },
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '99419'
        },
      ]
    }
  },
  mounted() {
    this.tabL = 'tabL'
    this.tabR = 'tabR'
  },
  methods: {
    activeL () {
      this.tabActiveL = true;
      this.tabActiveR = false;
    },
    activeR () {
      this.tabActiveL = false;
      this.tabActiveR = true;
    },
    ActiveD () {
      this.tabActiveM = false;
      this.tabActiveD = true;
    },
    ActiveM () {
      this.tabActiveD = false;
      this.tabActiveM = true;
    },
    // 返回
    goBack(){
      this.$router.back(-1);
    },
  }

}
</script>

<style scoped>
  .container {
    height: 100%  ;
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
    height: 0.85rem;
    overflow: hidden;
    border-bottom: 0.02rem solid #f4f4f4;
    margin-top: 1.32rem;
  }

  .tabBarBot {
    overflow: hidden;
    height: 0.65rem;
    border-bottom: 0.02rem solid #f4f4f4;
    line-height: 0.65rem;
  }

  .tabBarBotL {
    width: 3.74rem;
    float: left;
    text-align: center;
    /* border-right: 0.02rem  solid red; */
  }

  .tabBarBotR {
    width: 3.74rem;
    float: right;
    text-align: center;
    line-height: 0.65rem;
  }
  /* 文字未激活 */
  .no-active_bot {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #999999;
    letter-spacing: 0;
  }
  /* 文字激活 */
  .active_bot {
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #ECC871;
    letter-spacing: 0;
  }
  /* 小点公共 */
  .point {
    display: inline-block;
    height: 0.14rem;
    width: 0.14rem;
    border-radius: 100%;
    /* background-color: red; */
    margin-right: 0.1rem;
  }
  /* 小点激活 */
  .point-active {
    background: #ECC871;
  }
  /* 小点未激活 */
  .point-no-active {
    opacity: 0.6;
    background: #999999;
  }

  .botTxt {
    display: inline-block;
    vertical-align: middle;
    line-height: 0.35rem;
  }

  .botTxt p {
    line-height: 0.35rem;
  }

  .line {
    float: left;
    margin-top: 0.17rem;
    width: 0.01rem;
    height: 0.33rem;
    opacity: 0.2;
    background-color: #999;
  }

  .tabL {
    float: left;
  }

  .tabR {
    float: right;
  }

  .active {
    width: 3.75rem;
    height: 0.85rem;
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #FFFFFF;
    letter-spacing: 0;
    background: #ECC871;
    text-align: center;
    line-height: 0.85rem;
  }
  .no-active {
    width: 3.75rem;
    height: 0.85rem;
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #666;
    letter-spacing: 0;
    background: #fff;
    text-align: center;
    line-height: 0.85rem;
    /* border-bottom: 0.02rem solid #f4f4f4; */
    border-bottom: 0.02rem solid red;
  }

  .list {
    overflow: hidden;
    border-bottom:0.02rem solid #f4f4f4;
    height: 1.5rem
  }

  /* .ava {
    float: left;
    border-radius: 100%;
    margin-top: 0.32rem;
    margin-left: 4%;
  } */

  /* .avaImg {
    height: 0.9rem;
    width: 0.9rem;
    border-radius:100%;
  } */

  .user {
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.37rem
  }

  .user h5 {
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #333333;
    letter-spacing: 0;
    text-align: left;
  }

  .user p{
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
  }

  .trand {
    float: right;
    margin-top: 0.58rem;
    margin-right: 4%;
  }

  .trand p{
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
    text-align: center;
  }


</style>
