<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="comment">
          <div class="title">大咖说</div>
          <div class="detail-list"  v-for="ratings of goods.ratings">
            <div class="img">
              <img :src="ratings.avatar" alt="">
            </div>
            <div class="detail-content">
              <div class="name">{{ratings.ratename}}</div>
              <div class="txt">{{ratings.text}}</div>
              <div class="time">{{ratings.rateTime}}</div>
            </div>
          </div>
        </div>
        <div class="desc">
          <div class="desc-title">商品描述</div>
          <div class="desc-txt">{{goods.info}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: 'DetailList',
        props:{
          goods:Object
        },
        data(){
          return{
            good:Array,
            show:false
          }
        },
        mounted () {
          this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true
          })
        }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.list
  overflow hidden
  position absolute
  top 4.5rem
  left 0
  right 0
  bottom 4rem
  background #ffffff
  .comment
    border-bottom .01rem solid #eee
    .title
      line-height .6rem
      padding-left .2rem
      border-bottom .01rem solid #eee
    .detail-list
      padding-top .2rem
      border-bottom .01rem solid #eee
      .img
        overflow hidden
        width 25px
        height 25px
        border-radius .4rem
        float left
        margin-left .2rem
      .detail-content
        padding-left 1rem
        line-height .5rem
        padding-right .2rem
        .name
          color #000
        .txt
          font-size .2rem
        .time
          font-size 10px
          color: #25a4bb
          line-height .6rem
  .desc
    padding-left .2rem
    .desc-title
      color #000
      line-height .5rem
    .desc-txt
      font-size .2rem
      line-height .4rem
</style>
