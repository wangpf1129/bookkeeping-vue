import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Detail from '@/views/Detail/Detail.vue';
import Statistics from '@/views/Statistics/Statistics.vue';
import NoMatch from '@/views/NoMatch/NoMatch.vue';
import Money from '@/views/Home/childComps/Money/Money.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'money',
        component: Money
      },
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path:'*',
    name:'NoMatch',
    component:NoMatch
  }
];

const router = new VueRouter({
  routes,
  mode:"hash"
});

export default router;
