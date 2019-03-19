<template>
  <div id="indexbanner">
    <div class="content-goods">
      <div class="goods-list"  v-for="(good,ins) in goods">
          <div>
             <a :href="'#/xiangqing/' + good._id" :index="ins">
              <img :src="'http://127.0.0.1:2000/images/' + good.goodsphoto[0]" alt="">
              <span class="temai"> {{good.classify[0]}} </span>
              <span>{{good.goodsname}}</span>
              <span class="price">{{good.priceold | currency('￥')}} <del>{{good.pricenew | currency('￥')}}</del> </span>
              <span class="shoppinggo">马上抢</span>
            </a>
        </div>
      </div>
    </div>
    <div id="footer">
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
import FooterNav from './FooterNav.vue'
export default {
  data() {
    return {
      goods:[],
    };
  },
  components: {FooterNav},
  mounted() {
    this.$axios.get('/user/userindex').then((resData) => {
      // console.log(resData.data)
      if(resData.data.error != 0){
        this.error = '查找出错'
      }else{
        this.goods = resData.data.goods
        // console.log(this.goods)
      }
    }).catch((err) => {
      console.log('查找错误')
    })
  }
};
</script>

<style scoped>
.content-goods {
  margin-bottom: 60px;
  width: 100%;
  height: 100%;
}
.content-goods > div {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  padding-bottom: 8px;
}
.content-goods div div img {
  display: block;
  border: solid 1px #eee;
  border-radius: 8px;
  margin-left: 14%;
  width: 70%;
  height: 120px;
}
.content-goods div a {
  display: block;
  color: #000;
  font-size: 15px;
  overflow: hidden;
}
.content-goods div a span {
  font-size: 12px;
  color: #000;
}
.content-goods div a .temai {
  color: red;
  border: solid 1px red;
  border-radius: 4px;
  padding: 0 5px;
  margin-right: 10px;
}
.content-goods div a .shoppinggo {
  float: right;
  font-size: 11px;
  color: red;
  border: solid 1px red;
  border-radius: 4px;
  padding: 0 5px;
}
.content-goods div a .price {
  display: block;
  margin-left: 5px;
  color: red;
  font-size: 13px;
}
.content-goods div a .price del {
  font-size: 11px;
  color: #999;
}
</style>
