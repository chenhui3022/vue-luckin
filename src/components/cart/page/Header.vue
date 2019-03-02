<template>
    <div class="header">
      <div class="title">购物车</div>
    </div>
</template>

<script>
    export default {
        name: 'CartHeader'
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    overflow :hidden
    width :100%
    height:0
    padding-bottom :10%
    background #ffffff
    position fixed
    top 0
    left 0
    right 0
    .title
      font-size .4rem
      text-align center
      line-height .68rem
      border-bottom .01rem solid #eee
</style>
