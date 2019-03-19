<template>
  <div id="newgoods">
    <div class="header-nav">
        <find-page></find-page>
    </div>
    <div class="content-goods">
       <div class="goods-list">
          <div>
             <a href="javascript:;"  @click="article">
              <span class="tag">套装专场</span>
              <img src="/static/jingxuan1.jpg" alt="">
              <span class="timeupdate"> 2017-11-07 </span>
              <span class="like">
                <i class="fa fa-heart-o"></i>
                2918人喜欢
              </span>
              <span class="content">成套买，更便宜</span>
              <span class="desc">爆款成套配，好用不贵一生推</span>
            </a>
        </div>
      </div>
      <div class="goods-list">
          <div>
             <a href="javascript:;" @click="article">
              <span class="tag">零食专场</span>
              <img src="/static/jingxuan2.jpg" alt="">
              <span class="timeupdate"> 2017-11-07 </span>
              <span class="like">
                <i class="fa fa-heart-o"></i>
                2918人喜欢
              </span>
              <span class="content">天凉了，吃点好的</span>
              <span class="desc">存储能量，准备过冬</span>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import TwoNav from "./TwoNav.vue";
import FindPage from "../pages/FindPage.vue";
export default {
  data() {
    return {
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 1
    };
  },
  components: {
    HeaderNav,
    TwoNav,
    FindPage
  },
  methods:{
    article:function(){
      alert('待开发')
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content-goods {
  padding-top: 20px;
  margin-top: 52px;
  margin-bottom: 45px;
  width: 100%;
  height: 100%;
}
.content-goods .goods-list{
  height:200px;
}
.content-goods > div {
  width: 100%;
  height: 100%;
  margin-top: 15px;
  padding-bottom: 8px;
  position:relative;
}

.content-goods div div img {
  display: block;
  border: solid 1px #eee;
  border-radius: 8px;
  width: 100%;
  height: 130px;
}
.content-goods div a span {
  font-size: 12px;
  color: #000;
}
.content-goods div a span.tag{
  position: absolute;
  padding:0px 8px;
  background:linear-gradient(to left,orange,#f08080);
  color:#fff;
  border-top-right-radius:8px;
  border-bottom-right-radius:8px;
  top:-9px;
  left:0;
}
.content-goods div a span.timeupdate{
  position: absolute;
  left:5px;
  top:135px;
  color:#999;
}
.content-goods div a span.like{
  position: absolute;
  right:5px;
  top:135px;
  color:#f08080;
}
.content-goods div a span.content{
  position: absolute;
  left:3px;
  top:155px;
  font-size:14px;
}
.content-goods div a span.desc{
  position: absolute;
  left:3px;
  top:179px;
  color:gray;
}
</style>
