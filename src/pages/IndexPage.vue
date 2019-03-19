<template>
  <div id="indexpage">
    <header-nav>
      <p slot="topnav">
        <img src="/static/me.jpg" />
        首页
        <a href=""></a>
      </p>
    </header-nav>
    <!-- 滑动的二级导航 -->
    <div class="roll">
        <two-nav></two-nav>
    </div>
    <div class="banner">
        <index-banner></index-banner>
   </div>
    <div class="contents">
      <pa-gou></pa-gou>
    </div>
    
  </div>
</template>

<script>
import IndexBanner from "../components/IndexBanner";
import { Swiper, Scroller, XHeader } from "vux";
import HeaderNav from "../components/HeaderNav.vue";
import TwoNav from "../components/TwoNav.vue";
import PaGou from "../components/PaGou.vue";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
const baseList = [
  {
    url: "javascript:",
    img: img2
  },
  {
    url: "javascript:",
    img: img3
  },
  {
    url: "javascript:",
    img: img4
  },
  {
    url: "javascript:",
    img: img5
  }
];
const urlList = baseList.map((item, index) => ({
  url: "/",
  img: item.img
}));

export default {
  data() {
    return {};
  },
  components: {
    HeaderNav,
    IndexBanner,
    TwoNav,
    PaGou
  },
  
};
</script>

<style scoped>
img {
  position: absolute;
  left: 4%;
  top: 5%;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: solid 1px #fff;
  z-index: 1;
}
.banner{
  height: 230px;
  position:relative;
  top:65px;
}
</style>
