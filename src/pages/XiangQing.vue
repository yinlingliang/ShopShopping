<template>
  <div id="xiangqing">
        <div class="header-nav">
           <span class="left">
               <a href="#/">
                    <i class="fa fa-angle-left"></i>
               </a>
           </span>
           <span class="right">
               <a href="javascript:;">
                    <i class="fa fa-share-square-o"></i>
               </a>
           </span>
        </div>
        <div  class="pagou">
            <span>
               <i>11.01-11.08</i><br>
               <b>扒购节</b>
           </span>
        </div>
        <div class="content">
            <div class="visible">
                <div class="img-wrap">
                    <img :src="'http://127.0.0.1:2000/images/'+ photo[0]" alt="">
                </div>
                <ul class="dot-size">
                    <li v-for="( ph ,index ) in photo"></li>
                </ul>
                <div class="describe">
                    <p class="title">{{goodsone.goodsname}} </p>
                    <p class="price"><i class="fa fa-cny"></i>{{goodsone.pricenew | currency('')}} <del>{{goodsone.priceold | currency('￥')}}</del> </p>
                    <p class="fuli"><i class="fa fa-heart"></i>可获得{{goodsone.jifen}}个妆币</p>
                    <p class="promise"><span><i class="fa fa-thumbs-o-up"></i> 正品承诺</span> <span><i class="fa fa-hand-paper-o"></i> 退货无忧</span></p>
                </div>
                <div class="motaikuang">
                    <modal-car :goodsone="this.goodsone" :photo="this.photo" :guige="this.guige"></modal-car>
                </div>
                <div class="footer-wrap" v-if="isCun">
                    <p class="shoppingcart"><a href="#/shoppingcart"><i class="fa fa-shopping-cart"></i></a> </p>
                    <p class="operate pay" @click="pay" :id="goodsone._id"> 
                      <a :href="'#/payshop/' + goodsone._id" @click.prevent="addcart">立即购买</a> 
                    </p>
                    <p class="operate add" @click="add" :id="goodsone._id">
                      <a :href="'#/addcart/' + goodsone._id" @click.prevent="addcart">加入购物车</a>
                    </p>
                </div>
                <div class="footer-wrap" v-else>
                    <p class="shoppingcart"><a href="#/shoppingcart"><i class="fa fa-shopping-cart"></i></a> </p>
                    <p class="operate pay">
                      <a href="#" @click="addcart">立即购买</a> 
                    </p>
                    <p class="operate add" @click="add" :id="goodsone._id">
                      <a href="#" @click="addcart">加入购物车</a>
                    </p>
                </div>
        </div>
    </div>
  </div>
</template>

<script>
import ModalCar from "../components/ModalCar";
export default {
  components: {
    ModalCar
  },
  data() {
    return {
      goodsone:'',
      photo:[],
      guige:[],
      isCun:''
    };
  },
  methods:{
    pay:function(){
      console.log(123) 
      let url = this.$route.path.slice(11);
      console.log(url);
    },
    add:function(ev){
      this.$emit('goodsone',this.goodsone);
    },
    // 加入购物车
    addcart:function(ev){
      ev.preventDefault()
      alert('请选择规格')
      // console.log('455');
      // let url = this.$route.path.slice(11);
      // this.$axios
      // .get("/user/raisecart/" + url)
      // .then(resdata => {
      //   console.log(resdata.data);
      //   if (resdata.data.error == 0) {
      //     console.log(resdata.data.shopping);
      //     this.shoppingcart = resdata.data.shopping;
      //     alert('添加购物车成功')
      //   } else {
      //     alert("请登录");
      //   }
      // })
      // .catch(err => {
      //   console.log("接收错误");
      // });
    }
  },
  mounted:function(){
    this.$axios
      .get("/user/sessiondata")
      .then(userInfo => {
        let username = userInfo.data.user;

        if (userInfo.data.error != 0) {
          this.user = userInfo.data.user;

          this.isCun = false;
        } else {
          this.isCun = true;
        }
      })
      .catch(err => {
        console.log(err);
      });

    let url = this.$route.path.slice(11);
    this.$axios.get('/user/xiangqing/' + url).then((resdata) => {
      if(resdata.data.error == 0){
        this.goodsone = resdata.data.goodsone
        this.photo = resdata.data.goodsone.goodsphoto
        this.guige = resdata.data.goodsone.guige
      }else{
        console.log(resdata.data.msg)
      }
    }).catch((err) => {
      console.log('接收错误')
    });
     
  },

};
</script>

<style scoped>
.motaikuang {
  height: 55px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#xiangqing {
  margin-bottom: 60px;
  
}
.clean {
  clear: both;
}
.header-nav {
  width:360px;
  position: fixed;
  top: 10px;
  z-index: 1;
}
.pagou {
  position: absolute;
  top: 60px;
  right: 0;
  display: none;
}
.pagou span {
  float: right;
  display: inline-block;
  width: 66px;
  height: 38px;
  text-align: right;
  background: #f08081;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #eee;
}
.pagou span i {
  position: relative;
  bottom: 5px;
  font-size: 10px;
  font-style: normal;
}
.pagou span b {
  position: relative;
  bottom: 12px;
  font-weight: normal;
}
.header-nav span {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #888;
  border-radius: 50%;
  text-align: center;

  font-size: 19px;
  line-height: 28px;
}
.header-nav span a{
  display: block;
}
.header-nav span a i {
  color: #fff;
}
.header-nav .left {
  float: left;
  margin-left: 15px;
}
.header-nav .right {
  float: right;
  margin-right: 15px;
}
.header-nav .pagou {
  width: 200px;
  height: 25px;
  border-radius: 0;
  float: right;
  margin-top: 50px;
  margin-right: 0;
}
ul {
  list-style: none;
}
ul.dot-size {
  width:360px;
  position: absolute;
  top: 275px;
  text-align: center;
}
ul.dot-size > li {
  display: inline-block;
  background: #999999;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-left:8px;
}
ul.dot-size > li.active {
  background: #333;
}
ul.dot-size > li:hover {
  background: #333;
}
.img-wrap{
  /* width:1000px; */
}
.img-wrap img {
  width: 360px;
  height: 300px;
}
.describe {
}
.describe p {
  padding: 4px 4px;
  font-size: 13px;
}
.describe p.title {
  margin-top: 15px;
}
.describe .price {
  color: red;
  font-size: 18px;
}
.describe .price > i {
  font-size: 14px;
}
.describe .price > del {
  color: #999;
  font-size: 14px;
}
.describe .fuli {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
}
.describe .fuli i {
  font-size: 16px;
  color: red;
  margin-right: 5px;
}
.describe .promise {
  color: rgba(0, 0, 0, 0.8);
}
.describe .promise span {
  font-size: 10px;
  font-weight: 800;
  display: inline-block;
  width: 46%;
}
.describe .promise span i {
  font-size: 13px;
  margin-right: 5px;
}
.describe .promise span:nth-of-type(1) i {
  color: #ff69b4;
}
.describe .promise span:nth-of-type(2) i {
  color: orange;
}
.footer-wrap {
  width:100%;
  position: fixed;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1;
  bottom:0;
  height:63px;
  background:#fff;
  line-height: 60px;
}
.footer-wrap:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 1px;
  left: 36px;
  border-right: solid 1px rgba(0, 0, 0, 0.2);
}
.footer-wrap:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 1px;
  left: 197px;
  border-right: solid 1px rgba(0, 0, 0, 0.2);
}
.footer-wrap p {
  display: inline-block;
  text-align: center;
  line-height: 30px;
}
.footer-wrap p.shoppingcart {
  width: 30px;
  height: 30px;
  line-height: 35px;
}
.footer-wrap p.shoppingcart i{
  font-size:20px;
  color:#999;
}
.footer-wrap .operate {
  float: right;
  width: 162.5px;
  border: none;
  height: 35px;
  margin: 0;
  padding: 0;
  color:#f08081;
  line-height: 60px;
}
.footer-wrap .add a{
  color:#f08081;
  height:100%;
}
.footer-wrap .pay{
    background:#f08081;
    height:100%;
}
.footer-wrap .pay a{
  color:#eee;
}
</style>
