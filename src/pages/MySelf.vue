<template>
  <div id="indexpage">
    
   
   <div class="header-wrap">
     <x-header :left-options="{showBack: false}"></x-header>
      <a href="#/infoset" class="set">
        <i class="fa fa-gear"></i>
      </a>
      <a href="javascript:;" class="liaotian">
        <i class="fa fa-commenting-o"></i>
      </a>
    </div>
    <div class="login-ing">
        <login-ing @useriscun="jieshou"></login-ing>
    </div>
    <div class="content-wrap" v-if="unameCun">
      <div class="order pul">
          <a href="#">
            <span class="text">我的订单</span>
            <span class="tubiao"><i class="fa fa-angle-right"></i></span>
          </a>
      </div>
      <div class="order-list pul">
          <ul>
            <li>
              <span v-if="waitpay > 0" class="num">{{waitpay}}</span>
              <span v-else></span>
              <a href="#/daifu">
                <i class="fa fa-credit-card"></i>
                <small>待付款</small>
                
              </a>
            </li>
            <li>
              <span v-if="waitfa > 0" class="num">{{waitfa}}</span>
              <span v-else></span>
              <a href="#/daifa">
                <i class="fa fa-archive"></i>
                <small>待发货</small>
              </a>
            </li>
            <li>
              <span v-if="waitshou > 0" class="num">{{waitshou}}</span>
              <span v-else></span>
              <a href="#/daishou">
                <i class="fa fa-ambulance"></i>
                <small>待收货</small>
              </a>
            </li>
            <li>
              <span v-if="waitping > 0" class="num">{{waitping}}</span>
              <span v-else></span>
              <a href="#/daiping">
                <i class="fa fa-heart-o"></i>
                <small>待评价</small>
              </a>
            </li>
          </ul>
      </div>
      <div class="like pul">
          <a href="#">
            <span class="text"><i class="fa fa-heart-o"></i> 我喜欢的品牌</span>
            <small>共0个</small>
            <span class="tubiao"><i class="fa fa-angle-right"></i></span>
          </a>
      </div>
      <div class="guanzhu pul">
          <a href="#">
            <span class="text"><i class="fa fa-calendar-check-o"></i>我的关注</span>
            <span class="tubiao"><i class="fa fa-angle-right"></i></span>
          </a>
      </div>
      <div class="friend pul">
          <a href="#">
            <span class="text"><i class="fa fa-user-plus"></i>邀请小伙伴</span>
            <span class="tubiao"><i class="fa fa-angle-right"></i></span>
            <small>已邀请0人</small>
          </a>
      </div>
      <div class="info pul">
          <a href="#/userset">
            <span class="text"><i class="fa fa-address-card-o"></i>我的个人信息</span>
            <span class="tubiao"><i class="fa fa-angle-right"></i></span>
          </a>
      </div>
      <div class="duihuan pul">
          <a href="#">
            <span class="text"><i class="fa fa-refresh"></i>使用兑换码</span>
            <span class="tubiao"><i class="fa fa-angle-right"></i></span>
          </a>
      </div>
    </div>


    <div v-else class="kong">
      <p>登陆之后可以查看更多信息哦...</p>
    </div>

   
  </div>
</template>

<script>
import LoginIng from "../components/LoginIng.vue";
import HeaderNav from "../components/HeaderNav.vue";
import { XHeader } from "vux";
export default {
  data() {
    return {
      unameCun:'',
      waitpay:'',
      waitfa:'',
      waitshou:'',
      waitping:''
    };
  },
  components: {
    HeaderNav,
    XHeader,
    LoginIng,
  },
  methods:{
    jieshou:function(iscun){
      this.unameCun = iscun
    }
  },
  mounted(){
    this.$axios.post('/user/num').then((resdata) => {
      console.log(123);
      console.log(resdata.data)
      if(resdata.data.error == 0){
        this.waitpay = resdata.data.waitfu
        this.waitfa = resdata.data.waitfa
        this.waitshou = resdata.data.waitshou
        this.waitping = resdata.data.waitping
      }else{
        alert(resdata.data.msg)
      }
    }).catch((err) => {
      console.log('数据接受错误');
      console.log(err);
    })
  }
};
</script>

<style scoped>
.kong{
  display: flex;
  justify-content: center;
  align-items: center;
  height:300px;
}
.kong p{
  color:#2E8B57;
  font-size:18px;
}
.header-wrap .set i{
  font-size:20px;
}
.vux-header-title-area,
.vux-header .vux-header-title p {
  font-size: 16px;
}
.header-wrap{
  width: 100%;
  position: fixed;
  top: 0;
  height:42px;
  z-index: 1;
}
.vux-header {
  width: 100%;
}
.vux-header {
  width: 100%;
  background: rgba(0, 0, 0, 0);
  padding: 0;
}
.set {
  padding: 6px 6px;
  position: absolute;
  top: 0;
  left: 5px;
}
.liaotian {
  padding: 6px 6px;
  position: absolute;
  top: 0;
  right: 5px;
}
.set i {
  color: #fff;
}
.liaotian i {
  color: #fff;
  font-size: 18px;
}
.content-wrap{
  margin-top:16px;
}
.order-list{
  height:50px;
  padding:0;
  margin:0;
}
ul{
  list-style: none;
  text-align: center;
  
}
ul li {
  width:90px;
  height:50px;
  float:left;
  padding:3px 0;
  position: relative;
  
}
ul li a{
  color:#999;
}
ul li a i{
  display: block;
}
.pul{
  width:360px;
  border-bottom:solid 1px rgba(0, 0, 0, 0.15);
  background:#fff;
  padding:5px 0;
}
.pul > a{
  color:#000;
  display: block;
}
.pul > a small{
  color:#999;
}
.pul .tubiao i{
  float: right;
  margin-right:15px;
  font-size:20px;
  color:#999;
}
.text i{
  margin-left:6px;
  margin-right:8px;
  color:#333;
}
.friend small{
  float: right;
  margin-right:15px;
}
.order{
  border-top:solid 1px rgba(0, 0, 0, 0.06);
}

.num{
  position: absolute;
  top:-4px;
  right:25px;
  display: inline-block;
  background:red;
  width: 15px;
  height:15px;
  border-radius: 50%;
  font-size:12px;
  line-height: 15px;
  color:#fff;
}
.duihuan,
.info{
  border:none;
}
.duihuan{
  margin-top:10px;
}
</style>
