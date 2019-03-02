<template>
    <div class="header">
      <div class="title">订单列表</div>
      <div class="list">
        <div class="item" v-for="(item,index) in tabs"
          @click="toggleTab(index,item.view)"
          :class="{active:active === index}"
        >{{item.name}}</div>
      </div>
      <tab :is="currentTab" :list="list"></tab>
    </div>

</template>

<script>
  import Total from './Total.vue'
  import Undone from './Undone.vue'
  import Completed from './Completed.vue'
    export default {
        name: 'OrderHeader',
        props:{
          list:Array
        },
        data(){
          return{
            active:0,
            currentTab:'total',
            tabs:[
              {
                name:'全部',
                view:'total'
              },{
                name:'未完成',
                view:'undone'
              },{
                name:'已完成',
                view:'completed'
              },
            ]
          }
        },
        methods:{
          toggleTab(i,v){
            this.active = i
            this.currentTab = v
          }
        },
        components: {
          'total':Total,
          'undone':Undone,
          'completed':Completed
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.header
  background #eee
  position fixed
  top 0
  left 0
  right 0
  .title
    background #ffffff
    font-size .4rem
    text-align center
    line-height .7rem
    border-bottom .01rem solid #eee
  .list
    overflow hidden
    background #ffffff
    border-bottom .01rem solid #eee
    padding 0 .5rem
    .item
      float left
      line-height .8rem
      font-size .34rem
      padding 0 .1rem
      margin 0 .5rem
    .active
      border-bottom  .03rem solid red

</style>
