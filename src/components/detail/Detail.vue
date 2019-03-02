<template>
    <div class="detail" v-show="showDetail" >
      <div class="center">
        <div class="header">
          <div class="item">
            <img class="img" :src="goods.image">
          </div>
          <div class="close" @click="hide">
            <span class="iconfont add">&#xe6c9;</span>
          </div>
          <div class="desc">
            <div class="title">{{goods.name}}</div>
            <div class="en">{{goods.en}}</div>
          </div>
        </div>
        <detail-list :goods="goods"></detail-list>
        <div class="footer">
          <div class="price">
            <div class="left">
              <span>￥{{goods.price}}</span>
            </div>
            <div class="right">
              <div class="cart-decrease"   transition="move" @click="decreaseCart">
                <span class="inner iconfont add">&#xe613;</span>
              </div>
              <div class="cart-count">{{this.count}}</div>
              <div class="cart-add icon-add_circle" @click="AddCart">
                <span class="iconfont add">&#xe612;</span>
              </div>
            </div>
          </div>
          <div class="select" @click="addFirst(goods.id)">
            <div class="content">
              <span class="iconfont">&#xe612;</span>
              <span>加入购物车</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import DetailList from './page/List.vue'
    import Vue from 'vue'
    export default {
        name: 'app',
        inject:['reload'],
        data(){
          return{
            showDetail:false,
            count:1,
            goods:{}
            }
        },
        created(){
          this.goodsList = this.$store.state.goodsList
          this.$bus.on('selectedGood',(good)=>{
            this.goods = good
          })
        },
        methods:{
          show(){
            this.showDetail = true
          },
          hide(){
            this.showDetail = false
          },
          decreaseCart(){
            if(this.count > 1){
              this.count--
            }
          },
          AddCart(){
            this.count++
          },
          findPosition(id){
            return this.goodsList.findIndex(item=>{
              return item.id==id
            })
          },
          addFirst(id){
            var carList = this.goodsList
            var idExist = carList.find(item => {
              return item.id == id
            })
            if (!idExist) {
              Vue.set(this.goods, 'count', this.count);
              Vue.set(this.goods, 'select', true);
              this.$store.commit('addGoods', this.goods)
              console.log(this.goods)
            }else {
              var i=this.findPosition(id);
              this.goodsList[i].count+=this.count
            }
            this.showDetail = false
            this.reload()
          }
        },
        components:{
          'detail-list': DetailList,
        },
        beforeDestroy() {
          this.$bus.off('selectedGood',(good)=>{
            this.goods = good
          })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .detail
    /*z-index 100*/
    position fixed
    top:0
    left:0
    width 100%
    height 100%
    background rgba(0,0,0,0.3)
    display flex
    z-index 100
    .center
      overflow hidden
      .header
        .item
          overflow hidden
          width 100%
          height:0
          padding-bottom 40%
          padding-top 1.7rem
          .img
            width 100%
        .close
          position absolute
          top 1.7rem
          right  .2rem
          color: #ffffff
          border-radius .4rem
          border .01rem solid #ffffff
        .desc
          position absolute
          top 3.5rem
          left .2rem
          color: #ffffff
          .title
            font-size .32rem
            line-height .6rem
          .en
            font-size .2rem
      .footer
        position absolute
        left 0
        right 0
        bottom 2rem
        background #ffffff
        .price
          border-top: .01rem solid #eee
          line-height .4rem
          padding .1rem .2rem
          position: absolute
          left 0
          right 0
          bottom: 1rem
          background #ffffff
          .left
            font-size .2rem
            line-height .8rem
            font-size .36rem
          .right
            position absolute
            top .2rem
            right .2rem
            bottom 0
            line-height .6rem
            .cart-decrease
              display: inline-block
              padding: .12rem
              transition: all 0.4s linear
              .add
                background rgb(0, 160, 220)
                border-radius .4rem
                color: #ffffff
              .inner
                transform: rotate(180deg)
            .cart-count
              display: inline-block
              vertical-align: top
              width: .24rem
              padding-top: .16rem
              line-height: .48rem
              text-align: center
              font-size: .36rem
            .cart-add
              display: inline-block
              padding: .12rem
              line-height: .48rem
              font-size: .48rem
              color: #ffffff
            .cartcontrol >>> .totalPrice
              display none
            .add
              background #25a4bb
              border-radius .4rem
              padding .04rem
              color #ffffff
              line-height .35rem
        .select
          border-top: .01rem solid #eee
          position absolute
          left 0
          right 0
          bottom 0
          height 1rem
          background #ffffff
          .content
            position: absolute
            right: .2rem
            bottom: .35rem
            z-index: 10
            height: .5rem
            line-height: .48rem
            padding: 0 .2rem
            box-sizing: border-box
            border-radius: .24rem
            font-size: .28rem
            color: #fff
            background: rgb(0, 160, 220)
</style>
