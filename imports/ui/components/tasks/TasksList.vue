<template>
  <div class="tasks-list">
    <ul v-sortable>
      <task-item v-for="task in tasks" :task="task" />
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex';
import TaskItem from '/imports/ui/components/tasks/TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  computed: {
    ...Vuex.mapGetters(['tasks'])
  }
}
</script>

<style lang="scss">
.tasks-list {
  ul {
    list-style-type: none;
    margin-left: 0;
  }
}
</style>
