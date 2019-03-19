<template>
  <div id="login-wrap">
        <div class="header-wrap">
            <h2>
                <a href="#/me"><i class="fa fa-angle-left"></i></a>
                登录
            </h2>
        </div>
        <div class="content-wrap">
            <h2>
                <a href="javascript:;">登录账号</a>
            </h2>
            <h2>
                <a href="#/zhuce">注册账号</a>
            </h2>
            <div class="denglu">
                <span class="error">{{error}}</span>
                <span class="success">{{success}}</span>
                <input type="text" name="uname" value="" v-model.trim="uName" placeholder="用户名/邮箱号">
                <br>
                <input type="password" name="password" v-model.trim="uPwd" placeholder="密码">
                <br>
                <button type="submit" @click.prevent="login">登录</button>
                <p>
                    <a href="javascript:;">忘记密码?</a>
                </p>
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
      uPwd: "",
      error: "",
      success: ""
    };
  },
  methods: {
    login: function() {
      const error = $(".error");
      const success = $(".success");
      this.$axios
        .post("/user/login", {
          uname: this.uName,
          password: this.uPwd
        })
        .then((result) => {
          if (result.data.error != 0) {
            this.error = result.data.msg;
            console.log(this.error);
            setTimeout(function(){
                error.fadeOut()
                location.reload()
            },2000)
          }else{
              this.success = result.data.msg
              console.log('111111')
              console.log(this.success)
               setTimeout(function(){
                success.fadeOut()
                location.href = '#/'
            },3000)
          }
        })
        .catch((err) => {
          console.log("接收错误");
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.error,.success{
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
  padding-bottom: 20px;
  margin-top:50px;
}
.content-wrap h2:nth-of-type(1) a {
  color: #db7093;
}
.content-wrap h2:nth-of-type(2) a {
  color: #000;
}
.content-wrap h2:nth-of-type(1) {
  border-bottom: 2px solid #db7093;
}
.content-wrap h2:nth-of-type(2) {
  border-bottom: none;
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
.zhuce {
  position: absolute;
  top: 140px;
  display: none;
}
.zhuce button {
  width: 360px;
  background: #db7093;
}
p {
  text-align: right;
  margin-top: 10px;
}
p a {
  font-size: 14px;
  color: #999;
}
.weixin{
  /* border:solid red 1px; */
  position: fixed;
  bottom:60px;
  width:100%;
  color:#999;
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
  margin-bottom:20px;
}
.weixin p i{
  font-size:25px;
}
</style>
