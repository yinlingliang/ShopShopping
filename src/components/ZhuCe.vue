<template>
  <div id="login-wrap">
        <div class="header-wrap">
            <h2>
                <a href="#/me"><i class="fa fa-angle-left"></i></a>
                注册
            </h2>
        </div>
        <div class="content-wrap">
            <h2>
                <a href="#/login">登录账号</a>
            </h2>
            <h2>
                <a href="javascript:;">注册账号</a>
            </h2>
            <div>
                <span class="error">{{error}}</span>
                <span class="success">{{success}}</span>
                <input type="text" name="uname" placeholder="用户名" v-model.trim="uName">
                <br>
                <input type="email" name="email" placeholder="邮箱号" v-model.trim="uEmail">
                <br>
                <input type="password" name="password" placeholder="密码"  v-model.trim="uPwd">
                <br>
                <button @click.prevent="zhuce">注册</button>
            </div>
        </div>
        <div class="weixin">
            <div>
              <p>推荐登录方式</p>
              <p><i class="fa fa-weixin"></i></p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uName: "",
      uEmail: "",
      uPwd: "",
      error: "",
      success: ""
    };
  },
  methods: {
    zhuce: function() {
      const error = $('.error')
      const success = $('.success')
      this.$axios
        .post("/user/zhuce", {
          uname: this.uName,
          email: this.uEmail,
          password: this.uPwd
        })
        .then((result) => {
          console.log(result.data);
          if (result.data.error != 0) {
            this.error = result.data.msg;
            setTimeout(function(){
              error.fadeOut()
              location.reload()
            },3000)

          }else{
            this.success = result.data.msg;
            setTimeout(function(){
              success.fadeOut()
              location.href = '#/login'
            },3000)
          }
        })
        .catch((err) => {
          console.log("接受错误");
          console.log(err);
        });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.error{
  font-size:13px;
  color:red;
}
#login-wrap {
  text-align: center;
}
.header-wrap h2 {
  width: 100%;
  padding: 6px 0;
  background: #eee;
  position: absolute;
  left: 0;top:-18px;
}
.header-wrap h2 a {
  position: absolute;
  top: 0px;
  left: 6px;
  padding: 5px 10px;
}
.header-wrap h2 a i {
  color: #999;
}
.content-wrap {
  padding: 20px;
}
h2 {
  display: inline-block;
  width: 48%;
  font-weight: normal;
  font-size: 20px;
}
.content-wrap h2 {
  padding-bottom: 10px;
  margin-top:50px;
}
.content-wrap h2:nth-of-type(1) a {
  color: #000;
}
.content-wrap h2:nth-of-type(2) a {
  color: #db7093;
}
.content-wrap h2:nth-of-type(1) {
  border: none;
}
.content-wrap h2:nth-of-type(2) {
  border-bottom: 2px solid #db7093;
}
input {
  width: 100%;
  height: 30px;
  border: none;
  margin-top: 30px;
  background: none;
  color: #999;
  font-size: 16px;
  padding-left: 15px;
}
button {
  width: 100%;
  background: #db7093;
  border: none;
  padding: 10px;
  border-radius: 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
}
p {
  text-align: left;
  font-size: 14px;
  color: #999;
}
p a {
  color: blue;
}
.weixin{
  /* border:solid red 1px; */
  position: fixed;
  bottom:60px;
  width:100%;
}
.weixin p{
  text-align: center;
}
.weixin p:nth-of-type(1){
  position: relative;
}
.weixin p:nth-of-type(1):before{
  position: absolute;
  content:'';
  top:11px;
  bottom:0;
  left: 25px;
  right: 0;
  width:110px;
  height:1px;
  border-top:solid 1px rgba(0,0,0,0.3);
}
.weixin p:nth-of-type(1):after{
  position: absolute;
  content:'';
  top:11px;
  bottom:0;
  left: 220px;
  right: 0;
  width:110px;
  height:1px;
  border-top:solid 1px rgba(0,0,0,0.3);
}
.weixin p:nth-of-type(2){
  border:solid 1px rgba(0,0,0,0.3);
  display: inline-block;
  padding:8px;
  border-radius: 50%;
}
.weixin p i{
  font-size:25px;
}
</style>
