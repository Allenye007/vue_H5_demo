<template>
  <div class="box">
    <div class="container">
      <!-- <img src="https://image1.ljcdn.com/hdic-resblock/1768a71f-19d7-41f1-8e74-1a03d4c8d031.jpg.592x432.jpg" alt=""> -->
      <ul>
        <li v-for="list in lists" :key="list.id" class="">
          <a :href=list.href class="imgBox">
            <img :src=list.imgSrc alt="" class="imgL">
          </a>
          <h3>{{list.title}} <span>{{list.lab1}}</span><span>{{list.lab1}}</span></h3>
          <div><span>{{list.address1}}</span><span>{{list.address2}}</span><span>{{list.address3}}</span></div>
          <p>{{list.area}}</p>
          <div><span>{{list.price}}元/平(均价)</span><span>|</span><span>{{list.priceSec}}</span></div>
        </li>
        <li class="blank"></li>
      </ul>
    </div>
    <tabBar></tabBar>
  </div>

</template>

<style scoped>
  .box {
    overflow: hidden;
  }
  .container {
    width: 7.5rem;
    overflow: hidden;
  }
  ul {
    width: 7.5rem;
    position: absolute;
  }
  .imgBox {
    width: 3rem;
    height: 2rem;
    float: left;
    overflow: hidden;
  }
  .imgL {
    width: 3rem;
    height: 2rem;
  }
  li {
    overflow: hidden;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
  }
  .blank {
    height: 0.8rem;
  }
</style>

<script>
import { getLianJiaList } from '../api/api';
var i = 0;
export default {
  data() {
    return {
      lists: [],
      allCount: 0,
    }
  },
  mounted() {
    let that = this;
    this.getList();
    window.onscroll = function() {
        // 获取当前可视范围的高度
        var clientHeight = 0;
        if(document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        // 获取滚动条的位置
        var ScrollTop = 0;
        if(document.documentElement && document.documentElement.scrollTop) {
          ScrollTop = document.documentElement.scrollTop;
        } else if(document.body) {
          ScrollTop = document.body.scrollTop;
        }
        // 获取完整文档高度（从底部到头部的文档高度）
        var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

        // 当 可视范围高度 + 滚动条的位置高度 = 完整文档高度  触发请求
        if(clientHeight + ScrollTop + 50 >= scrollHeight) {
            console.log('上拉刷新了')
            if(i === that.allCount/10-1) {
              alert('没有数据')
            } else {
              that.getListRefresh();
              alert('获取新数据');
            }
        }
    }
    window.onload = function() {

      let outScroll = document.querySelector('.container');
      let inScroll = document.querySelector('ul');

      var touchStart = 0;
      var touchDis = 0;

      outScroll.ontouchstart = function(event) {
        var touch = event.targetTouches[0];
        touchStart = touch.pageY;
        console.log(touchStart)
      }
      outScroll.ontouchmove = function(event) {
        var touch = event.targetTouches[0];
        inScroll.style.top = inScroll.offsetTop + touch.pageY-touchStart + 'px';
        touchStart = touch.pageY;
        touchDis = touch.pageY-touchStart;
        console.log(touchDis, touchStart);
      }
      outScroll.ontouchend = function() {
        touchStart = 0;
        var top = inScroll.offsetTop;
        if(top>0){
            var time = setInterval(function(){
                inScroll.style.top = inScroll.offsetTop -2+'px';
                console.log(inScroll.style.top, 11111111)
                var topDis = inScroll.style.top;
                if(topDis.length === 4) {
                  var topNum = Number(topDis.substr(0,2));
                  console.log(topNum, 'topNum')
                  if(topNum === 30 || topNum === 31) {
                    alert('下拉了')
                  }
                }

                if(inScroll.offsetTop<=0)clearInterval(time);
            },1)
        }
        console.log(top)
      }
    }

  },
  methods: {
      // 页面一打开加载页面
      async getList() {
          let p = {
            page : 0,
            size : 10,
          };
          const res =  await getLianJiaList(p);
          if(res.data.code === 0) {
            this.lists = res.data.msg.rows
          }
      },
      // 下拉刷新
      async getListRefresh() {
          i++;
          let p = {
            page : i,
            size : 10,
          }
          const res =  await getLianJiaList(p);
          if(res.data.code === 0) {
            this.lists = this.lists.concat(res.data.msg.rows);
            this.allCount = res.data.msg.count;
          }
      }
  },


};
</script>
