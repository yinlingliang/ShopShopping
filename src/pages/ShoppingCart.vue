<template>
  <div id="indexpage">
    <header-nav>
      <img src="" />
        <p slot="topnav">
            购物车
        </p>
      
    </header-nav>
    <div class="good-list">
        <shopp-cart></shopp-cart>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav.vue'
  import ShoppCart from '../components/ShoppCart.vue'
  export default {
    data(){
      return {cart_length:''}
    },
    components:{
      HeaderNav,
      ShoppCart,
    },
    methods:{}

  }
</script>

<style scoped>
  .vux-header-title-area, .vux-header .vux-header-title p {
    font-size:16px;
  }
  .good-list{
    margin-top:58px;
  }
</style>
