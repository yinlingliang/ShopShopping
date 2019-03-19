<template>
  <div class="zhifu">
    <nav>
        <a class="nav-zuo" href="#/">
            <i class="fa fa-angle-left"></i>
        </a>
        支付
    </nav>
    <div class="dizhi">
        <p @click.prevent="truePay">
            <a href="#">
                <img src="/static/shortcut.jpg" alt="">
                <span>快捷支付<i>校妆网推荐</i></span>
                <span class="tubiao fa fa-angle-right"></span>
            </a>
            
        </p>
        <p>
            <a href="#">
                <img src="/static/payfor.jpg" alt="">
                找人代付
                <span class="tubiao fa fa-angle-right"></span>
            </a>
            
        </p>
    </div>
    <div class="importent">
        <h3>重要</h3>
        <p>校妆网<span>不会以任何形式及理由</span>，让您通过支付宝、微信、银行、或者ATM机进行转账或要求您
        点击链接进行退款或重新支付，有关订单售后问题，您可致电<span>4000369090</span>
        </p>
    </div>
    
    <footer>
        
    </footer>
  </div>
</template>
<script>


export default {
  components: {
    
  },
  data: function() {
    return {
     
    };
  },
  methods:{
      truePay:function(ev){

          let id = this.$route.path.slice(6,15);

          console.log(id);

          let ordernum = this.$route.path.slice(16);

          console.log(ordernum);

          this.$axios.post('/user/truepay/' + id + '/' + ordernum ,{id,ordernum}).then((resdata) => {
              
            if(resdata.data.error == 0){

                alert(resdata.data.msg);

                location.href = '#/me'

            }else{

                alert(resdata.data.msg)

            }

          }).catch((err) => {

              console.log('数据接受错误');
              
          })

      }
  }
  
};
</script>
<style scoped>
*{
    box-sizing: border-box;
    margin:0;
}
.zhifu{
    width:360px;
    height:640px;
    background:#fff;
}
nav {
  text-align: center;
  border-bottom:solid 1px rgba(0, 0, 0, 0.08);
  line-height: 35px;
  background:rgba(0, 0, 0, 0.03);
}
nav a {
  position: relative;
  font-size: 28px;
  color: #000;
  top: 2px;
  right:140px;
  color:#999;
}

.dizhi{
    height: 80px;
}
.dizhi p a{
    color:#000;
    font-size:13px;
}
.dizhi p:nth-of-type(1) img{
    width:40px;
}
.dizhi p a i{
    font-style: normal;
    border:#FF69B4 solid 1px;
    border-radius:6px;
    padding:2px 5px;
    font-size:10px;
    margin-left:10px;
    color:#FF69B4;
}
.dizhi p{
    line-height: 38px;
}
.dizhi p .tubiao{
    display: inline-block;
    float: right;
    font-size:28px;
    margin-right:20px;
    padding:1px;
    color:#999;
}
.dizhi p img{
    width:45px;
}
.importent{
    text-align: center;
    padding:35px;
}
.importent h3{
    color:#FF69B4;
    font-size:16px;
     margin-bottom:10px;
}
.importent p{
    text-align: left;
    font-size:13px;
}
.importent p span{
    color:#FF69B4;
}
footer{
    width:100%;
    position: fixed;
    bottom:0;
    z-index:2;
    background: #fff;
    height:65px;
}
</style>