<template>
  <div class="goods"  >
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) of list" :key = "index"
            :class="{'current':currentIndex === index }"
            @click="selectMenu(index,$event)" >
          <span class="text border-1px" >
            <span class="icon"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-wrapper" ref="goodsWrapper">
      <ul>
        <li class="good-list good-list-hook" v-for="item of list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="good-item border-1px" v-for="good of item.goods"
                @click="selectGood(good)">
              <div class="icon">
                <img :src="good.image" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{good.name}}</h2>
                <p class="desc">Black Tea Latte</p>
                <div class="price">
                  <span class="now">￥{{good.price}}</span>
                  <span class="old"  v-show='good.oldPrice'>￥{{good.oldPrice}}</span>
                </div>
              </div>
              <div class="cart">
                <span class="iconfont add">&#xe612;</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <detail ref="good" ></detail>

  </div>

</template>
<script>
  import detail from '../../detail/Detail.vue'
  import BScroll from 'better-scroll'
  import Vue from 'vue'
  export default {
    name: 'CarteGoods',
    props:{
      list:Array
    },
    data(){
      return{
        listHeight: [],
        scrollY: 0,
        showDetail:false
      }
    },
    methods:{
      //左右连动映射
      selectMenu(index, event){
        if (!event._constructed) {
          return;
        }
        let goodList = this.$refs.goodsWrapper.getElementsByClassName('good-list-hook')
        let el = goodList[index]
        this.goodsScroll.scrollToElement(el,300)
      },
      calculateHeight() {
        let goodList = this.$refs.goodsWrapper.getElementsByClassName('good-list-hook')
        let height = 0;
//        console.log(goodList)
        this.listHeight.push(height);
        for (let i = 0; i < goodList.length; i++) {
          //获取每个li的高度，放入一个数组中
          let item = goodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
//        console.log(this.listHeight)
      },
      selectGood(good){
        this.$bus.emit('selectedGood',good)
        this.$refs.good.show()
      }
    },
    computed:{
      currentIndex(){
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];//listHeight[length]返回undefined,所以可以用!height2做判断不是最后一个
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    mounted(){
      // this.$refs：取得DOM对象
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click:true  //取消默认阻止事件
      }),
        this.goodsScroll = new BScroll(this.$refs.goodsWrapper,{
          click:true,  //取消默认阻止事件
          probeType: 3   //监听事件的触发时间，1为即时触发，3为延迟到事件完毕后触发
        }),
        this.goodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
    },
    watch:{
      list(){
        this.$nextTick(() => {
          this.calculateHeight()
        })
      }
    },
    components:{
      detail
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .goods
    overflow: hidden
    display: flex
    position: absolute
    top: 3.8rem
    left 0
    right 0
    bottom: 1.2rem
    background #ffffff
    .menu-wrapper
      flex: 0 0 1.8rem
      background: #f3f5f7
      .menu-item
        display: table
        text-align center
        width: 2rem
        padding: .3rem .01rem
        line-height: .3rem
        border-bottom .01rem solid #eee
      .current
        position: relative
        z-index: 10
        margin-top: -1px
        background: #fff
        font-weight: 700
        .text
          border-none()
    .goods-wrapper
      touch-action none
      overflow: hidden
      flex: 1
      position: absolute
      top: 0
      left 2rem
      right 0
      bottom: 0
      .title
        padding-left: .24rem
        height: 26px
        line-height: 26px
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .good-item
        position relative
        display: flex
        margin: 10px
        padding-bottom: 10px
        border-bottom .01rem solid #eee
        .icon
          flex: 0 0 1rem
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .price
            font-weight: 700
            line-height: 24px
            vertical-align: middle
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
            .add
              background #25a4bb
              border-radius .4rem
              padding .04rem
              color #ffffff
              line-height .35rem
              float right

          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
        .cart
          float right
          position absolute
          right .2rem
          bottom:.5rem
          .add
            color #fff
            font-size:.3rem
            background #25a4bb
            border-radius 1rem
</style>
