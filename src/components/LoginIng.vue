<template>
  <div style="">
    <blur :blur-amount=40 :url="url">
      <p class="center">
        <a v-if="!username" href="#/login">
          <img :src="url">
        </a>
        <a v-else class="imgs" href="#/userset">
            <img :src="url">
        </a>
        <span class="loginSet">
          
            <a class="logins" href="#/login">
                <b v-if="!username">点击登录</b>
                <b v-else>{{username}} <a v-if="isCun" href="javascript:;" @click="loginout">退出</a> <a href="javascript:;">{{message}}</a> </b>
            </a>
            <a  class="aboutme" href="javascript:;">
              <i class="fa fa-female">颜值</i>
              <i class="fa fa-bar-chart">销售额</i>
            </a>
        </span>
      </p>
    </blur>
    <flexbox :gutter="0">
      <flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur } from "vux";

export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      images: [
         'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      username: "",
      message:'',
      isCun:true
    };
  },
  methods: {
    loginout: function() {
      let success = $(".success");
      this.$axios
        .get("/user/loginout")
        .then(userInfo => {
          console.log(userInfo.data.error);
          if (userInfo.data.error == 0) {
            let msg = userInfo.data.msg;
            this.message = msg;
            this.isCun = false;
            
            setTimeout(function() {
              success.fadeOut();
              location.reload();
            }, 2000);
          }
        })
        .catch(err => {
          console.log("错误");
          console.log(err);
        });
    }
  },
  mounted() {
    this.$axios
      .get("/user/sessiondata")
      .then(userInfo => {
        let username = userInfo.data.user;
        if (userInfo.data.error != 0) {
          this.username = null;
        } else {
          this.username = username.uname;
          this.$emit('useriscun',this.isCun)
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.center {
  text-align: left;
  padding-top: 50px;
  padding-left: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.center a {
  display: inline-block;
  /* border:solid 1px red; */
  font-size: 14px;
  color: #fff;
}
.center .loginSet {
  float: right;
  position: relative;
  width: 65%;
  /* border:solid 1px blue; */
  display: inline-block;
  height: 110px;
}
.center a.logins {
  position: absolute;
  top: 15px;
}
.center .loginSet:after {
  content: "_________________________________";
  position: relative;
  top: 26px;
  right: 0;
  width: 1000px;
  height: 1px;
  /* border:solid 1px green; */
}
.center a.aboutme {
  position: absolute;
  bottom: 20px;
}
.center a.aboutme b {
}
.center a.aboutme i {
  font-size: 12px;
  display: block;
  margin-top: 6px;
}
</style>
