<template>
  <div class="ball" v-show="totalCount">
    <div class="inner">{{totalCount}}</div>
  </div>
</template>

<script>
    export default {
      name: 'Ball',
      data(){
        return{
          list:Array
        }
      },
      created(){
        this.list = this.$store.state.goodsList
      },
      computed:{
        totalCount() {
          let count = 0;
          if(this.list){
            this.list.forEach(function (good){
              count += good.count;
            });
            return count;
          }
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ball
    overflow hidden
    position: fixed
    right: 1.8rem
    bottom: .78rem
    width: .32rem
    height: .32rem
    border-radius: 50%
    font-size .26rem
    background #F23030
    z-index: 200
    .inner
      text-align center
      margin-top .02rem
      color: #ffffff
</style>
