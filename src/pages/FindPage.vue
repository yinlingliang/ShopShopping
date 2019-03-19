<template>
  <div id="findpage">
    <header-nav>
      <p slot="topnav">发现</p>
    </header-nav>
    <div class="find-two-nav">
        <find-nav></find-nav>
    </div>

    <div id="footer">
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav.vue'
  import FooterNav from '../components/FooterNav.vue'
  
  import FindNav from '../components/FindNav.vue'
  export default {
    data(){
      return {}
    },
    components:{
      HeaderNav,
      FindNav,
      FooterNav
    }

  }
</script>

<style scoped>
  .vux-header-title-area, .vux-header .vux-header-title p {
    font-size:16px;
  }
  .find-two-nav{
      margin-top:40px;
  }
</style>
