<template>
  <li class="task-item">
    {{task.text}}
    <button class="btn btn-clear float-right" @click="removeTask(task._id)"></button>
  </li>
</template>

<script>
import Vuex from 'vuex';

export default {
  props: {
    task: Object
  },
  methods: {
    ...Vuex.mapActions([
      'removeTask'
    ])
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
