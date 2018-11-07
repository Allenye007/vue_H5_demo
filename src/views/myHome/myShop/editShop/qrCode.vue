<template>
  <div class="container">
    <div class="head">

      <div class="back">
        <img class="backImg" src="https://img2.cdn.jinshilife.cn/nav_pd.png" alt="">
      </div>

      <div class="title">
        <h2
          @click="activeShow"
          :class="[tabShow?'active':'no-active']">展示</h2>
        <h2
          @click="activeAll"
          :class="[tabAll?'active':'no-active']">全部</h2>
        <h2
          @click="activeUpload"
          :class="[tabUpload?'active':'no-active']">上传</h2>
      </div>

    </div>
    <div class="box">
      <!-- 展示 -->
      <div v-if="this.tabShow" class="show">
        <div class="top"><img class="topImg" :src=this.showUrl alt=""></div>
        <div class="mid"><div @click="handelDelShow">删除</div></div>
        <div class="bot">
          <span>当展示的二维码被保存超过500次后，</span>
          <span>则自动替换掉该二维码，展示上传的其他二维码</span>
        </div>
      </div>
      <!-- 全部 -->
      <div v-if="this.tabAll" class="all">
        <ul class="codeLists">
          <li class="qrBox" v-for="(list, index) in lists" :key="index">
            <div class="codeBoc"><img class="codeImg" :src="list.url" alt=""></div>
            <div class="delBtn" @click="handelDelAll(index)">删除</div>
          </li>
        </ul>
      </div>
      <!-- 上传 -->
      <div v-if="this.tabUpload" class="upload">
        <!-- http://bapi.zhenxuan.mobi/upload -->
        <div class="top1">
          <div class="uploadBox">
            <div class="addIcon">
              <div class="heng"></div>
              <div class="shu"></div>
            </div>
            <el-upload
              id="abc123Up"
              class="avatar-uploader"
              action="http://bapi.zhenxuan.mobi/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              >
              <!-- :before-upload="beforeAvatarUpload" -->
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <div class="mid midTop"><div>上传</div></div>
            </el-upload>
          </div>
        </div>
        <div class="bot">
          <span>当展示的二维码被保存超过500次后，</span>
          <span>则自动替换掉该二维码，展示上传的其他二维码</span>
        </div>
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

  .box {
    margin-top: 2.26rem;
  }

  .top {
    padding-top: 1.11rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  .top1 {
    padding-top: 1.11rem;
    /* padding-bottom: 0.5rem; */
    text-align: center;
  }
  .topImg {
    width: 5.1rem;
    height: 5.1rem;
  }

  .uploadBox {
    width: 5.1rem;
    height: 5.1rem;
    margin-left: 1.2rem;
    background-color: #f1f1f1;
    margin-bottom: 2.87rem;
  }

  .addIcon {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 4.8rem;
    left: 15%;
  }

  .heng {
    height: 0.1rem;
    width: 2rem;
    background: #d9d9d9;
    border-radius:  1rem;
    position: absolute;
    top: 50%;
    left: 1.6rem
  }

  .shu {
    width: 0.1rem;
    height: 2rem;
    background: #d9d9d9;
    border-radius:  1rem;
    position: absolute;
    top: 6%;
    left: 2.53rem;
  }

  .mid {
    text-align: center;
    height: 0.8rem;
    margin-bottom: 1.45rem;
  }

  .midTop {
    margin-top: 3.8rem;
  }

  .mid div {
    display: inline-block;
    height: 0.8rem;
    line-height: 0.8rem;
    width: 1.6rem;
    background: #F53C28;
    border-radius: 0.06rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
    letter-spacing: 0;
  }

  .bot {
    text-align:center;
    width:92%;
    background:#f4f4f4;
    border-radius:0.06rem;
    height: 1.60rem;
    line-height:1.34rem;
    margin-left:4%;
    margin-bottom: 0.3rem;
  }

  .bot span {
    font-family:PingFangSC-light;
    font-size: 0.26rem;
    color:#999999;
    letter-spacing:0;
    text-align:center;
    display:block;
    height: 0.38rem;
  }


  .avatar-uploader .el-upload {
    border: 0.01rem dashed #d9d9d9;
    border-radius: 0.06rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: red;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 0.28rem;
    color: #8c939d;
    width: 1.78rem;
    height: 1.78rem;
    line-height: 1.78rem;
    text-align: center;
  }
  .avatar {
    width: 1.78rem;
    height: 1.78rem;
    display: block;
  }
  .avatar-uploader {
    text-align: center;
  }

  .avatar-uploader-icon[data-v-17b5c748] {
    height: 5.1rem;
    width: 5.1rem;
    opacity:0.4;
    background:#D8D8D8;
  }
  .el-icon-plus:before {
    content: ''
  }

  .codeLists {
    margin-top: 2.56rem;
    display: flex;
    flex-wrap:wrap;
  }

  .codeImg {
    display: inline-block;
    height: 3.3rem;
    width: 3.3rem;
    margin-left: 0.3rem;
    margin-bottom: 0.1rem;
    text-align: center;
  }

  .delBtn {
    display: inline-block;
    height: 0.7rem;
    width: 1.6rem;
    line-height: 0.7rem;
    background: #F53C28;
    border-radius: 0.06rem;
    margin-left: 1.11rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
    letter-spacing: 0;
    margin-bottom: 0.2rem;
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

      isShow: true,
      imageUrl: '',
      // 展示的二维码路径
      showUrl: '',
      lists: [
        {
          url: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
        },
        {
          url: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
        },
        {
          url: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
        },
        {
          url: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
        },
        {
          url: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
        },
        {
          url: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
        },
        {
          url: 'https://img0.cdn.jinshilife.cn/pic15345034971116skeo19ggia.jpg',
        },
      ]
    }
  },
  created() {
    // 进到页面显示 展示页面
    if(this.lists.length === 0) {
      this.tabUpload = true;
      this.tabShow = false;
      this.tabAll = false;
      this.$message.success('您还没有展示的二维码,请先上传！');
    } else {
      this.tabShow = true;
      this.tabAll = false;
      this.tabUpload = false;
      // 展示的二维码路径
      this.showUrl = this.lists[0].url
    }
  },
  methods: {
    // 激活展示
    activeShow() {
      this.tabShow = true;
      this.tabAll = false;
      this.tabUpload = false;
      if(this.lists.length === 0) {
        this.tabUpload = true;
        this.tabShow = false;
        this.$message.success('您还没有展示的二维码,请先上传！');
      } else {
        this.showUrl = this.lists[0].url
      }

    },
    // 激活全部
    activeAll() {
      this.tabShow = false;
      this.tabAll = true;
      this.tabUpload = false;
      if(this.lists.length === 0) {
        this.tabUpload = true;
        this.tabShow = false;
        this.tabAll = false;
        this.$message.success('您还没有展示的二维码,请先上传！');
      }
    },
    // 激活上传
    activeUpload() {
      this.tabShow = false;
      this.tabAll = false;
      this.tabUpload = true;
    },
    // 上传二维码成功
    handleAvatarSuccess(res) {
      var obj = {}
      obj.url = res.data;
      this.lists.push(obj);
    },
    // 全部页面删除二维码
    handelDelAll(index) {
      this.lists.splice(index, 1);
      this.lists = this.lists;
      if(this.lists.length === 0) {
        this.tabUpload = true;
        this.tabAll = false;
        this.tabShow = false;
        this.$message.success('您还没有展示的二维码,请先上传！');
      }
    },
    handelDelShow() {
      this.lists.splice(0, 1);
      if(this.lists.length>0) {
        this.showUrl = this.lists[0].url;
      } else {
        this.tabUpload = true;
        this.tabShow = false;
        this.$message.success('请上传二维码');
      }
    },
  }
}
</script>



