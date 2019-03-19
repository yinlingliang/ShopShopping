<template>
  <div id="newgoods">
       <header-nav>
      <p slot="topnav">
        <a href="#/"><img src="/static/me.jpg" /></a>
        首页
      </p>
    </header-nav>
    <div class="roll-wrap">
        <two-nav></two-nav>
    </div>
    <div class="content-goods">
      <div class="goods-list" v-for="(good,ins) in goods">
          <div>
             <a :href="'#/xiangqing/' + good._id">
              <img :src="'http://127.0.0.1:2000/images/' + good.goodsphoto[0]" alt="">
              <span class="temai"> {{good.classify[0]}} </span>
              <span>{{good.goodsname}}</span><br>
              <span class="price">{{good.pricenew | currency('￥')}} <del>{{good.priceold | currency('￥')}}</del> </span>
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
      goods: []
    };
  },
  components: {
    HeaderNav,
    TwoNav
  },
  methods: {
    fenlei: function() {
      console.log("阻止了");
    }
  },
  mounted() {

    let that = this;

    this.$axios
      .get("/user/userindex")
      .then(resData => {
        if (resData.data.error != 0) {
          this.error = "查找出错";
        } else {
          this.goods = resData.data.goods;
        }
      })
      .catch(err => {
        console.log("查找错误");
      });

    let num = 0;
    window.onscroll = function() {
      // 获取浏览器的高度
      let height = document.body.clientHeight;
      // 获取可视窗口的高度
      let windowH = window.innerHeight;
      // 获取滚动条的偏移量(即滚动条距离可是窗口的偏移量)
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (windowH + scrollTop > height - 10) {
        console.log("获取数据");
        num += 1;
        console.log(num);
        that.$axios
          .get("/user/userindex?page=" + num)
          .then(resdata => {
            if (resdata.data.error != 0) {
              this.error = "查找出错";
            } else {
              console.log(resdata.data);
              resdata.data.goods.forEach(function(item) {
                that.goods.push(item);
              });
            }
          })
          .catch(err => {
            console.log("接收数据出错了");
            console.log(err);
          });
      }
    };
  }
};
</script>

<style scoped>
.roll {
  border: solid 1px red;
}
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
  border: solid 1px #fff;
  z-index: 1;
}
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
  margin-top: 5px;
  padding: 0 5px;
}
.content-goods div a .price {
  display: inline-block;
  margin-left: 5px;
  color: red;
  font-size: 13px;
}
.content-goods div a .price del {
  font-size: 11px;
  color: #999;
}
</style>
