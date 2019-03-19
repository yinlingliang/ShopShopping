<template>
  <div id="headernav">
    <x-header :left-options="{showBack: false}">
      <slot name="gear"></slot>
      <slot name="topnav"></slot>
    </x-header>
    <a href="#/sousuo">
      <i class="fa fa-search"></i>
    </a>
    
  </div>
</template>

<script>
import { XHeader } from "vux";
export default {
  data() {
    return {
      showMenus: false
    };
  },
  components: {
    XHeader
  }
};
</script>

<style scoped>
#headernav {
  width: 100%;
  position: fixed;
  top: 0;
  height:42px;
  z-index: 1;
}
.vux-header {
  width: 100%;
  background: #f08080;
  padding: 0;
}
a {
  padding: 6px 6px;
  position: absolute;
  top: 0;
  right: 5px;
}
a i {
  color: #fff;
  font-size: 18px;
}
</style>
