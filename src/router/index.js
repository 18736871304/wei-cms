// import Vue from "vue";
// import VueRouter from "vue-router";
// // import login from '../views/login/login.vue'
// Vue.use(VueRouter);
// import login from "../views/login/login.vue"

let routes = [

  {
    path: "/login",
    name: "",
    meta: {
      title: ''
    },
    component: () => import("../views/login/login.vue"),
    // component: login,
  },




  {
    path: '/',
    component: () => import("@/views/index/index.vue"),
    name: '首页',
    leaf: true,//只有一个节点
    iconCls: 'fa fa-home',
    hidden: true,
    children: [{
      path: '/Home',
      component: () => import("@/views/Home/Home.vue"),
      name: '系统首页',
      hidden: true,
    }]
   },





  {
    path: "/",
    name: "数据表",
    meta: {
      title: '导航一'
    },
    iconCls: 'el-icon-message', //图标样式class
    component: () => import("@/views/index/index.vue"),
    hidden: true,
    children: [
      {
        path: '/table',
        component: () => import("@/views/nav1/table.vue"),
        meta: {
          title: 'table'
        },
        name: '表格',
        hidden: true
      },
      {
        path: '/from',
        component: () => import("@/views/nav1/from.vue"),
        name: '表单',
        hidden: true,
        // children:[{
        //   path: '/use',
        //   component: () => import("@/views/nav1/use.vue"),
        //   name: 'use',
        //   hidden: true,
        // }
        // ]
      },
      {
        path: '/list',
        component: () => import("@/views/nav1/list.vue"),
        meta: {
          title: 'list'
        },
        name: '列表',
        hidden: true
      }
    ]
  },

  {
    path: "/",
    name: "滑块",
    meta: {
      title: '导航二'
    },
    iconCls: 'fa fa-id-card-o',
    component: () => import("@/views/index/index.vue"),
    hidden: true,
    children: [

      {
        path: '/page1',
        component: () => import("@/views/nav2/page1.vue"),
        name: 'page1',
        hidden: true
      },
      {
        path: '/page2',
        component: () => import("@/views/nav2/page2.vue"),
        name: 'page2',
        hidden: true
      },
      {
        path: '/page3',
        component: () => import("@/views/nav2/page3.vue"),
        name: 'page3',
        hidden: true
      }
    ]
  },

  {
    path: '/',
    component: () => import("@/views/index/index.vue"),
    name: '数据图',
    iconCls: 'fa fa-bar-chart',
    hidden: true,
    children: [{
      path: '/echarts',
      component: () => import("@/views/nav3/echarts.vue"),
      name: 'echarts',
      hidden: true,
    }]
  },
 {
  path: '/',
  component: () => import("@/views/index/index.vue"),
  name: '导航四',
  leaf: true,//只有一个节点
  iconCls: 'fa fa-address-card',
  hidden: true,
  children: [{
    path: '/nav4',
    component: () => import("@/views/nav4/nav4.vue"),
    name: '富文本',
    hidden: true,
  }]
 },




 

  {
    path: '/',
    component: () => import("@/views/index/index.vue"),
    name: '地图',
    iconCls: 'fa fa-map',
    leaf: true,//只有一个节点
    hidden: true,
    children: [{
      path: '/map',
      component: () => import("@/views/nav5/map.vue"),
      name: 'map',
      hidden: true,
    }]
  },
  {
    path: '/404',
    component: () => import("@/views/404/404.vue"),
    name: '',

  },
  {
    path: '*',
    redirect: {
      path: '/404'
    }
  }
];
// router.addRoutes(route);
// const router = new VueRouter({
//   mode: "history",
//   // mode: "hash",
//   base: process.env.BASE_URL,
//   routes
// });

export default routes;