import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from 'TodoRouterDir/routes';
// import routes from 'TodoVuexDir/routes';
// import store from 'TodoVuexDir/store';
// import routes from 'VuexSample/routes';
// import store from 'VuexSample/store';

import '../scss/global.scss';

// import myApp from './first';
// import myApp from 'TodoDir';
import myApp from 'TodoRouterDir';
// import myApp from 'TodoVuexDir';
// import myApp from 'VuexSample';

//ルーターインスタンス
Vue.use(VueRouter); 
const router = new VueRouter({
  routes,
  mode: 'history',
});
//
//vue
new Vue({
  el: '#app', //vueがマウントしてる（）
  router,
  // store,
  render: h => h(myApp),
  //HTML化　index.vueをhtmlに出力
  //インスタンス化することでvue.jsを使用できるようになる
  // render: h => h(myApp), は↓の書き方を短くしたもの
  // render: function (createElement) {
  //   return createElement(myApp)
  // }
});
