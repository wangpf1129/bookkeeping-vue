import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Detail from '@/views/Detail/Detail.vue';
import Statistics from '@/views/Statistics/Statistics.vue';
import NoMatch from '@/views/NoMatch/NoMatch.vue';
import Money from '@/views/Home/childComps/Money/Money.vue';
import Edit from '@/views/Home/childComps/Edit/Edit.vue';
import EditTag from '@/views/Home/childComps/Edit/EditTag.vue';
import OverviewChart from '@/views/Statistics/childComps/OverviewChart.vue';
import ExpensesChart from '@/views/Statistics/childComps/ExpensesChart.vue';
import IncomeChart from '@/views/Statistics/childComps/IncomeChart.vue';

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
        path: 'money',
        component: Money,
        children: [
          {
            path: 'edit',
            component: Edit,
            children:[
              {
                path:':id',
                component:EditTag
              }
            ]
          }
        ]
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
    component: Statistics,
    children:[
      {
        path:'overview',
        component:OverviewChart
      },
      {
        path:'expenses',
        component: ExpensesChart
      },
      {
        path:'income',
        component: IncomeChart
      },
      {
        path: '/statistics',
        redirect: '/statistics/overview',
      },
    ]
  },
  {
    path: '*',
    name: 'NoMatch',
    component: NoMatch
  }
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

export default router;
