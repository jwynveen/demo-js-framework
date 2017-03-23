<template>
  <div>
    <h1>ToDo</h1>

    <div class="row">
      <ul class="list-group col-lg-6">
        <li v-for="(item, index) of items" class="list-group-item" :class="{'text-strikethrough': item.checked}">
          <input v-model="item.checked" type="checkbox"/>
          <span v-if="item.isEditMode">
            <input type="text" v-model="item.text" v-on:keyup.enter="toggleEditMode(item)" v-focus>
          </span>
          <span v-show="!item.isEditMode" v-on:click="toggleEditMode(item)">
            {{item.text}}
          </span>

          <div class="pull-right" v-on:click="deleteItem(index)">
            <i class="fa fa-trash text-danger"></i>
          </div>
        </li>
      </ul>
    </div>

    <button type="button" class="btn btn-success" @click="addItem">Add</button>
  </div>
</template>

<script>
  export default {
    name: 'todo-view',
    data() {
      return {
        items: [{
          text: 'Added server-side',
          checked: false,
          isEditMode: false,
        }, {
          text: 'Delete me',
          checked: true,
          isEditMode: false
        }],
      };
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
  }
</script>

<style>
  .text-strikethrough {
    text-decoration: line-through;
  }
</style>