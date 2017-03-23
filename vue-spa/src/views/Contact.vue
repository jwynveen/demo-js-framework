<template>
  <div>
    <h1>Contact</h1>

    <pre v-if="isPost"><%= JSON.stringify(formData, null, 2) %></pre>

    <form v-else method="post">
      <div class="form-group">
        <label class="control-label">Name</label>
        <input type="text" name="name" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>