<template>
  <div class="container">
    <div class="header">
      <img src="https://img0.cdn.jinshilife.cn/nav_pd.png" class="backIconImg" alt="" @touchstart="goBack">
      <img src="https://img0.cdn.jinshilife.cn/mark.png" alt="" class="mask">
      <div class="bg"></div>
      <div class="editShop" v-show="VIP" @touchstart.prevent="goEditShop">编辑店铺</div>
      <div class="avatarBox">
        <img src="../../../../static/images/avatar.jpg" alt="">
      </div>
    </div>
    <div class="header2">
      <p class="hid">美食俱乐部</p>
      <p class="hid">欢迎大家来到我的店铺，快来看看吧！</p>
    </div>
    <div class="nav">
      <span @touchstart="copy" :data-clipboard-text="this.wechatNum" class="tag-read">联系店主</span>
      <span @touchstart="showQun">加入群组</span>
      <!--<span @touchstart="openShop">分享小店</span>-->
    </div>
    <p style="width: 100%;height: 0.16rem;background: #f4f4f4;"></p>
    <div class="shopDetail">
      <h2><span></span>店主推荐</h2>
      <ul>
        <li v-for="(item,index) in list">
          <img :src="item.img" alt="">
          <p class="hid">{{item.goods_name}}</p>
          <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
    <div class="maskBox" v-if="isShown">
      <div class="tanchu">
        <div class="markCon">
          <div class="descName">加入群聊</div>
          <img src="https://cdn.jiyong365.com/%E5%88%A0%E9%99%A4delete.png" alt="" @touchstart="closeMark">
        </div>
        <img :src="tempFilePaths" alt="" class="showImg" ref="Wantsave">
        <div id="savePic" @touchstart="savePic">保存图片</div>
      </div>
    </div>
    <div class="maskBox" v-if="selectShare">
      <div class="shareBox">
        <ul>
          <li>
            <img src="../../../../static/images/share_wx_pd.png" alt="">
            <p>分享给朋友</p>
          </li>
          <li>
            <img src="../../../../static/images/share_pyq_pd.png" alt="">
            <p>分享到朋友圈</p>
          </li>
        </ul>
        <div class="closeShare" @touchstart="closeShare">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Clipboard from 'clipboard';

    export default {
        name: "index",
      data(){
          return {
              VIP:true,
            //添加群聊和分享
              isShown:false,
              selectShare:false,
              list:[{
                img:'../../../../static/images/avatar.jpg',
                goods_name:'阳澄湖大闸蟹',
                price:'20.00'
              },{
                img:'../../../../static/images/avatar.jpg',
                goods_name:'阳澄湖大闸蟹',
                price:'20.00'
              },{
                img:'../../../../static/images/avatar.jpg',
                goods_name:'阳澄湖大闸蟹',
                price:'20.00'
              }],
            //群聊图片
            tempFilePaths:'../../../../static/images/avatar.jpg',
            //设置微信号
            wechatNum:'13611312124'
          }
      },
      methods:{
        goBack(){//返回上一级
          this.$router.back(-1);
        },
        goEditShop(){
          this.$router.push('/editShop');
        },
        showQun(){//群二维码显示
          if(this.tempFilePaths === null){
            this.$toast("您还没有上传图片!");
            this.isShown = false;
          }else{
            this.isShown = true;
          }
        },
        copy(){//复制微信号
            var clipboard = new Clipboard('.tag-read');
            if(this.wechatNum ===''){
              this.$toast('您还没有设置微信号');
            }else{
              clipboard.on('success', e => {
                //success("复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
                this.$toast('复制成功');
                // 释放内存
                clipboard.destroy();
              });
              clipboard.on('error', e => {
                // 不支持复制
                console.log('该浏览器不支持自动复制');
                // 释放内存
                clipboard.destroy();
              })
            }
        },
        closeMark(){//关闭群二维码
          this.isShown = false;
        },
        savePic(){//保存群二维码
            // console.log(String(this.$refs.Wantsave.src));
            var alink = document.createElement("a");
            alink.href = this.$refs.Wantsave.src;
            alink.download = "pic"; //图片名
            alink.click();
            this.$toast('已保存到相册');
            this.isShown = false;
        },
        closeShare(){//关闭分享
          this.selectShare = false;
        },
        openShop(){
          this.selectShare = true;
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
  .maskBox{
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.4);
    position:fixed;
    left:0;
    top:0;
    z-index:999;
  }
  .tanchu{
    width: 100%;
    height: 9.6rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .markCon{
    width:100%;
    position:relative;
    margin-top:0.46rem;
  }
  .descName{
    height:0.4rem;
    line-height:0.4rem;
    font-size:0.28rem;
    color:#333;
    text-align:center;
  }
  .markCon img{
    display:block;
    width:0.4rem;
    height:0.4rem;
    color:#333;
    position:absolute;
    right:0.3rem;
    top:0;
  }
  .showImg{
    width:5rem;
    height:6.48rem;
    margin:0.56rem 0 0 1.25rem;
  }
  #savePic{
    width:4.60rem;
    height:0.8rem;
    line-height:0.8rem;
    text-align:center;
    background:#f24442;
    border-radius:1rem;
    color:#fff;
    font-size:0.28rem;
    margin:0.40rem auto 0;

  }
  .hid{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .header{
    width: 100%;
    height: 5.01rem;
    position: relative;
    border-bottom: 0.02rem solid #f4f4f4;
  }
  .header .bg{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(-134deg, #FFE29D 0%, #DDB353 100%);
  }
  .header .backIconImg{
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.54rem;
    left: 0.23rem;
  }
  .mask{
    width: 100%;
    height: 1.1rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .editShop{
    width: 2.21rem;
    height: .74rem;
    line-height: 0.74rem;
    text-align: center;
    color: #fff;
    font-size: 0.36rem;
    border: 0.02rem dashed #fff;
    border-radius: 0.06rem;
    position: absolute;
    top: 1.2rem;
    left: 2.6rem;
  }
  .avatarBox{
    width: 1.52rem;
    height: 1.52rem;
    border-radius: 50%;
    border: 0.02rem solid #fff;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
  }
  .avatarBox img{
    width: 1.52rem;
    height: 1.52rem;
    border-radius: 50%;
    border: 0.02rem solid #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .header2{
    width: 100%;
    height: auto;
    position: absolute;
    top: 4rem;
    left: 0;
  }
  .header2 p{
    text-align: center;
  }
  .header2 p:first-child{
    font-size: 0.32rem;
    line-height: 0.45rem;
    color: #333333;
    letter-spacing: 0;
  }
  .header2 p:last-child{
    line-height: 0.4rem;
    font-size: 0.28rem;
    color: #999999;
    letter-spacing: 0;
  }
  .nav{
    border-bottom:0.01rem solid rgba(153, 153, 153, 0.1);
    padding:0.14rem 0rem;
    display: flex;
    justify-content: space-around;
  }
  .nav span{
    display: inline-block;
    width: 1.7rem;
    height: 0.6rem;
    line-height: 0.6rem;
    color: #fff;
    font-size: 0.26rem;
    opacity: 0.7;
    background: #F53C28;
    border-radius: 1rem;
    text-align: center;
  }
  .shopDetail{
    width: 6.9rem;
    height: 100%;
    margin: 0.2rem auto 0;
  }
  .shopDetail h2{
    font-size: 0.32rem;
    color: #333333;
    letter-spacing: 0;
    margin-bottom: 0.2rem;
  }
  .shopDetail span{
    display: inline-block;
    width: 0.12rem;
    height: 0.28rem;
    background: #f53c28;
    margin-right: 0.1rem;
    vertical-align: -2px;
  }
  .shopDetail ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;

  }
  .shopDetail ul li{
    width: 3.3rem;
    height: 4.2rem;
  }
  .shopDetail ul li img{
    width: 3.3rem;
    height: 3.3rem;
  }
  .shopDetail ul li p{
    line-height: 0.38rem;
  }
  .shopDetail ul li p:first-of-type{
    font-size: 0.26rem;
    color: #333333;
    letter-spacing: 0;
  }
  .shopDetail ul li p:last-of-type{
    font-size: 0.28rem;
    color: #F53C28;
    letter-spacing: 0;
  }
  .shareBox{
    width: 100%;
    height: 4.34rem;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .shareBox ul{
    width: 3.6rem;
    margin: 1rem auto 0;
    display: flex;
    justify-content: space-between;
  }
  .shareBox ul li{
    width: 1.6rem;
    height: 1.8rem;
  }
  .shareBox ul li img{
    display: block;
    margin: 0 auto;
    width: 1.2rem;
    height: 1.2rem;
  }
  .shareBox ul li p{
    height: 0.4rem;
    font-size:0.26rem;
    color:#666;
    letter-spacing:0;
    text-align:center;
    margin-top: 0.1rem;
  }
  .closeShare{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.3rem;
    color: #666;
    border-top: 0.02rem solid #f5f5f5;
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
