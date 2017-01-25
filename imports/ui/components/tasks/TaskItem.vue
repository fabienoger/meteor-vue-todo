<template>
  <li class="task-item">
    {{task.text}}
    <button class="btn btn-clear float-right" v-on:click="remove"></button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    remove(e) {
      Meteor.call("removeTask", this.task._id, (err, result) => {
        if (err) {
          this.$dispatch('removeTask', this, 'error');
          return console.error("removeTask ", err);
        }
        this.$dispatch('removeTask', this, 'success');
      });
    }
  }
}
</script>
