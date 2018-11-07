<template>
  <section class="container">
    <div class="head">
      <div class="headInner">
        <div class="backIcon"><img class="backIconImg" @touchstart="goBack"  src="https://img0.cdn.jinshilife.cn/nav_pd.png" alt=""></div>
        <div><h2>我的客户</h2></div>
      </div>
    </div>
    <div class="tabBar">
      <div @click="activeL"
      :class="[tabActiveL?'active':'no-active']"
      class="tabL">实时客户</div>

      <div @click="activeR"
        :class="[tabActiveR?'active':'no-active']"
        class="tabR">分店店主</div>
    </div>
    <div class="conten">
      <!-- 实时客户 -->
      <ul id="example-1" v-if="this.tabActiveL">
        <li class="list" v-for="list in listsL" :key="list.id">
          <div class="ava"><img class="avaImg" :src=list.src alt=""></div>
          <div class="user">
            <h5 class="userName">{{list.userName}}</h5>
            <p class="time">最近交易时间：{{list.time}}分钟前</p>
          </div>
          <div class="trand">
            <h6>交易金额</h6>
            <p>￥{{list.monery}}</p>
          </div>
        </li>
      </ul>
      <!-- 分店店主 -->
      <ul id="example-1" v-if="this.tabActiveR">
        <li class="list" v-for="list in listsR" :key="list.id">
          <div class="ava"><img class="avaImg" :src=list.src alt=""></div>
          <div class="user">
            <h5 class="userName">{{list.userName}}</h5>
            <p class="time">最近交易时间：{{list.time}}分钟前</p>
          </div>
          <div class="trand">
            <h6>交易金额</h6>
            <p>￥{{list.monery}}</p>
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
      tabActiveL: true,
      tabActiveR: '',
      listsL: [
        {
          id: '1',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/shareFriend.png',
          time: '15',
          monery: '23'
        },
        {
          id: '12',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/shareFriend.png',
          time: '15',
          monery: '23'
        },
        {
          id: '14',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/shareFriend.png',
          time: '33',
          monery: '23'
        },
      ],
      listsR: [
        {
          id: '15',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '16',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '17',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '999'
        },
        {
          id: '18',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '19',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '23',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '999'
        },
        {
          id: '1123',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '112',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '1453',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '999'
        },
        {
          id: '1342',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '123',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '33',
          monery: '999'
        },
        {
          id: '12321',
          userName: 'Foo',
          src: 'https://img2.cdn.jinshilife.cn/%E5%A4%B4%E5%83%8Fbg-%E4%BC%98%E4%BA%AB%E4%BC%9A%E5%91%98.png',
          time: '15',
          monery: '999'
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
    // 返回
    goBack() {
      this.$router.back(-1);
    }
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

  .ava {
    float: left;
    border-radius: 100%;
    margin-top: 0.32rem;
    margin-left: 4%;
  }

  .avaImg {
    height: 0.9rem;
    width: 0.9rem;
    border-radius:100%;
  }

  .user {
    float: left;
    margin-left: 0.2rem;
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
    margin-top: 0.40rem;
    margin-right: 4%;
  }

  .trand h5 {
    opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
  }

  .trand p{
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
    text-align: center;
  }


</style>
