<template>
  <div id="indexbanner">
    <!-- 轮播图 -->
        <swiper loop auto  dots-position="center" :list="list" :aspect-ratio="350/800"></swiper>
  </div>
</template>

<script>
import { Swiper, Scroller,XHeader } from "vux";
import HeaderNav from "../components/HeaderNav.vue";
import IndexContent from "../components/IndexContent.vue";
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
    return {
      list: urlList,
      showList1: true,
    };
  },
  components: {
    Swiper,
    Scroller,
    IndexContent,
    XHeader
  }
  }
</script>

<style scoped>

</style>
