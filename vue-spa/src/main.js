import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  },
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
