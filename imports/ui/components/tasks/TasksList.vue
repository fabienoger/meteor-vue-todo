<template>
  <div class="tasks-list">
    <ul v-sortable>
      <task-item v-for="task in tasks" :task="task" />
    </ul>
  </div>
</template>

<script>
import TaskItem from '/imports/ui/components/tasks/TaskItem.vue';
import Sortable from 'vue-sortable';

Vue.use(Sortable);
export default {
  vuex: ({tasks}) => ({
    trackers: {
      tasks: tasks.trackers.getTasks
    }
  }),
  components: {
    TaskItem
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
