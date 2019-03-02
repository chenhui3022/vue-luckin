<template>
    <div class="header">
      <div class="major" @click="handelUserInfo(user)">
        <img class="img" :src="user.image" alt="">
        <span class="name">{{user.name}}</span>
        <span class="iconfont icon">&#xe644;</span>
      </div>
    </div>
</template>

<script>
  import info from '../../info/Info.vue'
  export default {
      name: 'MineHeader',
      props:{
        user:{}
      },
      methods: {
        handelUserInfo(user){
          this.$store.commit('userInfo',user)
          this.$router.push('/Info')
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.header
  overflow hidden
  width 100%
  height 0
  padding-bottom 40%
  background #cacaca
  position relative
  .info
    position: absolute
    top .2rem
    right .2rem
    .icon
      color: #ffffff
  .major
    width 100%
    height 0
    padding-bottom 30%
    position: absolute
    top 1rem
    left .5rem
    overflow hidden
    .img
      width 1rem
      height 1rem
      border-radius 1rem
    .name
      padding-left .2rem
      color: #ffffff
    .icon
      position: absolute
      top .3rem
      right  .7rem

</style>
