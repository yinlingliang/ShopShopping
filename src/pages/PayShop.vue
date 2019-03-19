<template>
  <div class="hello">
    <nav>
        <a class="nav-zuo" href="#/">
            <i class="fa fa-angle-left"></i>
        </a>
        提交订单
    </nav>
    <div class="big-wrap">
      <div class="dizhi" v-if="isCun">
          <img src="/static/d.jpg" alt="">
          <a href="#/address" class="dizhi-wrap">
              <span><i class="fa fa-map-marker"></i></span>
              <div class="text-dizhi">
                  <h3>收货人: {{address.username}}</h3><span class="user">联系方式：{{address.phone}}</span>
                  <p>收货地址: {{address.provinces}}{{address.address}}</p>
                  <span class="mian">(收获不便时,可选择免费代收货服务)</span>
              </div>
              <i class="fa fa-angle-right"></i>
          </a>
          <img src="/static/d.jpg" alt="">
      </div>


      <div class="dizhi" v-else>
          <img src="/static/d.jpg" alt="">
          <a href="#/consevoraddress" class="dizhi-wrap">
              <span><i class="fa fa-map-marker"></i></span>
              <div class="text-dizhi">
                  <h3>收货人: </h3><span class="user">联系方式：</span>
                  <p>收货地址: </p>
                  <span class="mian">(请添加收货地址)</span>
              </div>
              <i class="fa fa-angle-right"></i>
          </a>
          <img src="/static/d.jpg" alt="">
      </div>
      <!--{{datas}}-->
      <div>
        <div class="content-wrap">
          <img :src="'http://127.0.0.1:2000/images/' + photo" alt="">
          <div>
            <p class="name">{{goods.goodsname}}</p>
            <p class="time">发货时间: 卖家承诺10天</p>
            <p class="price">{{goods.pricenew | currency('￥')}}<span>x{{goods.goods_num}}</span></p>
          </div>
        </div>
      </div>

      <div class="sele-list">
          <ul>
            <li class="one">
              <a href="javascript:;">
                <span class="text-wrap">优惠券</span>
                <span class="tubiao right"><i class="fa fa-angle-right"></i></span>
              </a>
            </li>
            <li class="two">
              <a href="javascript:;">
                <span n class="text-wrap">妆币</span>
                <span class="diyong">(共0个妆币，可抵用￥0.00元)</span>
                <span class="tubiao right"><i class="fa fa-angle-right"></i></span>
              </a>
            </li>
            <li class="piao">
              <a href="javascript:;">
                <span class="text-wrap">发票</span>
                <span class="tubiao right"><i class="fa fa-angle-right"></i></span>
              </a>
            </li>
            <li class="jia">
              <a href="javascript:;">
                <span class="text-wrap">商品总额</span>
                <span class="right jiage">{{goods.pricenew | currency('￥')}}</span>
              </a>
            </li>
            <li class="you">
              <a href="javascript:;">
                <span class="text-wrap">优惠活动</span>
                <span class="right youhui">-￥0.00</span>
              </a>
            </li>
            <li class="yun">
              <a href="javascript:;">
                <span class="text-wrap">运费</span>
                <span class="right yunfei">+￥0.00</span>
              </a>
            </li>
            <li class="bi">
              <a href="javascript:;">
                <span class="text-wrap">可获得妆币</span>
                <span class="right zbges">{{goods.jifen}}个</span>
              </a>
            </li>
          
          
          </ul>
      </div>
    </div>
    <footer>
      <span class="totaln">共 <em>{{goods.goods_num}}</em> 件</span>
      <span class="totalp">合计:  <em>{{goods.pricenew | currency('￥')}}</em> </span>
      <span class="tiaozhuan" @click="paytrue" :target="goods._id">提交订单</span>
    </footer>
  </div>
</template>
<script>
//
import axios from "axios";
import { Group, CellBox, Checklist, Cell, Divider, XButton } from "vux";

export default {
  components: {
    Group,
    Checklist,
    Cell,
    Divider,
    XButton,
    CellBox
  },
  data: function() {
    return {
      goods: "",
      photo: "",
      address: "",
      isCun: true
    };
  },
  methods: {
    paytrue: function(ev) {
      console.log($(ev.target).attr("target"));
      let id = $(ev.target).attr("target");
      this.$axios
        .post("/user/paytrue", { id })
        .then(resdata => {
          console.log(resdata.data.orders);
          if (resdata.data.error == 0) {
            alert(resdata.data.msg);
            location.href = "#/true/" + id + "/" + resdata.data.orders;
          } else {
            alert(resdata.data.msg);
          }
        })
        .catch(err => {
          console.log("接受错误");
          console.log(err);
        });
    }
  },
  mounted: function() {
    
    console.log(this.goods);
    console.log(this.$route.path);
    let id = this.$route.path.slice(9);
    console.log(123);
    console.log(id);
    this.$axios
      .post("/user/payshop/" + id, { id })
      .then(resdata => {
        console.log(resdata.data.goods);
        if (resdata.data.error == 0) {
          this.isCun = true;
          this.goods = resdata.data.goods;
          this.photo = resdata.data.goods.goodsphoto[0];
          this.address = resdata.data.address;
        } else {
          this.isCun = false;
          alert(resdata.data.msg);
        }
      })
      .catch(err => {
        console.log("接收错误");
        console.log(err);
      });
  }
};
</script>





<style scoped>
ul {
  list-style: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
nav {
  height: 45px;
  text-align: center;
  line-height: 45px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
nav a {
  position: absolute;
  left: 20px;
  font-size: 28px;
  color: #000;
  top: -3px;
}
.hello .dizhi img {
  width: 100%;
}
.text-dizhi h3 {
  margin: 10px 0;
  font-size: 16px;
}
.text-dizhi p {
  font-size: 14px;
  width: 310px;
  word-wrap: break-word;
  line-height: 25px;
}
.user {
  position: absolute;
  top: -2px;
  right: 35px;
}
.dizhi {
  background: #eee;
  margin-top: 45px;
  height: 160px;
}
.dizhi img:nth-of-type(1) {
  position: relative;
  top: -8px;
}
.dizhi img:nth-of-type(2) {
  position: relative;
  bottom: 15px;
}
.dizhi-wrap {
  display: block;
  height: 130px;
  color: #333;
  position: relative;
}
.dizhi-wrap > span {
  float: left;
  width: 15px;
  height: 100%;
  font-size: 26px;
  margin: 0 10px;
  position: relative;
  top: 40px;
}
.mian {
  color: #cc0000;
  font-size: 12px;
  margin-left: 10px;
}
.dizhi-wrap > i {
  position: absolute;
  top: 45px;
  right: 10px;
  font-size: 28px;
}
.content-wrap {
  height: 120px;
  border: 1px solid #eee;
  margin-top: 10px;
  background: #efefef;
  list-style: none;
  font-size: 14px;
  overflow: hidden;
}
.content-wrap > img {
  display: block;
  float: left;
  width: 30%;
  height: 84%;
  margin: 10px;
}
.price {
  color: #cc0000;
  margin-top: 10px;
}
.price > span {
  float: right;
  margin-right: 10px;
}
.name {
  font-size: 14px;
  margin: 10px 0;
}
.time {
  color: #ff8c00;
}
li {
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
  background: rgba(0, 0, 0, 0.04);
}
li > a {
  display: block;
  color: #333;
}
.one{
  border-top: solid 1px rgba(0, 0, 0, 0.1);
}
.jia {
  margin-top: 11px;
}
.piao {
  border: none;
}
.right {
  float: right;
  margin-right: 6px;
}
.tubiao {
  display: inline-block;
  line-height: 25px;
  font-size: 22px;
  color: #999;
}
.diyong {
  font-size: 12px;
}
.jia .right,
.yun .right,
.bi .right {
  color: #ff69b4;
}
.you .right {
  color: #228b22;
}

footer {
  height: 65px;
  line-height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: right;
  z-index: 2;
  background: #fff;
  overflow: hidden;
}
.totaln {
  float: left;
  display: inline-block;
  width:60px;
  text-align: center;
}
.totalp {
  float: left;
  margin-left:30px;
  display: inline-block;
  width:100px;
  text-align: center;
}
span em{
  font-style: normal;
  color:#ff69b4;
}
footer > .tiaozhuan {
  display: inline-block;
  background: #cc0000;
  color: #fff;
  height: 100%;
  padding: 0 15px;
  margin-left: 10px;
}
</style>