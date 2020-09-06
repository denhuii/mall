import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import _ from 'lodash';
import './vant';

Vue.prototype._ = _;

Vue.config.productionTip = false;

// import { Button } from 'vant';

// Vue.use(Button);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
