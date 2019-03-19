<template>
  <div id="search">
    <input type="text" placeholder="请输入商品名称" v-model="search">
    <!-- {{goods}} -->
    <div>
        <ul class="wrap-content" v-for="(good,ins) in goods">
            <li class="main-wrap">
                <a :href="'#/xiangqing/' + good._id">
                    <div class="up-wrap">
                        <p class="img-wrap"><img :src="'http://127.0.0.1:2000/images/' + good.goodsphoto[0]" alt=""></p>
                        <p class="tagname"><small>{{ good.classify[0] }}</small><sup>{{good.goodsname}}</sup></p>
                    </div>
                    <div class="down-wrap">
                        <span class="old"><del>{{good.priceold | currency('￥')}}</del></span>
                        <span class="new"><b>{{good.pricenew | currency('￥')}}</b></span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
     <footer class="footer-wrap">

    </footer>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      goods: []
    };
  },
  components: {},
  mounted: function() {
    let that = this;
    $("input").keydown(function() {
      let name = that.search;
      console.log(name);
      that.$axios
        .post("/user/search", { name })
        .then(resdata => {
          if (resdata.data.error == 0) {
            that.goods = resdata.data.goods;
          } else {
            alert(resdata.data.msg);
          }
        })
        .catch(err => {
          console.log("查找错误");
          console.log(err);
        });
    });

    console.log($(".wrap-content"));
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
#search {
  padding: 10px;
}
input {
  width: 100%;
  height: 30px;
  text-align: center;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 26px;
}
.wrap-content {
  width: 170px;
  margin-top: 20px;
  display: inline-block;
  
}
.main-wrap {
  position: relative;
  left: 5px;
  width: 160px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #eee;
  box-shadow: 2px 2px 6px gray;
}
.main-wrap a{
    color:#000;
}
.main-wrap:hover{
    top:-2px;
}
.up-wrap img {
  width: 158px;
  height: 180px;
}
.up-wrap{
    border-bottom:solid 1px rgba(0, 0, 0, 0.2);
}
.up-wrap .tagname{
    position: relative;
    left:10px;
}
.up-wrap small {
  display: inline-block;
  background: #ff69b4;
  color:#fff;
  padding:1px 3px;
  border-radius: 4px;
}
.down-wrap{
    padding:10px 6px;
}
.old{
    font-size:12px;
}
.new{
    float: right;
    font-size:13px;
    color:red;
}
.footer-wrap {
  width: 360px;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #F8F8FF;
}
</style>
