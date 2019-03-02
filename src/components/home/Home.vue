<template>
  <div class="hello">
    <home-carousel :list="swiperList"></home-carousel>
    <home-address :select="select"></home-address>
    <home-list></home-list>
    <home-footer></home-footer>
    <home-ball></home-ball>
  </div>
</template>

<script>
import HomeCarousel from './page/Carousel.vue'
import HomeAddress from './page/Address.vue'
import HomeList from './page/List.vue'
import HomeFooter from '../common/Footer.vue'
import HomeBall from '../common/Ball.vue'

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperList: [],
      select:[]
    }
  },
  components: {
    'home-carousel': HomeCarousel,
    'home-address': HomeAddress,
    'home-list': HomeList,
    'home-footer': HomeFooter,
    'home-ball': HomeBall

  },
  methods: {
    getImgs () {
      axios.get('/api/swiper.json').then(this.getImgsSucc)
    },
    getImgsSucc (res) {
      const data = res.data
      this.swiperList = data.swiperList
      this.select = data.select
    }
  },
  mounted () {
    this.getImgs()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
