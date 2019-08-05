import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Register global Bootstrap VUE components
import {
  BAlert,
} from 'bootstrap-vue';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Init the Bootstrap Components previously imported
Vue.component('b-alert', BAlert);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
