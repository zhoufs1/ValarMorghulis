import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MenuPage from '@/components/menu/MenuPage';

Vue.use(Router);

const routes = [
  {
    path: "/", component: MenuPage
  },
  {
    path: "/hello", component: HelloWorld,
  }
];

export default new Router({routes})
