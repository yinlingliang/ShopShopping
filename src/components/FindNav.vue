<template>
    <div id="find-nav">
        <ul class="list-wrap">
            <li v-for="(list,index) in lists" @click="elect" :ins="index">
                <a :href="list.url">
                <i :class="list.font"></i>
                {{list.name}}
                </a>
            </li>
        </ul>
    </div>
</template>


<script>

export default {
  data() {
    return {
        lists:[
            {name:'精选',ins:0,font:'fa fa-trophy',url:'#/jingxuan'},
            {name:'资讯',ins:1,font:'fa fa-newspaper-o',url:'#/zixun'}
        ]
    };
  },
  methods:{
      elect:function(ev){
          var ins = $(ev.target).parent('li').attr('ins')
          console.log(ins)
          var ul = $(ev.target).parents('.list-wrap');
          console.log(ul.children())
          ul.children().eq(ins).css('border-bottom','solid 2px #000').siblings().css('border-bottom','none');
      }
  },
  mounted(){}
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#find-nav {
  width: 100%;
  background: #eee;
  text-align: center;
  position: fixed;
  top:40px;
  z-index:1;
}
ul {
  width: 100%;
  list-style: none;
}
ul li {
  display: inline-block;
  width: 49%;

}
ul li:nth-of-type(1){
  border-bottom: solid 2px #000;
}
#find-nav a {
  width: 100%;
  display: inline-block;
  color: #333;
}
</style>
