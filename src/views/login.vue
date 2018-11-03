<template>
  <div id="app">
    <p @click="go" class="p1">登录</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods:{
    go(){
      this.$router.push('/index');
    }
  }
}
</script>

<style scoped>
.p1{
  font-size: 0.5rem;
}
</style>
