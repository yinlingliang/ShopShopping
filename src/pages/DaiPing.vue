<template>
  <div id="indexpage">
   <div class="header-wrap">
      <a href="#/me" class="nav-me">
        <i class="fa fa-angle-left"></i>
      </a>
      <a href="javascript:;" class="nav-title">
        <span>待评价</span>
      </a>
    </div>
    <div class="main-wrap" v-if="waitpings.length > 0">
        <div class="content-wrap" v-for="(waitping,ins) in waitpings">
            <div>
                <div class="daifu-up">
                    <p class="img-wrap">
                        <img :src="'http://127.0.0.1:2000/images/' + waitping.goods.goodsphoto[0]" alt=""> 
                    </p>
                    <p class="name-wrap"> 
                        <span class="name">{{waitping.goods.goodsname}}</span> 
                        <span class="num">x{{waitping.goods.goods_num}}</span> 
                    </p>
                    <p class="guige-wrap">
                        <span class="guige-left">{{waitping.goods.guige[0]}}</span>
                        <span class="guige-right">实付总价：{{waitping.goods.pricenew | currency('￥')}}</span>
                    </p>
                </div>
                <div class="daifu-down">
                    <p class="order-wrap"> 
                        <span class="ordernum"><i class="fa fa-file-text-o"></i>订单编号：{{waitping.OrderNumber.ordernumber}}</span> 
                        <span class="waitping">待评价</span> 
                    </p>
                    <p class="payon one">
                        <a href="javascript:;" :ordernum="waitping.OrderNumber.ordernumber">查看物流</a>
                    </p>
                    <p class="payon two">
                        <a href="javascript:;" @click="fahuo" :ordernum="waitping.OrderNumber.ordernumber">立即评价</a>
                    </p>
                </div>
            </div>
            
        </div>

    </div>
    <div v-else>
        <h4>暂时还没有代付款的商品</h4>
    </div>


    <footer class="footer-wrap">

    </footer>


  </div>
</template>

<script>
export default {
  data() {
    return {
      waitpings: []
    };
  },
  methods: {
      fahuo:function(){
          console.log('待评价页面');
          alert('当前功能待开发')
      }
  },

  mounted() {
    this.$axios
      .post("/user/waitping")
      .then(resdata => {
        console.log(resdata.data.waitpings);

        if (resdata.data.error == 0) {
          this.waitpings = resdata.data.waitpings;
        } else {
          alert(resdata.data.msg);
        }
      })
      .catch(err => {
        console.log("数据接受错误");

        console.log(err);
      });
  }
};
</script>

<style scoped>
#indexpage {
  width: 360px;
  height: 588px;
  background: #f8f8ff;
}
.header-wrap {
  height: 45px;
  width: 360px;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 11;
}
.nav-me {
  padding: 6px 6px;
  position: absolute;
  top: 0;
  left: 5px;
}
.nav-title {
  padding: 6px 6px;
  position: absolute;
  top: 0;
  right: 145px;
}
.nav-me i {
  color: #999;
  font-size: 28px;
}
.nav-title span {
  color: #000;
  font-size: 16px;
}
.main-wrap {
  position: relative;
  z-index: 8;
  top: 45px;
  /* margin-bottom:65px; */
}
.daifu-up {
  background: rgba(0, 0, 0, 0.06);
}
.daifu-down {
  background: rgba(0, 0, 0, 0.03);
}
.content-wrap img {
  width: 85px;
  height: 75px;
}
.content-wrap {
  margin-top: 10px;
}
.content-wrap p span,
.content-wrap p {
  display: inline-block;
}
.content-wrap p span {
  font-size: 12px;
}
.daifu-down,
.daifu-up {
  overflow: hidden;
  padding: 10px 10px 0 10px;
}
.guige-left,
.img-wrap {
  float: left;
}
.name-wrap {
  float: left;
}

.name {
  margin-left: 10px;
  width: 220px;
}
.guige-wrap {
  width: 255px;
  margin-top: 20px;
}
.guige-left {
  margin-left: 10px;
}
.guige-right,
.num {
  margin-left: 8px;
  float: right;
}
.order-wrap {
  width: 100%;
}
.payon,
.waitping {
  float: right;
}
.waitping {
  color:#228B22;
}
.one {
  margin-right: -5px;
}
.two{
    margin-right:15px;
}
.payon a {
  font-size: 10px;
  border: solid 1px #333;
  color: #333;
  padding: 2px 5px;
  border-radius: 6px;
}
.ordernum i {
  margin-right: 6px;
}
.footer-wrap {
  width: 360px;
  height: 65px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #f8f8ff;
}
</style>
