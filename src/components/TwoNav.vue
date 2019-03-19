<template>
  <div id="townav">
      <div class="roll-content">
      <scroller lock-y :scrollbar-x=false>
      <ul class="box1">
        <li class="box1-item" v-for="(item,index) in twonav"  @click="elect" :ins="index">
          <span>
            <a href="javascript:;"  :ins="item" @click="tagone"> {{item}} </a>
          </span>
        </li>
      </ul>
    </scroller>
    </div>
  </div>
</template>

<script>
import { Scroller } from "vux";
export default {
  data() {
    return {
      twonav: [],
      tagscontent:[],
    };
  },
  components: {
    Scroller
  },
  methods: {
    elect: function(ev) {
      var ins = $(ev.target).parents("li").attr("ins");
      var ul = $(ev.target).parents(".box1");
      ul.children().eq(ins).css("border-bottom", "solid 2px #000").siblings().css("border", "none");
    },
    tagone: function(ev) {
      let a = $(ev.target)
      let url = a.attr('ins')
      console.log(url)
      this.$axios.get("/user/tagone/" + url)
        .then(resData => {
          console.log(resData.data.taggoods)
          if (resData.data.error == 0) {
            this.tagscontent = resData.data.taggoods;
            this.$emit('chuansong',this.tagscontent)
            location.href = '#/tagscontent/' + url
          } else {
            this.error = "查询错误";
          }
        })
        .catch(err => {
          console.log("查找错误");
        });


    }
  },
  mounted() {
    this.$axios
      .get("/user/tagsnav")
      .then(resData => {
        if (resData.data.error == 0) {
          this.twonav = resData.data.tag;
        } else {
          this.error = "查询错误";
        }
      })
      .catch(err => {
        console.log("查找错误");
      });
  }
};
</script>

<style scoped>
#townav {
  position: fixed;
  background: #fff;
  top: 40px;
  width: 100%;
  height:25px !important;
  overflow: hidden;
 
}

.box1 {
  position: relative;
  width: 850px;
  background-color: #eee;
}
.box1-item {
  width: 80px;
  display: inline-block;
  margin-left: 15px;
  text-align: center;
}
.box1-item:first-child {
  margin-left: 0;
  border-bottom: #000 2px solid;
}
.box1-item a {
  color: #333;
  font-size: 13px;
}
</style>
