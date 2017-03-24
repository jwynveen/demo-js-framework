Vue.component('spinner', {
  template: `
  <transition>
    <div class="spinner" :class="{show: show, 'spinner-result': !show}">
      <div v-if="show">
        <i class="fa fa-refresh fa-spin fa-3x"></i>
        <div>Loading... ({{durationDisplay}}s)</div>
      </div>
      <div v-else>
        Loaded for {{durationDisplay}}s
      </div>
    </div>
  </transition>
  `,
  props: ['show'],
  data() {
    return {
      duration: 0,
      countInterval: null,
    };
  },
  computed: {
    durationDisplay() {
      return Math.round(this.duration * 10) / 10;
    }
  },
  mounted() {
    console.log('Spinner:mounted');
    const self = this;
    this.countInterval = setInterval(function () {
      self.duration += 0.1;
    }, 100);
  },
  watch: {
    show: function (value) {
      if (!value && this.countInterval) {
        clearInterval(this.countInterval);
      }
    }
  },
});