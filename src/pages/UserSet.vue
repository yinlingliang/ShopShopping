<template>
  <div id="indexpage">
   <div class="header-wrap">
      <a href="#/me" class="nav-me">
        <i class="fa fa-angle-left"></i>
      </a>
      
      <a href="javascript:;" class="nav-title">
        <span>个人信息</span>
      </a>
    </div>
    <div class="main-wrap">
        


      <div class="touxiang content">
        
        <a href="#">
          <span>头像</span>
          <span class="tubiao"><i class="fa fa-angle-right"></i></span>
          <div class="uploadphoto tubaio" style="display:inline-block;">
            <img src="/static/me.jpg" alt="">
          </div>
        </a>
      </div>


      <div class="nicheng content">
        <a href="#">

          <span>昵称</span>
          <span class="tubiao">
            <small>dsc11</small>
            <i class="fa fa-angle-right"></i>
          </span>

        </a>
        
      </div>


      <div class="zhanghao content">

        <a href="javascript:;">
          <span>账号</span>
          <span class="tubiao"><small>dsc11</small></span>
        </a>
        
      </div>


      <div class="address content">

        <a href="#/address">
          <span>收货地址</span>
          <span class="tubiao"><i class="fa fa-angle-right"></i></span>
        </a>
        
      </div>


      <div class="mima content">

        <a href="javascript:;">
          <span>登录密码</span>
          <span class="tubiao">
            <small>修改密码</small>
            <i class="fa fa-angle-right"></i>
          </span>
        </a>
        
      </div>


      <div class="teacher content">

        <a href="javascript:;">
          <span>讲师认证</span>
          <span class="tubiao"><i class="fa fa-angle-right"></i></span>
        </a>
        
      </div>



    </div>


    <footer class="footer-wrap">

    </footer>


  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},

  mounted: function() {}
};
</script>

<style scoped>
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
.uploadphoto {
  position: relative;
  bottom: 7px;
  left: 30px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  float: right;
  margin-right: 45px;
}
.uploadphoto > img {
  width: 35px;
  height: 35px;
}
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

.footer-wrap {
  width: 360px;
  height: 65px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #f8f8ff;
}
.main-wrap {
  margin-top: 45px;
}
.content {
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  padding: 8px 5px;
  background: #fff;
  font-size: 13px;
}
.content > a {
  display: block;
  color: #000;
}
.content .tubiao {
  float: right;
  margin-right: 15px;
}
.mima small,
.nicheng small {
  position: relative;
  bottom: 2px;
}
.mima small {
  color: rgba(0, 0, 0, 0.3);
}
.content .tubiao i {
  color: #999;
  font-size: 22px;
}
.address,
.teacher,
.mima {
  border: none;
}
.mima,
.teacher {
  margin-top: 10px;
}
</style>
