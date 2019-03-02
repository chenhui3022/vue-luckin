<template>
  <div class="mine">
    <mine-header :user="user"></mine-header>
    <mine-list></mine-list>
    <mine-footer></mine-footer>
    <mine-ball></mine-ball>
  </div>
</template>

<script>
import MineHeader from './page/Header.vue'
import MineList from './page/List.vue'
import MineFooter from '../common/Footer.vue'
import MineBall from '../common/Ball.vue'
import axios from 'axios'
export default {
  name: 'mine',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    getUser () {
      axios.get('/api/user.json').then(this.getUserSucc)
    },
    getUserSucc (res) {
      const data = res.data
      this.user = data.user
      console.log(this.user)

    }
  },
  mounted () {
    this.getUser()
  },
  components: {
    'mine-header':MineHeader,
    'mine-list':MineList,
    'mine-footer': MineFooter,
    'mine-ball': MineBall
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
