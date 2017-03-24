<template>
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
</template>

<script>
export default {
  name: 'spinner',
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
  }
}
</script>

<style lang="scss">
.spinner {
  /*position: fixed;*/
  /*z-index: 999;*/
  right: 15px;
  bottom: 15px;

  &.show {
    animation-play-state: running;
  }

  &.v-enter,
  &.v-leave-active {
    opacity: 0;
  }

  &.v-enter-active,
  &.v-leave {
    opacity: 1;
  }
}

  .spinner-result {
    position: fixed;
    right: 15px;
    bottom: 15px;
    color: lightgray;
    background-color: darkslategray;
    padding: 3px;
  }
</style>
