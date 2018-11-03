<template>
  <div>
    <p @click="go">index</p>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {

      }
    },
    methods:{
      go() {
        this.$router.push({name: 'order'});
      }
    }
  }
</script>

<style scoped>

</style>
