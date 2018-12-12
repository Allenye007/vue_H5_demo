<template>
  <div class="searchBox">
    <pageTittle></pageTittle>
    <div class="searchContent">
      <input class="inp" type="text" name="" id="">
    </div>
    <div class="hot">
      <div class="hotTittle">
        <h2>热门搜索🔍</h2>
        <span>换一批</span>
      </div>
      <div class="hotCiBox">
        <ul class="hotCi">
          <li>大家看法</li>
          <li>大家看法</li>
          <li>大家看法</li>
          <li>大家看法</li>
          <li>大家看法</li>
          <li>大家看法</li>
          <li>大家看法</li>
          <li>大家看法</li>
          <li>大家看法</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hot {
  padding: 0.3rem;
  /* background-color: #ccc; */
}
.hotCi {
  display: flex;
  /* align-items: flex-start; */
  /* flex-wrap: wrap; */

}
.hotCi li{
  display: inline-block;
  height: 0.4rem;
  width: 100%;
  background-color: #ccc;
}
.hotTittle {
  height: 0.45rem;
}
.hotTittle h2 {
  float: left;
}
.hotTittle span {
  float: right;
  color: red;
}
.searchBox {
}
.searchContent {
  padding-top: 1.32rem;
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
</style>

