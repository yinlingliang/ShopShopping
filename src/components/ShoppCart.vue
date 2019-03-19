<template>
  <div id="shoppcart">
    <div class="content-goods" v-if="shoppingcart.length > 0 && isCun">
      <div class="bread-crumb">
        <input @click="valueall" class="chooseall" type="checkbox">
        <span class="choose-text"  v-if="ischoose">全选</span>
        <span class="choose-text" v-else>全选</span>
        <!-- <span class="chooseall">
            <span class="choose"  v-if="ischoose">
              <i class="fa fa-check"></i>
            </span>
            
            <span class="choosed" v-else>
              <i class="fa fa-check"></i>
            </span>
            <span class="choose-text"  v-if="ischoose">全部选择</span>
            <span class="choose-text" v-else>取消全选</span>
            
        </span> -->
        <span @click="remove">
          <span class="isremove" v-if="isRemove">
            <!-- <i class="fa fa-trash-o"></i> -->
            编辑
          </span>
          <span class="isremove" v-else>
            <!-- <i class="fa fa-trash-o"></i> -->
            取消编辑
          </span>
        </span>
        
      </div>
      <!-- 内容 -->
      <div class="goods-list" v-for="(shopping,ins) in shoppingcart">
          <div class="goods-wrap">
             <input @click="value1" class="choose" type="checkbox" name="vehicle1" :value="shopping._id">
              <!-- <span class="choose" :yes="true" :fou="false" :target="shopping._id" @click="choose($event,ins)">
              
                <i class="fa fa-check" :aaa="ins"></i>
              
              </span>
              
              <span :bool="true" :target="shopping._id"  @click="choose($event,ins)" class="choosed choose">
               
                <i class="fa fa-check" :aaa="ins"></i>
              
              </span> -->

            <a href="#">
            
              <span class="imgwrap"><img :src="'http://127.0.0.1:2000/images/' + shopping.goodsphoto[0]" alt=""></span>
              
              <span class="goodsname">{{shopping.goodsname}}</span><br>
              
              <span class="price" :price="shopping.pricenew * shopping.goods_num">{{shopping.pricenew | currency('￥')}} <del></del> </span>
              
            </a>

            <span class="guige">{{shopping.guige[0]}} <del></del> </span>


            <span class="edit"  v-if="isRemove">

              <span @click="jianshao" :target="shopping._id">-</span>

              <span class="nums" :num="shopping.goods_num">{{shopping.goods_num}}</span>

              <span @click="zengjia" :target="shopping._id">+</span>

            </span>


            <span class="del" v-else>
              <span class="removeone fa fa-trash-o"  @click="removeone" :target="shopping._id" ></span>
            </span>

        </div>

      </div>
   <!-- 支付模块 -->
      <div class="pays-wrap">
        <div class="pays">
          <p class="heji">
            <span>合计：<b>{{total | currency('￥')}}</b></span>
            <span>
              <b>总额：{{total | currency('￥')}}</b>
              <b>优惠：0</b>
            </span>
          </p>
          <p class="zhifu">结算({{numall}})</p>
        </div>
      </div>
    </div>

    <div v-else class="unname"  style="">
      <div>
        <p> <img src="/static/shoppingcar.jpg" alt=""> </p>
        <p v-if="isCun">购物车空空如也~!</p>
        <p v-else>登陆之后才能查看商品哦~!</p>
        <p v-if="isCun" class="tianjia"><a href="#/">去逛逛</a></p>
        <p v-else  class="tianjia"><a href="#/login">立即登录</a></p>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import TwoNav from "./TwoNav.vue";
import FindPage from "../pages/FindPage.vue";
export default {
  data() {
    return {
      showList1: true,

      scrollTop: 0,

      onFetching: false,

      bottomCount: 1,

      isRemove: true,

      ischoose: "",

      isCun: "",

      ischecked: false,

      shoppingcart: [],

      total: 0,

      all: [],

      num: 1,

      numall: 0
    };
  },

  components: {
    HeaderNav,

    TwoNav,

    FindPage
  },
  methods: {
    remove: function() {
      this.isRemove = !this.isRemove;
    },
    valueall: function(ev) {
      var that = this;

      console.log(ev.target.checked);

      if (ev.target.checked == true) {
        $("input.choose").each(function() {
          $(this)[0].checked = true;

          that.all = [];

          that.shoppingcart.forEach(function(item) {
            that.all.push(item);
          });

          that.total = 0;

          that.numall = 0;

          that.all.forEach(function(element) {
            that.total += element.goods_num * element.pricenew;

            that.numall += element.goods_num;
          });
        });

        this.ischoose = false;
      } else if (ev.target.checked == false) {
        $("input.choose").each(function() {
          // console.log(this);

          $(this)[0].checked = false;

          that.all = [];

          that.total = 0;

          that.numall = 0;
        });

        this.ischoose = true;
      }
    },
    value1: function(ev) {
      var that = this;
      // console.log(ev.target.checked)
      console.log(ev.target.value)
      // that.total = 0;
      if (ev.target.checked == true) {
        
        that.shoppingcart.forEach(function(element) {

          if (element._id == ev.target.value) {

            that.all.push(element);

            that.total = 0;

            that.numall = 0;

            that.all.forEach(function(ele) {

              that.total += ele.pricenew * ele.goods_num;

              that.numall += ele.goods_num;

              // console.log(that.all);
            });
          }
        });
      } else if (ev.target.checked == false) {

        that.all.forEach(function(element, index) {

          if (element._id == ev.target.value) {

            that.all.splice(index, 1);

            if (that.all.length < 1) {

              that.total = 0;

              that.numall = 0;

            } else {
              that.total = 0;

              that.numall = 0;

              that.all.forEach(function(ele) {
                
                that.total += ele.pricenew * ele.goods_num;

                that.numall += ele.goods_num;

                // console.log(ele.price)
              });
            }
          }
        });
      }
    },

    choose: function(ev, ins) {
      let parent = $(ev.target).parent("span");

      this.ischecked = !this.ischecked;

      // console.log(this.ischecked)

      // console.log(parent.attr('target'));

      let id = parent.attr("target");

      console.log(id);

      parent
        .css("display", "none")
        .siblings()
        .css("display", "block");
      this.heji = 0;

      this.heji = parent
        .parent(".goods-wrap")
        .find(".price")
        .attr("price");
    },

    jianshao: function(ev) {
      // console.log($('input[type=checkbox]'))
      console.log(
        $(ev.target)
          .parents(".goods-wrap")
          .find("input")
          .get(0).checked
      );
      let input = $(ev.target)
        .parents(".goods-wrap")
        .find("input")
        .get(0).checked;
      // console.log(input)
      // console.log("减少");

      // console.log(ev)
      if (input == false) {
        let id = $(ev.target).attr("target");

        // console.log(id);

        this.$axios
          .post("/user/jianshao", { id })
          .then(num => {
            if (num.data.error == 0) {
              // console.log(num.data.user.cart_list);

              this.shoppingcart = num.data.user.cart_list;
            } else {
              // console.log(num.data);

              alert(num.data.msg);
            }
          })
          .catch(err => {
            console.log("接收出错");

            console.log(err);
          });
      } else if (input == true) {
        alert("请取消选择后，再更改数量");
      }
    },
    zengjia: function(ev) {
      // console.log("增加");
      console.log(
        $(ev.target)
          .parents(".goods-wrap")
          .find("input")
          .get(0).checked
      );
      let input = $(ev.target)
        .parents(".goods-wrap")
        .find("input")
        .get(0).checked;

      if (input == false) {
        let id = $(ev.target).attr("target");

        console.log(id);

        this.$axios
          .post("/user/zengjia", { id })
          .then(num => {
            if (num.data.error == 0) {
              console.log(num.data.user.cart_list);

              this.shoppingcart = num.data.user.cart_list;
            } else {
              console.log(num.data);

              alert(num.data.msg);
            }
          })
          .catch(err => {
            console.log("接收出错");

            console.log(err);
          });
      } else if (input == true) {
        alert("请取消选择后，再更改数量");
      }
    },
    removeone: function(ev) {
      // console.log("删除");
      // console.log(ev)
      let input = $(ev.target)
        .parents(".goods-wrap")
        .find("input")
        .get(0).checked;

      if (input == false) {
        let id = $(ev.target).attr("target");

        // console.log(id);

        this.$axios
          .post("/user/removeone", { id })
          .then(goods => {
            console.log(goods.data.error);

            if (goods.data.error == 0) {
              console.log(goods.data.cart_list);

              this.shoppingcart = goods.data.cart_list;
            } else {
              alert("您不能删除该商品");
            }
          })
          .catch(err => {
            console.log("接收出错");

            console.log(err);
          });
      } else {
        alert("请取消选择后再进行删除");
      }
    }
  },
  mounted() {
    this.$axios
      .get("/user/sessiondata")
      .then((userInfo) => {
        
        let username = userInfo.data.user;

        if (userInfo.data.error == 0) {
          console.log(userInfo.data.user)
          this.isCun = true;
        } else {
          this.user = userInfo.data.user;

          this.isCun = false;
          
        }
      })
      .catch(err => {
        console.log(err);
      });

    this.$axios
      .get("/user/shoppingcart")
      .then(resdata => {
        // console.log(resdata.data.cart_list);

        this.shoppingcart = resdata.data.cart_list;

        // this.goods_num = resdata.data.user;
      })
      .catch(err => {
        console.log("查找出错");
      });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#shoppcart {
  margin-top: -18px;
  height: 650px;
  background: rgba(255, 255, 0, 0.02);
  position: relative;
  bottom: 0;
}
#shoppcart .unname {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}
#shoppcart .unname .goods-wrap img {
  width: 180px;
}
#shoppcart .unname .goods-wrapiv {
  color: #999;
  font-size: 14px;
}
#shoppcart .unname .goods-wrap p:nth-of-type(3) {
  margin-top: 25px;
}
#shoppcart .unname .goods-wrap a {
  color: red;
  /* border: solid 1px red; */
  border-radius: 6px;
  padding: 2px 10px;
}

.bread-crumb {
  margin: 0;
  overflow: hidden;
  background: #eee;
}
.bread-crumb span {
  padding: 3px;
  font-size: 13px;
}
.bread-crumb span .choosed,
.bread-crumb span .choose {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  line-height: 10px;
}
.bread-crumb span span {
  display: inline-block;
}
.bread-crumb span .choose {
  background: #fff;
  border: solid 1px #999;
  border-radius: 50%;
}
.bread-crumb span .choosed {
  background: orangered;
  border: solid 1px orangered;
  border-radius: 50%;
}

.bread-crumb span .choosed i,
.bread-crumb span .choose i {
  color: #fff;
}

.bread-crumb .chooseall {
  margin-left: 8px;
}
.bread-crumb .isremove {
  float: right;
  margin-right: 10px;
}
.bread-crumb .isremove i {
  font-size: 18px;
}
.content-goods {
  margin-bottom: 98px;
}
.content-goods .goods-list .goods-wrap .choosed,
.content-goods .goods-list .goods-wrap .choose {
  float: left;
  position: relative;
  top: 50px;
  left: 8px;
  text-align: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  line-height: 14px;
}

.content-goods .goods-list .goods-wrap .choose {
  background: #fff;
  border: solid 1px #999;
  border-radius: 50%;
}

.content-goods .goods-list .goods-wrap .choosed {
  background: orangered;
  border: solid 1px orangered;
  border-radius: 50%;
  display: none;
}

.content-goods .goods-list .goods-wrap .choosed i,
.content-goods .goods-list .goods-wrap .choose i {
  color: #fff;
}
.content-goods .goods-list .goods-wrap {
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: solid 1px #999;
  font-size: 14px;
  overflow: hidden;
}
.content-goods div a {
  display: inline-block;
  position: relative;
  top: 0;
  left: 20px;
  color: #000;
  width: 225px;
  height: 120px;
}
.content-goods .goods-wrap img {
  float: left;
  width: 50%;
  height: 100%;
}
.content-goods .goods-list .goods-wrap .goodsname {
  /* border:solid 1px red; */
  /* float: left; */
  /* width: 50%; */
}
.content-goods .goods-list .goods-wrap {
  position: relative;
}
.content-goods .goods-list .goods-wrap .del,
.content-goods .goods-list .goods-wrap .edit {
  display: inline;
  position: absolute;
  left: 265px;
  top: 100px;
}
.content-goods .goods-list .goods-wrap .del {
  font-size: 23px;
  left: 300px;
  top: 80px;
}
.content-goods .goods-list .goods-wrap .edit span {
  border: solid 1px #999;
  padding: 3px 8px;
}
.content-goods .goods-list .goods-wrap .edit .nums {
  border: none;
  padding: 0;
  margin: 0;
}
.content-goods .goods-list .goods-wrap .price {
  color: red;
}
.content-goods .goods-list .goods-wrap .price del {
  color: #999;
  font-size: 12px;
}
.guige {
  color: #999;
  font-size: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  text-align: right;
}
.pays {
  position: fixed;
  bottom: 60px;
  border: none;
  background: #eee;
  width: 100%;
  text-align: right;
}
.pays p {
  display: inline-block;
}

.pays .zhifu {
  padding: 8px 22px;
  background: #f08080;
}
.pays .heji span {
  font-size: 12px;
  display: block;
  position: absolute;
  right: 125px;
}
.pays .heji span:nth-of-type(1) {
  bottom: 20px;
}
.pays .heji span:nth-of-type(2) {
  bottom: 2px;
}
.pays .heji span:nth-of-type(1) b,
.pays .heji span:nth-of-type(2) b {
  font-weight: normal;
}
.pays .heji span:nth-of-type(1) b {
  color: #f08080;
}
.pays .zhifu {
  color: #eee;
}
.unname p img {
  width: 180px;
  /* height:80px; */
}
.tianjia a {
  display: inline-block;
  border: solid 1px red;
  color: red;
  padding: 1px 3px;
  border-radius: 6px;
}
</style>
