<template>
    <div class="list">
      <div class="wrapper">
        <div class="icon">
          <span class="iconfont icon">&#xe6a8;</span>
        </div>
        <div class="right">
          <div class="title">
            个人资料
          </div>
          <div class="info">
            <span class="iconfont">&#xe644;</span>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="icon">
          <span class="iconfont icon">&#xe64f;</span>
        </div>
        <div class="right">
          <div class="title">
            咖啡钱包
          </div>
          <div class="info">
            <span class="iconfont">&#xe644;</span>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="icon">
          <span class="iconfont icon">&#xe71d;</span>
        </div>
        <div class="right">
          <div class="title">
            优惠券
          </div>
          <div class="info">
            <span class="iconfont">&#xe644;</span>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="icon">
          <span class="iconfont icon">&#xe773;</span>
        </div>
        <div class="right">
          <div class="title">
            兑换优惠
          </div>
          <div class="info">
            <span class="iconfont">&#xe644;</span>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="icon">
          <span class="iconfont icon">&#xe64c;</span>
        </div>
        <div class="right">
          <div class="title">
            发票管理
          </div>
          <div class="info">
            <span class="iconfont">&#xe644;</span>
          </div>
        </div>
      </div>
      <div class="help">
        <div class="icon">
          <span class="iconfont icon">&#xe61d;</span>
        </div>
        <div class="right">
          <div class="title">
            帮助反馈
          </div>
          <div class="info">
            <span class="iconfont">&#xe644;</span>
          </div>
        </div>
      </div>
      <div class="pic">
        <img class="img" src="http://localhost:8080/img/001.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: 'MineList'
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.list
  overflow hidden
  width 100%
  height 0
  padding-bottom 122%
  background #eee
  .wrapper
    background #ffffff
    overflow hidden
    line-height .5rem
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
