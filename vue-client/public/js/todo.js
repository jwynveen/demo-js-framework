
Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  },
});


new Vue({
  el: '#app',
  data: {
    isLoading: true,
    items: [],
  },
  methods: {
    toggleEditMode: function (item) {
      item.isEditMode = !item.isEditMode;
    },
    deleteItem: function (index) {
      this.items.splice(index, 1);
    },
    addItem: function () {
      this.items.push({
        text: '',
        checked: false,
        isEditMode: true,
      });
    }
  },
  created: function () {
    console.log('ToDo:created');
    const self = this;
    setTimeout(function () {
      // simulating the wait for loading data from server on initial load
      self.isLoading = false;
      self.items = [{
        text: 'Added server-side',
        checked: false,
        isEditMode: false,
      }, {
        text: 'Delete me',
        checked: true,
        isEditMode: false
      }];
    }, 1000);
  }
});