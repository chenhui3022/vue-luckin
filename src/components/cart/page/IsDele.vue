<template>
    <div class="IsDele" v-show="showDel" >
      <div class="item">
        <div class="title">确定不要了吗？</div>
        <div  class="select">
          <div class="cancel" @click="cancel">取消</div>
          <div class="confirm" @click="isdele(item)">确认</div>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        name: 'IsDele',
        data(){
          return{
            showDel:false,
            item:Object
          }
        },
        methods:{
          ...mapMutations(
            ["deleteGoods","updateGoods"]
          ),
          show(){
            this.showDel = true
          },
          isdele(item){
            this.deleteGoods(item);
            this.showDel = false
          },
          cancel(){
            console.log(this.item)
            this.showDel = false
          }
        },
        created() {
          this.$bus.on('delItem',(item)=>{
            this.item = item
          })

        },
        beforeDestroy() {
          this.$bus.off('delItem',(item)=>{
            this.item = item
          })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.IsDele
  position fixed
  top:0
  left:0
  right 0
  bottom 0
  background rgba(0,0,0,0.3)
  display flex
  z-index 100
  .item
    overflow hidden
    width 80%
    height 0
    padding-bottom 24%
    background #ffffff
    margin auto
    border-radius .1rem
    color #000
    .title
      height 1rem
      line-height 1rem
      text-align center
      border-bottom .01rem solid #eee
    .select
      height .8rem
      line-height .8rem
      text-align center
      .cancel
        display: inline-block
        padding-right 1.2rem
      .confirm
        display: inline-block
        border-left .02rem solid #eee
        padding-left 1.2rem
</style>
