<template>
  <div id="indexpage">
   
   <div class="header-wrap">
      
      <a href="#/me" class="nav-me">
        
        <i class="fa fa-angle-left"></i>
      
      </a>
      
      <a href="javascript:;" class="nav-title" >
        
        <span>收货地址</span>
      
      </a>
    
    </div>
    
    <div class="main-wrap" v-if="addresslist.length >= 1">
        
        <div class="address-list" v-for="item in addresslist">

            <p class="userinfo"><span>收货人：{{item.username}}</span><span class="shouji">{{item.phone}}</span></p>
            
            <p class="dizhi">收货地址：{{item.provinces}}{{item.address}}</p>
            
            <p class="footer">
                
                <input v-if="item.isCun" type="checkbox" @click="sele($event,false)" checked :value="item._id">
                
                <input v-else type="checkbox" @click="sele($event,true)" :value="item._id">
                
                <span class="caozuo">
                    
                    <em><a @click.prevent="edit(item._id)" href="#/consevoraddress"><i class="fa fa-pencil"></i>编辑</a></em>
                    
                    <em @click="remove(item._id)"><i class="fa fa-trash-o"></i>删除</em>
                
                </span>
            
            </p>
        
        </div>
    
    </div>
    
    <div class="main-wrap" v-else>
        
        <div class="kong">
           
            <h4>还没有收货地址，请添加。。。</h4>
        
        </div>
   
    </div>
    
    <div class="add">
       
        <a href="#/consevoraddress"> 添加新的收货地址 </a>
   
    </div>

    <footer class="footer-wrap">

    </footer>


  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      addresslist: [],
      isMo: ""
    };
  },
  methods: {
    edit: function(id) {
      console.log(id);
      alert('此功能暂未开发')
    },
    remove: function(id) {
      console.log(id);
      this.$axios
        .post("/user/removeaddress/" + id, { id })
        .then(resdata => {
          console.log(resdata);
          if (resdata.data.error == 0) {
            this.addresslist = resdata.data.addresslist;
            alert(resdata.data.msg);
          } else {
            alert(resdata.data.msg);
          }
        })
        .catch(err => {
          console.log("数据接收错误");
          console.log(err);
        });
    },
    sele: function(ev, sele) {
      this.isMo = ev.target.checked;
      let bool = this.isMo;
      console.log($(ev.target).val());
      let id = $(ev.target).val();
      this.$axios
        .post("/user/morenaddress/" + id + "/" + sele, { bool, id })
        .then(resdata => {
          console.log(resdata.data.msg);
          if (resdata.data.error == 0) {
            alert(resdata.data.msg);
            location.reload();
          } else {
            alert(resdata.data.msg);
            location.reload();
          }
        })
        .catch(err => {
          console.log("接收错误");
          console.log(err);
        });
    }
  },
  mounted() {
    this.$axios
      .post("/user/addresslist")
      .then(resdata => {
        
        if (resdata.data.error == 0) {
          this.addresslist = resdata.data.addresslist;
        } else {
          alert(resdata.data.msg);
        }
      })
      .catch(err => {
        console.log("数据接受错误");
        console.log(err);
      });
  }
};
</script>

<style scoped>
.kong {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#indexpage {
  width: 360px;
  height: 588px;
  margin-top: 49px;
  background: #f8f8ff;
}
.header-wrap {
  border-bottom: solid 1px rgba(0, 0, 0, 0.15);
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
  right: 140px;
}
.nav-me i {
  color: #999;
  font-size: 28px;
}
.nav-title span {
  color: #000;
  font-size: 16px;
}
.main-wrap {
  position: relative;
  top: -6px;
}
.address-list {
  border-bottom: solid 1px rgba(0, 0, 0, 0.15);
  padding: 2px 5px 0;
  background: #fff;
}

.shouji {
  margin-left: 30px;
}
.caozuo {
  float: right;
  margin-right: 5px;
}
.caozuo em {
  margin-left: 15px;
  font-style: normal;
  color: #999;
}
.caozuo em i {
  margin-right: 5px;
}
em a {
    color:#999;
}
.add {
  /* border:solid 1px red; */
  text-align: center;
  width: 360px;
  padding: 13px 0;
  position: fixed;
  bottom: 0;
  z-index: 8;
  background: #fff;
}
.add > a {
  padding: 6px 90px;
  background: #ff69b4;
  color: #fff;
  border-radius: 15px;
}
.footer-wrap {
  width: 360px;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #f8f8ff;
}
</style>
