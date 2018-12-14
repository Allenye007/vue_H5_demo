<template>
  <div class="searchBox">
    <pageTittle></pageTittle>
    <div class="searchContent">
      <input class="inp" @keyup="inpChange" @blur="inpBlur" v-model="inpValue" type="text" name="" id="">
      <img @click="inpBlur" class="cancelImg" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2786768635,647025762&fm=26&gp=0.jpg" alt="">
    </div>
    <div class="hot" v-if="this.isShow">
      <div class="hotTittle">
        <h2>热门搜索🔍</h2>
        <span>换一批</span>
      </div>
      <div class="hotCiBox">
        <ul class="hotCi">
          <li v-for="item in list" @click="goHotWolrd(item)" :id="item.id" :key="item.id">{{item.tittle}}</li>
        </ul>
      </div>
    </div>
    <div class="searchList" v-else-if="!this.isShow">
      <ul>
        <li v-for="item in searchList" :key="item.id" @click="goHotWolrd">
          {{item.name}}
          <span>约有{{item.top_price}}个商品</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.searchList {
  padding: 0 0.3rem;
  /* background-color: red; */
  border-top: 0.02rem solid rgba(153, 153, 153, .4);
}
.searchList li {
  height: 0.75rem;
  border-bottom: 0.02rem solid rgba(153, 153, 153, .2);
  line-height: 0.75rem;
  padding: 0 0.05rem;
}
.searchList span {
  float: right;
}

.hot {
  padding: 0.3rem;
}
.hotCi {
  margin-top: 0.3rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.hotCi li{
  display: inline-block;
  height: 0.4rem;
  padding: 0 0.04rem;
  margin-right: 0.3rem;
  margin-bottom: 0.2rem;
  background-color: rgba(153, 153, 153, .2);
}
.hotTittle {
  height: 0.45rem;
}
.hotTittle h2 {
  float: left;
  font-family: PingFangSC-Medium;
  font-size: 0.36rem;
  color: #333333;
  text-align: center;
}
.hotTittle span {
  float: right;
  color: red;
}
.searchBox {
  width: 100%;
  height: 100%;
}
.searchContent {
  padding-top: 1.32rem;
  position: relative;
}
.inp {
  background: #ffffff;
  border: 0.01rem solid rgba(151, 151, 151, 0.08);
  border-radius: 0.1rem;
  height: 0.8rem;
  width: 6.35rem;
  padding-left: 0.5rem;
  outline: none;
  margin: 0.3rem;
  margin-right: 0.1rem;
  box-shadow: 0 0.08rem 0.14rem 0 rgba(255, 108, 90, 0.07);
}
.cancelImg {
  width: 0.25rem;
  height: 0.25rem;
  opacity: 0.3;
  position: absolute;
  right: 0.5rem;
  bottom: 0.55rem;
}
</style>

<script>
import { getSearchByDescribe } from '../../api/api';
export default {
  data() {
    return {
      list: [
        {tittle: '保暖'},
        {tittle: '长袖'},
        {tittle: '短袖'},
        {tittle: '雪地靴'},
        {tittle: '袜子'},
        {tittle: '性感睡衣'},
        {tittle: '短袖'},
        {tittle: '雪地靴'},
        {tittle: '短袖'},
        {tittle: '雪地靴'},
        {tittle: '袜子'},
        {tittle: '性感睡衣'},
        {tittle: '短袖'},
      ],
      searchList: [],
      isShow: true,
      inpValue: null,
    }
  },
  methods: {
    goHotWolrd(item) {
      console.log(item.tittle);
    },
    async inpChange() {
      if(this.inpValue) {
        this.isShow = false;
        let P= {
          describe: this.inpValue
        }
        let {data} = await getSearchByDescribe(P);
        console.log(data.msg);
        this.searchList = data.msg;
      }
    },
    inpBlur() {
        this.isShow = true;
        this.inpValue = null;
    },
  }
}
</script>

