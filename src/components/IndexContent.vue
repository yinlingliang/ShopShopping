<template>
  <div id="newgoods">
       <header-nav>
      <p slot="topnav">
        <a href="#/"><img src="/static/me.jpg" /></a>
        首页
      </p>
    </header-nav>
    <div class="roll">
        <two-nav @chuansong="jieshou"></two-nav>
    </div>
    <div class="content-goods">

      <div class="tupian">
          <a href="">
            <img src="/static/comeing.jpg" alt="">
          </a>
      </div>
      <div class="goods-list" v-for="(goods,index) in taggoods">
          <div class="goods-wrap">
            <a :href="'#/xiangqing/' + goods._id">
              <span class="temai"> {{ goods.classify[0] }} </span>
              <img :src="'http://127.0.0.1:2000/images/' + goods.goodsphoto[0]" alt="">
              <span class="content">{{goods.goodsname}} </span>
              <span class="price">{{goods.pricenew | currency('￥')}} <del>{{goods.priceold | currency('￥')}}</del> </span>
              <span class="shoppinggo">马上抢</span>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";

import TwoNav from "./TwoNav.vue";
export default {
  data() {
    return {
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 1,
      taggoods:[]
    };
  },
   components: {
    HeaderNav,
    TwoNav,

  },
  methods:{
    jieshou:function(content){
      console.log(content)
      this.taggoods = content
    }
  }

};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.vux-header-title img {
  position: absolute;
  left: 4%;
  top: 5%;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border:solid 1px #fff;
  z-index:1;
}
.content-goods{
  margin-top:68px;
  margin-bottom:45px;
}
.content-goods .tupian img {
  position: relative;
  bottom:4px;
  width: 100%;
  height: 100%;
}
.content-goods .goods-list .goods-wrap a{
  display: block;
  width:100%;
  height:100%;
  color:#000;
}
.content-goods .goods-list .goods-wrap img {
  width: 120px;
  float: left;
}
.content-goods .goods-list .goods-wrap {
  height: 100%;
  padding-bottom:8px;
  border-bottom:solid 1px #999;
  font-size:14px;
}
.content-goods .goods-list .goods-wrap .temai{
  font-size:11px;
  color:red;
  border:solid 1px red;
  padding:0 3px;
  border-radius:4px;
  margin:5px 8px;
}
.content-goods .goods-list .goods-wrap .title{
display: inline;
}
.content-goods .goods-list .goods-wrap{
  overflow: hidden;
  text-align: left;
}
.content-goods .goods-list .goods-wrap .price{
  position:absolute;
  left:33%;
  margin-top:20px;
  color:red;
}
.content-goods .goods-list .goods-wrap .price del{
  font-size:11px;
  color:#666;
}
.content-goods .goods-list .goods-wrap .shoppinggo{
  float:right;
  margin-top:60px;
  margin-right:15px;
  color:red;
  border:solid 1px red;
  padding:0px 8px;
  font-size:12px;
  border-radius: 4px;
}

.content-goods .goods-list{
  height:130px;
  margin-top:8px;
}
</style>
