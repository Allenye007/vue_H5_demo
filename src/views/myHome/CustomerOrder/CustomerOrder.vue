<template>
  <div class="container">
    <div class="header">
      <img src="https://img0.cdn.jinshilife.cn/nav_pd.png" class="backIconImg" alt="" @touchstart="goBack">
      客户订单
    </div>
    <div class="tabbar">
      <ul>
        <li v-for="(item,index) in bar" @touchstart="tab(index)"><span :class="{active:index === num}">{{item}}</span></li>
      </ul>
    </div>
    <div class="content">
      <ul v-if="num === 0">
        <li v-for="(item,index) in PayList0" :key="index">
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
            <div class="content_bottom">
              实付：￥{{item.total}}
            </div>
          </div>
        </li>
        <li v-if="isShow0" class="lis">
          <img src="https://cdn.jiyong365.com/%E5%B0%BD%E6%83%85%E6%9C%9F%E5%BE%85zhanwei.png" alt="" class="NoList">
          <p class="NoTxt">快去添加订单吧</p>
        </li>
      </ul>
      <ul v-if="num === 1">
        <li v-for="(item,index) in PayList1" :key="index">
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
            <div class="content_bottom">
              实付：￥{{item.total}}
            </div>
          </div>
        </li>
        <li v-if="isShow1" class="lis">
          <img src="https://cdn.jiyong365.com/%E5%B0%BD%E6%83%85%E6%9C%9F%E5%BE%85zhanwei.png" alt="" class="NoList">
          <p class="NoTxt">快去添加订单吧</p>
        </li>
      </ul>
      <ul v-if="num === 2">
        <li v-for="(item,index) in PayList2" :key="index">
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
            <div class="content_bottom">
              实付：￥{{item.total}}
            </div>
          </div>
        </li>
        <li v-if="isShow2" class="lis">
          <img src="https://cdn.jiyong365.com/%E5%B0%BD%E6%83%85%E6%9C%9F%E5%BE%85zhanwei.png" alt="" class="NoList">
          <p class="NoTxt">快去添加订单吧</p>
        </li>
      </ul>
      <ul v-if="num === 3">
        <li v-for="(item,index) in PayList3" :key="index">
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
            <div class="content_bottom">
              实付：￥{{item.total}}
            </div>
          </div>
        </li>
        <li v-if="isShow3" class="lis">
          <img src="https://cdn.jiyong365.com/%E5%B0%BD%E6%83%85%E6%9C%9F%E5%BE%85zhanwei.png" alt="" class="NoList">
          <p class="NoTxt">快去添加订单吧</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CustomerOrder",
      data(){
          return {
            bar:['待付款','待发货','待收货','全部'],
            content:['内容1','内容2','内容3','全部'],
            num:0,
            //待付款
            PayList0:[],
            PayList1:[{
              name:'蛋蛋',
              img:'../../../../static/images/avatar.jpg',
              goods_name:'阳澄湖大闸蟹',
              sku:'2俩8只',
              status:'发货中',
              total:198
            }],
            PayList2:[{
              name:'蛋蛋',
              img:'../../../../static/images/avatar.jpg',
              goods_name:'阳澄湖大闸蟹',
              sku:'2俩8只',
              status:'配送中',
              total:198
            }],
            PayList3:[],
            isShow0: false,
            isShow1: false,
            isShow2: false,
            isShow3: false,
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
          if(this.PayList0.length === 0) {
            this.isShow0 = true;
          } else {
            this.isShow0 = false;
          }
          if(this.PayList1.length === 0) {
            this.isShow1 = true;
          } else {
            this.isShow1 = false;
          }
          if(this.PayList2.length === 0) {
            this.isShow2 = true;
          } else {
            this.isShow2 = false;
          }
          if(this.PayList3.length === 0) {
            this.isShow3 = true;
          } else {
            this.isShow3 = false;
          }
      }
    }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
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
    border-bottom: 0.02rem solid #f4f4f4;
  }
  .tabbar ul{
    overflow: hidden;
    padding: 0 0.77rem;
  }
  .tabbar ul li{
    width: 1.49rem;
    height: 0.74rem;
    line-height: 0.74rem;
    text-align: center;
    color: #666;
    font-size: 0.28rem;
    float: left;
  }
  .tabbar ul li span{
    display: inline-block;
    height: 0.74rem;
  }
  .tabbar ul li span.active{
    color: #F53C28;
    font-weight: bold;
    border-bottom: 0.06rem solid #F53C28;
    box-sizing: border-box;
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
    height: 0.76rem;
    line-height: 0.76rem;
    font-size: 0.26rem;
    color: #666666;
    letter-spacing: 0;
  }
  .content ul li .content_center{
    width: 6.9rem;
    padding: 0.2rem 0;
    border-top: 0.02rem solid #eaeaea;
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
  .content_bottom{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: left;
    font-size: 0.28rem;
    color: #666666;
    letter-spacing: 0;
  }
  .content ul li.lis{
    padding-top: 3.5rem;
  }
  .content ul li .NoList{
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }
  .content ul li .NoTxt{
    text-align: center;
    margin-top: 0.3rem;
    font-size:0.28rem;
    color:#838383;
  }
</style>
