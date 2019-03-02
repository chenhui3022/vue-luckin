<template>
  <div class="list">
    <div class="title"  v-if="!goodsList.length">
      <div class="total">
        <div class="inner">
          <span class="iconfont cart">&#xe603;</span>
        </div>
        <div class="info">您的购物车有点寂寞</div>
        <div class="let">去喝一杯</div>
      </div>
    </div>
    <div class="wrapper"  v-for="item of goodsList" v-else>
      <div class="wrapper_list">
        <input class="checkbox" type="checkbox" name="goods" :checked="item.select==true"
               @change="toggleSelect(item.id)">
      </div>
      <div class="addr">
        <div class="local">
          <div>{{item.name}}</div>
          <div class="select">
            仅限打包带走
          </div>
        </div>
      </div>
      <div class="price_list">
        <div class="cart-decrease"   transition="move"
             @click="updateGoods(item.id,-1)">
          <span class="inner iconfont add" @click="isdele(item)">&#xe613;</span>
        </div>
        <div class="cart-count">{{item.count}}</div>
        <div class="cart-add icon-add_circle"
             @click="updateGoods(item.id,1)">
          <span class="iconfont add">&#xe612;</span>
        </div>
      </div>
      <div class="footer">
        <div class="total">应合计{{totalPrice}}</div>
        <div class="pay" @click="change">去结算</div>
      </div>
    </div>
    <choose ref="showDel"></choose>
  </div>
</template>

<script>
  import choose from './IsDele.vue'
  import { mapMutations } from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'CartList',
    data(){
      return{
        goodsList:Object
      }
    },
    created(){
      this.goodsList = this.$store.state.goodsList
    },
    methods:{
      ...mapMutations(
        ["deleteGoods","updateGoods"]
      ),
      change(){
        console.log(this.goodsList)
      },
      findPosition(id){
        return this.goodsList.findIndex(function(item){
          return item.id==id
        })
      },
      updateGoods(id,val){
        var i=this.findPosition(id)
        var count = this.goodsList[i].count
        this.$store.commit('updateGoods',{
          index:i,
          key:"count",
          value:count+val<=0?1:count+val
        })
      },
      isdele(item){
        this.$bus.emit('delItem',item)
        if(item.count <= 1){
          this.$refs.showDel.show()
        }

      },
      toggleSelect(id){
        var i=this.findPosition(id)
        var select=this.goodsList[i].select
        this.$store.commit('updateGoods',{
          index:i,
          key:"select",
          value:!select
        })
      }
    },
    computed:{
      totalPrice(){
        let total = 0;
        this.goodsList.forEach((good) => {
          if(good.select){
            total += good.price * good.count
          }
        })
        return total;
      }
    },
    components:{
      choose
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .list
    overflow hidden
    background #eee
    margin-bottom 1.2rem
    margin-top .8rem
    .title
      overflow hidden
      width 100%
      height 0
      padding-bottom 141%
      .total
        position absolute
        top 3rem
        left 2.5rem
      .inner
        .cart
          font-size:1rem
          color #25a4bb
          text-align center
          padding-left .6rem
      .info
        font-size .28rem
        margin .2rem 0
      .let
        font-size .26rem
        color #25a4bb
        background #ffffff
        margin .5rem .14rem
        border .01rem solid #25a4bb
        line-height .6rem
        text-align center
        border-radius .1rem
        box-shadow 0 .03rem .01rem #333
    .wrapper
      width 100%
      height 0
      padding-bottom 20%
      background #ffffff
      border-bottom .01rem solid #eee
      position relative
      .wrapper_list
        display inline-block
        position absolute
        top: .5rem
        left .3rem
      .addr
        overflow: hidden
        margin-top .3rem
        display inline-block
        .local
          margin-left 1rem
          .select
            font-size 10px
            color: #25a4bb
            line-height .8rem
      .price_list
        line-height .6rem
        float right
        margin-top .3rem
        margin-right .2rem
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

        .price
          float left
          padding 0 .2rem
        .add
          background #25a4bb
          border-radius .4rem
          padding .04rem
          color #ffffff
          line-height .35rem

      .footer
        overflow hidden
        position fixed
        bottom 1rem
        width 100%
        height 0
        padding-bottom 15%

        background #ffffff
        .total
          width 50%
          float left
          line-height 1rem
          font-size .36rem
          padding-left .2rem
        .pay
          float right
          width 30%
          line-height 1rem
          font-size .36rem
          background #25a4bb
          text-align center


</style>
