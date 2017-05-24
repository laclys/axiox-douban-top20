import Vue from 'vue'
import Router from 'vue-router'
import test01 from '../components/test.vue';

Vue.use(Router);

const test02 = {
  template: '<div>test002</div>'
};

export default new Router({
  routes: [
  {
    path: '/test01',
    component: test01
  },
  {
    path: '/test02',
    component: test02
  }
  ]
});
