<template>
  <div class="total" ref="wrapper">
    <div class="total-list">
      <div class="wrapper" v-for="item of list" v-if="item.status === '未完成'">
        <div class="wrapper_list">
          <div class="number">自提订单：{{item.number}}</div>
          <div class="status">{{item.status}}</div>
        </div>
        <div class="addr">
          <div class="local">
            <div>{{item.addr}}</div>
            <div class="goods">
              <span>{{item.goods}}</span>
              <span class="num">共{{item.num}}件商品</span>
            </div>
          </div>
          <div class="time">{{item.time}}</div>
        </div>
        <div class="price_list">
          <div class="price">￥{{item.price}}</div>
          <div class="again">再来一单</div>
        </div>
      </div>
      <div class="item">已经全部加载完成</div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'total',
    props:{
      list:Array
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../styl/Order.styl";
</style>
