<template>
  <div class="container">
    <div class="head">

      <div class="back">
        <img class="backImg" src="https://img2.cdn.jinshilife.cn/nav_pd.png" alt="">
      </div>

      <div class="title">
        <h2
          @click="activeShow"
          :class="[tabShow?'active':'no-active']">展示中</h2>
        <h2
          @click="activeAll"
          :class="[tabAll?'active':'no-active']">商品列表</h2>
        <!-- <h2
          @click="activeUpload"
          :class="[tabUpload?'active':'no-active']">上传</h2> -->
      </div>

    </div>
    <div class="box">
      <!-- 展示 -->
      <div v-if="this.tabShow" class="show">
        <ul class="goodsLists">
          <li class="goodsBox" v-for="(list, index) in listsShow" :key="index">
            <div class="imgBox"><img class="Img" :src="list.src" :alt="list.name"></div>
            <div class="detail">
              <h2>{{list.name}}</h2>
              <p>{{list.detail}}</p>
              <h4>￥{{list.price}}</h4>
              <div class="yongjin">
                <span>￥{{list.vip_price}}</span>
                <h3>佣金</h3>
              </div>
            </div>
            <div class="btn" @click="handelCancel(index)">下架</div>
          </li>
          <!-- <li class="goodsBox">
            <div class="imgBox"><img class="Img" src="https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg" alt=""></div>
            <div class="detail">
              <h2>法国巴黎香水</h2>
              <p>法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水</p>
              <h4>￥2000</h4>
              <div class="yongjin">
                <span>￥8888</span>
                <h3>佣金</h3>
              </div>
            </div>
            <div class="btn">下架</div>
          </li> -->
        </ul>
      </div>
      <!-- 全部 -->
      <div v-if="this.tabAll" class="all">
        <ul class="goodsLists">
          <li class="goodsBox" v-for="(list, index) in listsAll" :key="index">
            <div class="imgBox"><img class="Img" :src="list.src" alt=""></div>
            <div class="detail">
              <h2>{{list.name}}</h2>
              <p>{{list.detail}}</p>
              <h4>￥{{list.price}}</h4>
              <div class="yongjin">
                <span>￥{{list.vip_price}}</span>
                <h3>佣金</h3>
              </div>
            </div>
            <div class="btn" @click="handelAdd(index,list.name)">上架</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    height: 100%;
    width: 100%;
  }
  /* 头部 */
  .head {
    position: fixed;
    top: 0;
    width: 7.5rem;
    height: 2.26rem;
    border-bottom: 0.02rem solid rgba(238,238,238,0.57);
    background-color: #fff;
    z-index: 999999;
  }
  .back {
    position: relative;
    height: 0.88rem;
    width: 7.5rem;
    padding-top: 0.55rem;
    margin-left: 0.3rem;
    line-height: 0.88rem;
    display: inline-block;
  }

  .backImg {
    width: 0.6rem;
    height: 0.6rem;
  }

  .title {
    display: flex;
    margin-left: 0.35rem;
    height: 1.16rem;
    line-height: 0.6rem;
    width: 100%;
  }

  .title h2 {
    margin-right: 0.5rem;
  }

  .active {
    text-align:center;
    font-family:PingFangSC-Regular;
    font-size:0.42rem;
    color:#F25253;
    letter-spacing:0;
    line-height:0.56rem;
  }

  .no-active {
    text-align:center;
    font-family:PingFangSC-light;
    font-size:0.36rem;
    color:#999999;
    letter-spacing:0;
  }

  /* 头部切换完毕 */

  .box {
    margin-top: 2.26rem;
  }

  .top {
    padding-top: 1.11rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }


  /* 商品列表 */
  .goodsLists {
    margin-top: 2.56rem;
  }

  .goodsBox {
    margin: 0.3rem;
    padding-bottom: 0.3rem;
    border-bottom: 0.02rem solid rgba(153,153,153,0.10);
    display: flex;
  }

  .btn {
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    width: 1.1rem;
    background: #F53C28;
    border-radius: 0.04rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #FFFFFF;
    letter-spacing: 0;
    margin-top: 1.5rem;
    margin-left: 0.3rem;
  }

  .detail {
    width: 3.2rem;
    margin-left: 0.3rem;
  }

  .detail h2 {
    height: 0.35rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #333333;
    letter-spacing: 0;
    line-height: 0.35rem;
    width: 3.2rem;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    margin-top: 0.2rem;
    box-sizing: border-box;
  }

  .detail p {
    height: 0.37rem;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #999999;
    letter-spacing: 0;
    width: 3.2rem;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }

  .detail h4 {
    height: 0.4rem;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
    line-height: 0.7rem;
    width: 3.2rem;
  }

  .yongjin {
    vertical-align: 10px;
  }

  .detail span {
    display: inline-block;
    height: 0.45rem;
    margin-top: 0.1rem;
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #F53C28;
    letter-spacing: 0;
  }

  .detail h3 {
    position: absolute;
    margin-top: 0.14rem;
    margin-left: 0.1rem;
    display: inline-block;
    font-family: PingFangSC-Medium;
    font-size: 0.22rem;
    color: #FFFFFF;
    letter-spacing: 0.2px;
    text-align: center;
    background-image: linear-gradient(90deg, #FE9243 0%, #F53C28 100%);
    border-radius: 0.04rem;
    height: 0.34rem;
    line-height: 0.34rem;
    width: 0.64rem;
  }

  .imgBox {
    height: 2rem;
    width: 2rem;
  }

  .Img {
    height: 2rem;
    width: 2rem;
  }



</style>


<script>
export default {
  data(){
    return {
      // tab兰切换
      tabShow: true,
      tabAll: '',
      tabUpload: '',
      listsShow: [
        {
          src: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
          name: '0法国巴黎香水',
          detail: '2法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水',
          price: '2000',
          vip_price: '123',
        },
        {
          src: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
          name: '1法国巴黎香水',
          detail: '法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水',
          price: '2000',
          vip_price: '123',
        },
        {
          src: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
          name: '2法国巴黎香水',
          detail: '法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水',
          price: '2000',
          vip_price: '123',
        }
      ],
      listsAll: [
        {
          src: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
          name: '0法国巴黎香水',
          detail: '法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水',
          price: '2000',
          vip_price: '123',
        },
        {
          src: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
          name: '1法国巴黎香水',
          detail: '法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水',
          price: '2000',
          vip_price: '123',
        },
        {
          src: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
          name: '法国巴黎香水',
          detail: '法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水法国巴黎香水',
          price: '2000',
          vip_price: '123',
        }
      ],
    }
  },
  methods: {
    // 激活展示
    activeShow() {
      this.tabShow = true;
      this.tabAll = false;
      this.tabUpload = false;
    },
    // 激活全部
    activeAll() {
      this.tabShow = false;
      this.tabAll = true;
      this.tabUpload = false;
    },
    // 下架  从一个数组截取，然后push到另一个数组
    handelCancel(index) {

      var arrShow = [];
      // var arrAll = [];

      arrShow = this.listsShow;
      // arrAll = this.listsAll;

      arrShow.splice(index, 1)

      this.listsShow = arrShow;
      // this.listsAll = arrAll;
    },
    // 上架
    handelAdd(index,name) {
      var arrShow = [];
      var arrAll = [];

      arrShow = this.listsShow;
      arrAll = this.listsAll;
      if(arrShow.length === 0) {
        this.listsShow.push(arrAll[index]);
      } else {
        for(var i = 0; i < arrShow.length; i++) {
          // 如果展示表里有 相同的  就不 push
          if(arrShow[i].name === name) {
            console.log('已上架');
            return;
          }
        }
        // push 的不能写到循环里
        this.listsShow.push(arrAll[index]);
      }
    }
  }
}
</script>



