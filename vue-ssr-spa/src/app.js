import Vue from 'vue';
import App from './App.vue';
import store from './store'
import router from './router';
import { sync } from 'vuex-router-sync'
import * as directives from './directives';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utilities
for (const key in directives) {
  Vue.directive(key, directives[key]);
}

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }
