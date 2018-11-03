<template>
  <div @click="goIndex">income</div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    goIndex() {
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style scoped>

</style>
