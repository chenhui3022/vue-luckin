<template>
  <div class="list">
    <info-header></info-header>
    <info-list></info-list>
  </div>
</template>

<script>
  import InfoHeader from './page/header.vue'
  import InfoList from './page/List.vue'
  export default {
    name: 'MineList',
    components:{
      'info-header':InfoHeader,
      'info-list': InfoList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .list
    overflow hidden
    width 100%
    height 0
    padding-bottom 178%
    background #eee
    .wrapper-list
      padding-top .2rem
      .wrapper
        background #ffffff
        overflow hidden
        border-bottom .01rem solid #eee
        .image
          display inline-block
          line-height 1.4rem
          font-size .3rem
          padding-left .2rem
        .icon
          display inline-block
          line-height 1rem
          font-size .3rem
          padding-left .2rem
        .right
          width 85%
          float right
          .info
            padding .2rem
            float right
            .name
              margin-right .2rem
              line-height .5rem
            .img
              width 1rem
              height 1rem
              border-radius .5rem
              margin-right .2rem

      .help
        background #ffffff
        overflow hidden
        line-height .5rem
        margin-top .2rem
        .icon
          width 10%
          padding-left  .2rem
          padding-top  .1rem
          float left
        .right
          width 85%
          float right
          border-bottom .01rem solid #eee
          .title
            padding-top .2rem
            float left
          .info
            padding .2rem
            float right
      .pic
        margin .2rem .1rem 0 .1rem
        .img
          width 100%
</style>
