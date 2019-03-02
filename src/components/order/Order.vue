<template>
  <div class="order">
    <order-header :list="order"></order-header>
    <order-footer></order-footer>
    <order-ball></order-ball>
  </div>
</template>

<script>
import OrderHeader from './page/Header.vue'
import OrderFooter from '../common/Footer.vue'
import OrderBall from '../common/Ball.vue'
import axios from 'axios'
export default {
  name: 'Order',
  data () {
    return {
      order:[]
    }
  },
  methods: {
    getGoods () {
      axios.get('/api/order.json').then(this.getGoodsSucc)
    },
    getGoodsSucc (res) {
      const data = res.data
      this.order = data.order
    }
  },
  mounted () {
    this.getGoods()
  },
  components: {
    'order-header':OrderHeader,
    'order-footer': OrderFooter,
    'order-ball': OrderBall
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
