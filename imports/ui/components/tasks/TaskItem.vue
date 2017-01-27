<template>
  <li class="task-item">
    {{task.text}}
    <button class="btn btn-clear float-right" @click="removeTask(task._id)"></button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  },
  vuex: ({tasks}) => ({
    actions: {
      removeTask: tasks.actions.removeTask
    }
  })
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
