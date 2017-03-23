Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  },
});


new Vue({
  el: '#app',
  data: {
    message: 'Show me!',
    items: [{
      text: 'Added server-side',
      checked: false,
      isEditMode: false,
    }, {
      text: 'Delete me',
      checked: true,
      isEditMode: false
    }]
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
})