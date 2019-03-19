<template>
  <div id="teacherpage">
    
    <div class="shopkeeper">
      
      <img src="/static/shopkeeper.jpg" alt="">
      <p class="dot"></p>
      <p class="tag">火爆单品</p>
      
    </div>
    <div class="hot-conter">
      <shop-keeper></shop-keeper>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav.vue';
  import ShopKeeper from '../components/ShopKeeper.vue'
  export default {
    data(){
      return {}
    },
    components:{
      HeaderNav,
      ShopKeeper
    }

  }
</script>

<style scoped>
  .vux-header-title-area, .vux-header .vux-header-title p {
    font-size:16px;
  }
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  .fabu{
    position: absolute;
    background:#fff;
  }
  .shopkeeper{
    position: fixed;
    top:0;
    height:180px;
    width:100%;
    background:#fff;
    z-index:1;
  }
  .shopkeeper img{
    width:100%;
  }
  .shopkeeper p.dot{
    margin-left:10px;
    display: inline-block;
    width:5px;
    height:12px;
    border-left:solid 3px#FF69B4;
    margin-bottom:6px;
  }
  .shopkeeper p.dot:nth-of-type(2){
    float:right;
  }
  .shopkeeper p.tag{
    display: inline-block;
    font-size:13px;
  }
  .hot-conter{
    margin-top:180px;
  }
</style>
