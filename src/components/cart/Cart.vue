<template>
  <div class="cart">
    <cart-header></cart-header>
    <cart-list></cart-list>
    <home-footer></home-footer>
    <home-ball></home-ball>
  </div>
</template>

<script>
import CartHeader from './page/Header.vue'
import CartList from './page/List.vue'
import HomeFooter from '../common/Footer.vue'
import HomeBall from '../common/Ball.vue'
export default {
  name: 'Cart',
  components: {
    'cart-header':CartHeader,
    'cart-list':CartList,
    'home-footer': HomeFooter,
    'home-ball': HomeBall
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
