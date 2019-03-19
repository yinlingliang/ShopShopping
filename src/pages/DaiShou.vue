<template>
  <div id="indexpage">
   <div class="header-wrap">
      <a href="#/me" class="nav-me">
        <i class="fa fa-angle-left"></i>
      </a>
      <a href="javascript:;" class="nav-title">
        <span>待收货</span>
      </a>
    </div>
    <div class="main-wrap" v-if="waitshous.length > 0">
        <div class="content-wrap" v-for="(waitshou,ins) in waitshous">
            <div>
                <div class="daifu-up">
                    <p class="img-wrap">
                        <img :src="'http://127.0.0.1:2000/images/' + waitshou.goods.goodsphoto[0]" alt=""> 
                    </p>
                    <p class="name-wrap"> 
                        <span class="name">{{waitshou.goods.goodsname}}</span> 
                        <span class="num">x{{waitshou.goods.goods_num}}</span> 
                    </p>
                    <p class="guige-wrap">
                        <span class="guige-left">{{waitshou.goods.guige[0]}}</span>
                        <span class="guige-right">实付总价：{{waitshou.goods.pricenew | currency('￥')}}</span>
                    </p>
                </div>
                <div class="daifu-down">
                    <p class="order-wrap"> 
                        <span class="ordernum"><i class="fa fa-file-text-o"></i>订单编号：{{waitshou.OrderNumber.ordernumber}}</span> 
                        <span class="waitshou">
                          <span>已发货</span>
                        </span> 
                    </p>
                    <p class="payon one">
                        <a href="javascript:;" @click="shouhuo" :goodsid="waitshou.goods._id" :ordernum="waitshou.OrderNumber.ordernumber">确认收货</a>
                    </p>
                    <p class="payon two">
                        <a href="javascript:;" :goodsid="waitshou.goods.id" :ordernum="waitshou.OrderNumber.ordernumber">查看物流</a>
                    </p>
                </div>
            </div>
            
        </div>

    </div>
    <div v-else>
        <h4>暂时还没有待收货哦~</h4>
    </div>


    <footer class="footer-wrap">

    </footer>


  </div>
</template>

<script>
export default {
  data() {
    return {
      waitshous: []
    };
  },
  methods: {
    shouhuo: function(ev) {
      console.log("已经收货");
      let ordernum = $(ev.target).attr("ordernum");
        console.log(ordernum)
      let id = $(ev.target).attr("goodsid");
      console.log(id)
      this.$axios
        .post("/user/trueshouhuo/" + id + "/" + ordernum, { id, ordernum })
        .then(resdata => {
          console.log(resdata);
          if (resdata.data.error == 0) {
            alert(resdata.data.msg);
            location.href = "#/daiping";
          } else {
            alert(resdata.data.msg);
          }
        })
        .catch(err => {
          console.log("数据接收错误");
          console.log(err);
        });
    }
  },

  mounted() {
    this.$axios
      .post("/user/waitshou")
      .then(resdata => {
        if (resdata.data.error == 0) {
          this.waitshous = resdata.data.waitshous;
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
.waitshou {
  float: right;
}
.waitshou {
  color: #ff69b4;
}
.one {
  margin-right: -5px;
}
.two {
  margin-right: 15px;
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
