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


<style lang="sass">
@import ~imports/ui/colors.scss

.task-item
  background-color: $primary-color
  color: #FFF
  padding: 15px
  border-radius: .3rem
  cursor: pointer
  .btn-clear
    color: #FFF
</style>
