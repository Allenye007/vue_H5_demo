<template>
  <div class="container">
    <div class="header">
      <img src="https://img0.cdn.jinshilife.cn/nav_pd.png" class="backIconImg" alt="" @touchstart="goBack">
      <img src="https://img0.cdn.jinshilife.cn/mark.png" alt="" class="mask">
      <img class="bg" :src="backImg">
      <div class="editShop">
        <span style="z-index: 99999999;">编辑背景</span>
        <el-upload
          class="avatar-uploader"
          action="https://bapi.zhenxuan.mobi/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="imageUrl" :src="imageUrl" class="avatar2">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="avatarBox">
        <img src="../../../../../static/images/avatar.jpg" alt="">
      </div>
    </div>
    <div class="header2">
      <p class="hid" @touchstart="goShopName">美食俱乐部<img src="../../../../../static/images/编辑-铅笔.png" alt=""></p>
      <p class="hid" @touchstart="goShopNotice" style="margin-top: 0.06rem;">欢迎大家来到我的店铺，快来看看吧!<img src="../../../../../static/images/编辑-铅笔.png" alt=""></p>
    </div>
    <div class="nav">
      <span>联系店主</span>
      <span>加入群组</span>
    </div>
    <div class="bottom">
      <ul>
        <li @touchstart="goShopNumber">
          <span>店主微信</span>
          <p class="hid" style="margin-left: 0.3rem;">liangzhengwei035400</p>
          <img src="../../../../../static/images/个人中心入口.png" alt="">
        </li>
        <li @touchstart="goQRCode">
          <span>群组二维码</span>
          <p class="hid">可上传多张(多个群)</p>
          <img src="../../../../../static/images/个人中心入口.png" alt="">
        </li>
        <li @touchstart="goGoodsList">
          <span>管理店铺推荐的商品</span>
          <img src="../../../../../static/images/个人中心入口.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "editShop",
      data(){
          return {
            imageUrl: '',
            backImg:'../../../../../static/images/avatar.jpg',//背景图片
          }
      },
      methods:{
        //返回上一级
        goBack(){
          this.$router.back(-1);
        },
        // 跳转商品列表
        goGoodsList() {
          this.$router.push({name: 'goodsList'});
        },
        // 跳转二维码
        goQRCode() {
          this.$router.push({name: 'qrCode'});
        },
        // 三个页面
        // 去店铺名称
        goShopName() {
          this.$router.push({
            name: 'shopName',
            params: {
                key: 'showShopName',
            }
            },);
        },
        // 去公告
        goShopNotice() {
          this.$router.push({
            name: 'shopName',
            params: {
                key: 'showNotice',
            }
            },);
        },
        // 去微信号

        goShopNumber() {
          this.$router.push({
            name: 'shopName',
            params: {
                key: 'showNumber',
            }
            },);
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
          this.backImg = res.data;
        },
        readLocalFile: function () {
          var localFile = document.getElementById("uploadFile").files[0];
          var reader = new FileReader();
          var content;
          var current=this;
          reader.onload = function(event) {
            content = event.target.result;
            current.imgs.push(content);  //获取图片base64代码
          }
          reader.onerror = function(event) {
            alert('error')
          }
          content = reader.readAsDataURL(localFile,"UTF-8");
          var sss=document.getElementById("uploadFile").value;
          console.log(sss);
        }
      }
    }
</script>

<style scoped>
  .avatar-uploader{
    width: 2.21rem;
    height: 0.74rem;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 2.21rem;
    height: .74rem;
    line-height: .74rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  .el-icon-plus:before {
    content: '';
  }
  .avatar2 {
    width: 178px;
    height: 178px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
  }

  /*------------*/


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
    overflow: hidden;
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
  .header2{
    width: 100%;
    height: auto;
    position: absolute;
    top: 4rem;
    left: 0;
  }
  .header2 p{
    text-align: center;
    text-decoration: underline;
  }
  .header2 p img{
    width: 0.28rem;
    height: 0.28rem;
    margin-left: 0.15rem;
    vertical-align: -2px;
  }
  .header2 p:first-child{
    font-size: 0.32rem;
    line-height: 0.4rem;
    color: #333333;
    letter-spacing: 0;
  }
  .header2 p:last-child{
    line-height: 0.45rem;
    font-size: 0.28rem;
    color: #999999;
    letter-spacing: 0;
  }
  .nav{
    border-bottom:0.16rem solid rgba(153, 153, 153, 0.1);
    padding:0.14rem 0;
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
    background: #B3B3B3;
    border-radius: 1rem;
    text-align: center;
  }
  .bottom{
    width: 100%;
    height: 100%;
  }
  .bottom ul{
    width: 100%;
    margin: 0 auto;
  }
  .bottom ul li{
    width: 6.9rem;
    height: 0.4rem;
    line-height: 0.4rem;
    overflow: hidden;
    padding: 0.3rem;
    background: #fff;
    border-bottom: 0.02rem solid #f4f4f4;
  }
  .bottom ul li span{
    display: inline-block;
    line-height: 0.4rem;
    font-size: 0.28rem;
    float: left;
    color: #333;
  }
  .bottom ul li p{
    width: 5rem;
    line-height: 0.4rem;
    text-align: right;
    color: #999;
    float: left;
  }
  .bottom ul li img{
    width: 0.42rem;
    height: 0.42rem;
    display: block;
    float: right;
  }
</style>
