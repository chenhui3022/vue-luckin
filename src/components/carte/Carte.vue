<template>
    <div class="carte">
      <carte-carousel :list="swiperList"></carte-carousel>
      <carte-goods :list="goods"></carte-goods>
      <carte-footer></carte-footer>
      <carte-ball></carte-ball>
    </div>
</template>

<script>
import CarteCarousel from './page/Carousel.vue'
import CarteGoods from './page/Goods.vue'
import CarteFooter from '../common/Footer.vue'
import CarteBall from '../common/Ball.vue'
import axios from 'axios'
export default {
  name: 'carte',
  data () {
    return {
      swiperList: [],
      goods: [],
      count:0
    }
  },
  components: {
    'carte-carousel': CarteCarousel,
    'carte-goods': CarteGoods,
    'carte-footer': CarteFooter,
    'carte-ball': CarteBall
  },
  methods: {
    getGoodsInfo () {
      axios.get('api/goods.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.getGoodsInfoSucc)
    },
    getGoodsInfoSucc (res) {
      const data = res.data
      this.swiperList = data.swiperList
      this.goods = data.goods
      console.log(this.swiperList)
    }
  },
  mounted () {
    this.getGoodsInfo()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
