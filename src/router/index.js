//导入vue模块
import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//导入各种组件
import Home from '../components/HelloFromVux'
import IndexPage from '../pages/IndexPage'
import FindPage from '../pages/FindPage'
import HotGood from '../pages/HotGood'
import ShoppingCart from '../pages/ShoppingCart'
import MySelf from '../pages/MySelf'
import IndexContent from "../components/IndexContent.vue";
import JingXuan from "../components/JingXuan.vue";
import Login from "../components/Login.vue";
import ZhuCe from "../components/ZhuCe.vue";
import XiangQing from '../pages/XiangQing';
import PayShop from '../pages/PayShop';
import TruePay from '../pages/TruePay';
import UserSet from '../pages/UserSet';
import Search from '../pages/Search';
import InfoSet from '../pages/InfoSet';
import ConsevorAddress from '../pages/ConsevorAddress';
import Address from '../pages/Address';
import DaiFu from '../pages/DaiFu';
import DaiFa from '../pages/DaiFa';
import DaiShou from '../pages/DaiShou';
import DaiPing from '../pages/DaiPing';
//使用路由模块
Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    // 首页
    {
      path: '/',
      component: IndexPage
    },
    // 首页下的扒购节
    {
      // 有关路由的跳转，
      path: '/tagscontent/:url' ,
      component: IndexContent
    },
    // 发现页面
    {
      path: '/jingxuan',
      component: JingXuan
    },
    {
      path: '/zixun',
      component: FindPage
    },
    // 店主精选
    {
      path: '/shopkeeper',
      component: HotGood
    },
    // 购物车
    {
      path: '/shoppingcart',
      component: ShoppingCart
    },
    // {
    //   path: '/addcart/:id',
    //   component: ShoppingCart
    // },
    // 我的
    {
      path: '/me',
      component: MySelf
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/zhuce',
      component: ZhuCe
    },
    // 商品详情页面
    {
      path: '/xiangqing/:id',
      component: XiangQing
    },
    // 确认付款页面
    {
      path: '/payshop/:id',
      component: PayShop
    },
    // 提交订单之后的付款页面
    {
      path: '/true/:id/:ordernum',
      component: TruePay
    },
    {
      path: '/userset',
      component: UserSet
    },
    {
      path: '/sousuo',
      component: Search
    },
    {
      path: '/infoset',
      component: InfoSet
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/consevoraddress',
      component: ConsevorAddress
    },
    {
      path: '/daifu',
      component: DaiFu
    },
    {
      path: '/daifa',
      component: DaiFa
    },
    {
      path: '/daishou',
      component: DaiShou
    },
    {
      path: '/daiping',
      component: DaiPing
    },
  ]
})
