<template>
  <div id="indexpage">
   <div class="header-wrap">
      <a href="#/address" class="nav-me">
        <i class="fa fa-angle-left"></i>
      </a>
      
      <a href="javascript:;" class="nav-title">
        <span>添加地址</span>
      </a>
    </div>
    <div class="main-wrap">
        
        <form action="">
            <div class="input-wrap user">收货人<input name="username" type="text" placeholder="姓名"></div>
            
            <div class="input-wrap shouji">联系方式<input name="phone" type="text" placeholder="11位手机号"></div>
            
            <div class="input-wrap address-wrap">
                省/市/区
                <input type="text" name="provinces" placeholder="填写--省/市/区">
            </div>
            <div class="input-wrap address">详细地址<input name="address" placeholder="门牌街道信息" type="text"></div>
            
            <div class="input-wrap isMo">设为默认地址<input name="isCun" checked type="checkbox"></div>
            
            <div class="input-wrap finish"><input type="submit" value="完成"></div>
            
        </form>


    </div>


    <footer class="footer-wrap">

    </footer>


  </div>
</template>

<script>
import {
  Group,
  XAddress,
  ChinaAddressV4Data,
  Value2nameFilter as value2name
} from "vux";

export default {
  components: {
    Group,
    XAddress
  },
  data() {
    return {
      title: "省/市/区",
      value: [],
      addressData: ChinaAddressV4Data,
      showAddress: false,
      address: [],
      isMo: true
    };
  },
  methods: {
    onShadowChange(ids, names) {
      this.address = names;
    },
    logHide(str) {},
    logShow(str) {},
    moren: function(ev, num) {
      console.log(ev.target.checked);
    }
  },
  mounted() {
    let that = this;
    $("form").submit(function(ev) {
      ev.preventDefault();
      let data = $(this).serialize();

      console.log(data);
      that.$axios
        .post("/user/addresszeng", data)
        .then(resdata => {
          console.log(resdata.data)
          if(resdata.data.error == 0){
            alert(resdata.data.msg);
            location.href = '#/address'
          }else{
            alert(resdata.data.msg)
          }
        })
        .catch(err => {
          console.log("接收出错了");
          console.log(err);
        });
    });
    console.log(this.$route.path)
  }
};
</script>

<style scoped>
#indexpage {
  width: 360px;
  height: 588px;
  margin-top: 49px;
  background: #f8f8ff;
}
.header-wrap {
  width: 100%;
  position: fixed;
  top: 0;
  height: 42px;
  z-index: 1;
  background: #fff;
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
  right: 140px;
}
.nav-me i {
  color: #999;
  font-size: 28px;
}
.nav-title span {
  color: #000;
  font-size: 16px;
}

form {
  position: relative;
}
.input-wrap {
  font-weight: 900;
  font-size: 14px;
  padding: 8px 0 10px 15px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.input-wrap input {
  /*  */
  width: 270px;
  border: none;
  background: none;
  margin-left: 10px;
  font-size: 13px;
  font-weight: 100;
}
.isMo input {
  border: solid 1px red;
  position: absolute;
  left: 200px;
}
.isMo {
  margin-top: 15px;
  border: none;
}
.finish {
  text-align: center;
  position: relative;
  right: 10px;
  background: #f8f8ff;
}
.finish input {
  background: #ff69b4;
  color: #fff;
  border-radius: 15px;
  width: 300px;
  padding: 6px 120px;
}

.footer-wrap {
  width: 360px;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #f8f8ff;
}
</style>
