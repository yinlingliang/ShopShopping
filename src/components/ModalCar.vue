<template>
  <div id="modal">
<div class="select">
                    <!-- 按钮触发模态框 -->
                    <p class="btn btn-primary btn-lg" style="" data-toggle="modal" data-target="#myModal">
                        <span style="float:left;">规格选择</span>
                        <span style="float:right;"><i class="fa fa-angle-right"></i></span>
                    </p>
                    <!-- 模态框（Modal） -->
                    <div class="modal fade" id="myModal"  data-dismiss="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                        &times;
                                    </button>
                                    <div class="modal-title" id="myModalLabel">
                                        <div>
                                            <div class="img-wrap">
                                                <img :src="'http://127.0.0.1:2000/images/' + photo[0]" alt="">
                                            </div>
                                            
                                            <div class="text-wrap" style="">
                                                <span>价格:{{goodsone.pricenew | currency('￥')}}</span><br>
                                                <small>库存22396</small><br>
                                                <span class="select">已选:  {{guige[0]}} {{guige[1]}}</span><br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <div class="content">
                                        <p><small>净含量</small></p>
                                        <p><span>{{guige[0]}}</span></p>
                                    </div>
                                    <div class="classify">
                                        <p><small>规格类型</small></p>
                                        <p><span>{{guige[1]}}</span></p>
                                    </div>
                                    <div class="shopnum">
                                        <small>购买数量</small>
                                        <span><button>-</button>1 <button>+</button></span>
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default">
                                        <a  style="color:#f08081;" @click.prevent="addcart">加入购物车</a>
                                    </button>
                                    
                                    <button type="button" class="btn btn-primary">
                                        <a style="color:#fff;" :href="'#/payshop/' + goodsone._id" @click.prevent="paynow">
                                            立即购买
                                        </a>
                                    </button>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal -->
                    </div>
                </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      username:'',
    };
  },
  props: ["goodsone", "photo", "guige"],
  methods: {
    paynow: function() {
      
      if(this.username){
        location.reload();
      location.href = "#/payshop/" + this.goodsone._id;
      }else{
        alert('请登录')
      }
      
    },
    // 加入购物车
    addcart: function(ev) {
      ev.preventDefault();
      console.log("455");
      let url = this.$route.path.slice(11);
      this.$axios
        .get("/user/raisecart/" + url)
        .then(resdata => {
          console.log(resdata.data);
          if (resdata.data.error == 0) {
            console.log(resdata.data.shopping);
            this.shoppingcart = resdata.data.shopping;
            alert("添加购物车成功");
            location.reload();
          } else {
            alert("请登录");
          }
        })
        .catch(err => {
          console.log("接收错误");
        });
    }
  },
  mounted: function() {
    console.log(this.goodsone);
    this.$axios
      .get("/user/sessiondata")
      .then(userInfo => {
        let username = userInfo.data.user;
        if (userInfo.data.error != 0) {
          this.username = null;
        } else {
          this.username = username.uname;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.clean {
  clear: both;
}

/* 模态框 */
.modal-dialog {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 360px;
}
.btn-lg {
  position: absolute;
  background: #eee !important;
  color: #000;
  font-size: 13px;
  text-align: left;
  padding: 8px;
  margin-top: 10px;
}

.modal-title .img-wrap {
  display: inline-block;
  width: 150px;
}
.modal-title .text-wrap {
  display: inline;
}
.modal-title .img-wrap img {
  position: relative;
  top: -15px;
  left: 15px;
  border: solid 1px #999;
  border-radius: 15px;
  width: 105px;
  height: 105px;
}
.text-wrap {
  position: absolute;
  top: 15px;
  left: 130px;
}
.text-wrap span {
  display: inline-block;
}
.text-wrap span:nth-of-type(1) {
  margin-bottom: 5px;
  color: red;
}
.text-wrap span.select {
  margin-top: 5px;
}
.modal-body {
  height: 300px;
  padding: 12px;
}
.modal-body .classify,
.modal-body .content {
  border-bottom: solid 1px #eee;
}
.modal-body .classify span,
.modal-body .content span {
  display: inline-block;
  background: #f08081;
  padding: 1px 10px;
  border-radius: 6px;
  color: #fff;
  margin: 10px 0;
}

.modal-body .shopnum {
  margin-top: 90px;
  overflow: hidden;
}
.modal-body .shopnum span {
  display: inline-block;
  text-align: center;
  float: right;
  border: solid 1px rgba(0, 0, 0, 0.2);
}
.modal-body .shopnum span button {
  border: none;
  padding: 0 6px;
}
.modal-body .shopnum span button:nth-of-type(1) {
  border-right: solid 1px rgba(0, 0, 0, 0.2);
  margin-right: 8px;
}
.modal-body .shopnum span button:nth-of-type(2) {
  border-left: solid 1px rgba(0, 0, 0, 0.2);
  margin-left: 4px;
}
.modal-footer .btn + .btn {
  height: 60px;
  margin: 0;
}
.btn-default {
  color: #f08080;
}
.btn-primary {
  background: linear-gradient(to left, #f08081, #f08080);
  width: 100%;
  border: none;
}
.modal-footer button {
  width: 176px;
  height: 35px;
  border: none;
  margin: 0;
}
</style>
