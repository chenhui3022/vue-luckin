<template>
    <div class="list">
      <div class="wrapper-list">
        <div class="wrapper">
          <div class="image">
            头像
          </div>
          <div class="right">
            <div class="info">
              <img class="img" :src="this.user.image" alt="">
              <span class="iconfont">&#xe644;</span>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="icon">
            用户名
          </div>
          <div class="right">
            <div class="info">
              <span class="name">{{this.user.name}}</span>
              <span class="iconfont">&#xe644;</span>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="icon">
            性别
          </div>
          <div class="right">
            <div class="info">
              <span class="name">{{this.user.sex}}</span>
              <span class="iconfont">&#xe644;</span>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="icon">
            绑定手机
          </div>
          <div class="right">
            <div class="info">
              <span class="name">{{this.user.phone}}</span>
              <span class="iconfont">&#xe644;</span>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="icon">
            绑定微信
          </div>
          <div class="right">
            <div class="info">
              <span class="name">{{this.user.wechat}}</span>
              <span class="iconfont">&#xe644;</span>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="icon">
            收货地址
          </div>
          <div class="right">
            <div class="info">
              <span class="name">{{this.user.addr}}</span>
              <span class="iconfont">&#xe644;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'InfoList',
    computed:{
      ...mapState(['user'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper-list
    padding-top .2rem
    .wrapper
      background #ffffff
      overflow hidden
      /*line-height .5rem*/
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
