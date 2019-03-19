<template>
  <div>
    <router-view></router-view>
      <footer class="footernav">
        
        <tabbar>

          <tabbar-item  selected link="/">
            <i slot="icon" class="fa fa-home"></i>
            <span slot="label">首页</span>
          </tabbar-item>

          <tabbar-item link="/jingxuan">
            <i slot="icon" class="fa fa-th-large"></i>
            <span slot="label">发现</span>
          </tabbar-item>

          <tabbar-item link="/shopkeeper">
          <i slot="icon" class="fa fa-diamond"></i>
            <span slot="label">店主精选</span>
          </tabbar-item>
          
          <tabbar-item  link="/shoppingcart">
            <i slot="icon" class="fa fa-shopping-cart"></i>
            <span slot="label">购物车</span>
          </tabbar-item>

          <tabbar-item link="/me">
            <i slot="icon" class="fa fa-user-o"></i>
            <span slot="label">我的</span>
          </tabbar-item>

        </tabbar>
      </footer>
  </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'
export default{
    data(){
        return {

        }
    },
    components: {
    Tabbar,
    TabbarItem
  }

}
</script>

<style lang="less">

@import '~vux/src/styles/reset.less';
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
body {
  background-color: #fbf9fe;
}
.footernav{
  position: fixed;
  bottom:0;
  width:100%;
  background: #eee;
  height:40px;
}
.footernav ul{
  width:100%;
  // border:solid 1px #000;
  list-style: none;
  overflow: hidden;
  text-align: center;
}

.footernav ul li{
  // position: relative;
  width:20%;
  // border:solid 1px red;
  // padding-left:10px;
  float: left;
}
.footernav ul li.active{
  // border-radius: 8px;
  background:rgba(255,99,71,0.3);
  color:#fff;
}
.footernav span a{
  color:#999;
}
.footernav span i{
  margin-top:3px;
  margin-bottom:-8px;
  display: block;
  font-size:21px;
}
.footernav ul li a span{
  font-size:11px;
}
</style>
