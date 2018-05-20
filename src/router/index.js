import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MenuPage from '@/components/menu/MenuPage';
import Article from '@/components/Article';

Vue.use(Router);

const routes = [
  {
    path: "/", component: MenuPage
  },
  {
    path: "/hello", component: HelloWorld,
  },
  {
    path:'/article',component:Article,
  }
];

export default new Router({routes})
