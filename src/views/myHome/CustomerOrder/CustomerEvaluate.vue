<template>
  <div class="container">
    <div class="header">
      <img src="https://img0.cdn.jinshilife.cn/nav_pd.png" class="backIconImg" alt="" @touchstart="goBack">
      客户评价
    </div>
    <div class="tabbar">
      <ul>
        <li v-for="(item,index) in bar" @touchstart="tab(index)"><span :class="{active:index === num}">{{item}}</span></li>
      </ul>
    </div>
    <div class="content">
      <ul v-show="num === 0">
        <li v-for="(item,index) in PayListWait" :key="index">
          <div>
            <div class="content_top">
              {{index+1}}.客户名称：{{item.name}}
            </div>
            <div class="content_center">
              <img :src="item.img" alt="" class="goods_img">
              <div class="goods_detail">
                <p class="hid">{{item.goods_name}}</p>
                <p>{{item.sku}}</p>
              </div>
              <div class="Status">{{item.status}}</div>
            </div>
          </div>
        </li>
        <li v-if="isShow0" class="lis">
          <img src="https://cdn.jiyong365.com/%E8%AF%84%E8%AE%BAzhanwei.png" alt="" class="NoList">
          <p class="NoTxt">快来评价吧，等你好久啦~~</p>
        </li>
      </ul>
      <ul v-show="num === 1">
        <li v-for="(item,index) in PayListAlready" :key="index">
          <div>
            <div class="content_top">
              {{index+1}}.客户名称：{{item.name}}
            </div>
            <div class="content_center">
              <img :src="item.img" alt="" class="goods_img">
              <div class="goods_detail">
                <p class="hid">{{item.goods_name}}</p>
                <p>{{item.sku}}</p>
              </div>
              <div class="Status">{{item.status}}</div>
            </div>
          </div>
        </li>
        <li v-if="isShow1" class="lis">
          <img src="https://cdn.jiyong365.com/%E8%AF%84%E8%AE%BAzhanwei.png" alt="" class="NoList">
          <p class="NoTxt">快来评价吧，等你好久啦~~</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "CustomerEvaluate",
      data(){
          return{
            bar:['待评价','已评价'],
            num:0,
            PayListWait:[{
              name:'梁政伟',
              img:'../../../../static/images/avatar.jpg',
              goods_name:'阳澄湖大闸蟹',
              sku:'2俩8只',
              status:'待评价',
              total:198
            },{
              name:'梁政伟',
              img:'../../../../static/images/avatar.jpg',
              goods_name:'阳澄湖大闸蟹',
              sku:'2俩8只',
              status:'待评价',
              total:198
            }],
            PayListAlready:[],
            isShow0:false,
            isShow1:false,
          }
      },
      methods:{
        goBack(){//返回上一级
          this.$router.back(-1);
        },
        tab(index){
          this.num=index;
        }
      },
      mounted(){
        if(this.PayListWait.length === 0) {
          this.isShow0 = true;
        } else {
          this.isShow0 = false;
        }
        if(this.PayListAlready.length === 0) {
          this.isShow1 = true;
        } else {
          this.isShow1 = false;
        }
      }
    }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
    /*background: #f4f4f4;*/
  }
  .hid{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header{
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    position: relative;
    font-size: 0.36rem;
    color: #333;
    font-weight: bold;
    margin-top: 0.44rem;
    background: #fff;
  }
  .header .backIconImg{
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.14rem;
    left: 0;
  }
  .tabbar{
    width: 100%;
    height: 0.74rem;
    background: #fff;
    border-bottom: 0.1rem solid #eaeaea;
    padding-top: 0.1rem;
    padding-bottom: 0.05rem;
  }
  .tabbar ul{
    overflow: hidden;
    padding: 0 1.28rem;
  }
  .tabbar ul li{
    width: 2.47rem;
    height: 0.74rem;
    line-height: 0.74rem;
    text-align: center;
    color: #666;
    font-size: 0.28rem;
    float: left;
  }
  .tabbar ul li span{
    /*width: 1.58rem;*/
    display: inline-block;
    height: 0.74rem;
    line-height: 0.74rem;
  }
  .tabbar ul li span.active{
    color: #F53C28;
    font-weight: bold;
    box-sizing: border-box;
    border-bottom: 0.06rem solid #F53C28;
  }
  .content ul li.lis{
    padding-top: 3.5rem;
  }
  .content ul li .NoList{
    display: block;
    width: 2.07rem;
    height: 2.93rem;
    margin: 0 auto;
  }
  .content ul li .NoTxt{
    text-align: center;
    margin-top: 0.3rem;
    font-size:0.28rem;
    color:#838383;
  }
  .content{
    width: 100%;
    height: 100%;
    background: #fff;
    margin-top: 0.1rem;
  }
  .content ul{
    width: 6.9rem;
    margin: 0 auto;
  }
  .content ul li .content_top{
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.26rem;
    color: #666666;
    letter-spacing: 0;
  }
  .content ul li .content_center{
    width: 6.9rem;
    padding: 0.2rem 0;
    border-bottom: 0.02rem solid #eaeaea;
    overflow: hidden;
  }
  .content_center .goods_img{
    width: 1.2rem;
    height: 1.2rem;
    float: left;
  }
  .content_center .goods_detail{
    float: left;
    width: 3.5rem;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
  }
  .content_center .goods_detail p:first-child{
    line-height: 0.4rem;
    font-size: 0.28rem;
    color: #333333;
    letter-spacing: 0;
  }
  .content_center .goods_detail p:last-child{
    line-height: 0.33rem;
    font-size: .24rem;
    color: #999999;
    letter-spacing: 0;
    margin-top: 0.05rem;
  }
  .content_center .Status{
    width: 1rem;
    color: #F53C28;
    text-align: right;
    float: right;
    margin-top: 0.4rem;
  }
</style>
