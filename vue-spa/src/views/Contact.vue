<template>
  <div>
    <h1>Contact</h1>

    <pre v-if="isPost">
      {
        name: {{name}}
      }
    </pre>

    <form v-else v-on:submit="onSubmit" method="post">
      <div class="form-group">
        <label class="control-label">Name</label>
        <input type="text" name="name" v-model="name" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data() {
      return {
        isPost: false,
      };
    },
    methods: {
      onSubmit: function (evt) {
        this.isPost = true;
      }
    }
  }
</script>