<template>
  <div id="indexpage">
   <div class="header-wrap">
      <a href="#/me" class="nav-me">
        <i class="fa fa-angle-left"></i>
      </a>
      
      <a href="javascript:;" class="nav-title">
        <span>设置</span>
      </a>
    </div>
    <div class="main-wrap">

      <div class="clean content">
        <a href="javascript:;">
          <span>清除缓存</span>
          <span class="tubiao">
            <small>160.66 MB</small>
            <i class="fa fa-angle-right"></i>
          </span>
        </a>
        
      </div>

      <div class="comment content">
        <a href="#">
          <span>给个好评</span>
          <span class="tubiao"><i class="fa fa-angle-right"></i></span>
        </a>
        
      </div>

      <div class="us content">
        <a href="#">
          <span>联系我们</span>
          <span class="tubiao"><i class="fa fa-angle-right"></i></span>
        </a>
        
      </div>

      <div class="update content">
        <a href="#">
          <span>检查更新</span>
          <span class="tubiao">
            <i class="fa fa-angle-right"></i>
          </span>
        </a>
        
      </div>

      <div class="agreement content">
        <a href="#">
          <span>用户服务协议</span>
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
.uploadphoto {
  position: relative;
  bottom:7px;
  left:30px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  float: right;
  margin-right:45px;
}
.uploadphoto > img {
  width: 35px;
  height: 35px;
}
#indexpage {
  width: 360px;
  height: 588px;
  margin-top: 49px;
  background: #F8F8FF;
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
  right: 160px;
}
.nav-me i {
  color: #999;
  font-size: 28px;
}
.nav-title span {
  color: #000;
  font-size: 16px;
}
.footer-wrap {
  width: 360px;
  height: 65px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #F8F8FF;
}
.main-wrap {
  margin-top: 45px;
}
.content {
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  padding: 8px 5px;
  background:#fff;
  font-size:13px;
}
.content > a{
  display: block;
  color:#000;
}
.content .tubiao {
  float: right;
  margin-right: 15px;
}
.clean small{
 position: relative;
 bottom:2px;
}
.content .tubiao i{
  color:#999;
  font-size:22px;
}
.agreement{
  border:none;
}

</style>
