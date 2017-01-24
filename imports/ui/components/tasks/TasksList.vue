<template>
  <div class="tasks-list">
    <h2>TasksList</h2>
    <div v-if="!$subReady.tasks" class="loading"></div>
    <ul>
      <task-item v-for="task in tasks" :task="task" />
    </ul>
  </div>
</template>

<script>
import TaskItem from '/imports/ui/components/tasks/TaskItem.vue';
import Tasks from '/imports/api/tasks/collection';

export default {
  meteor: {
    subscribe: {
      'tasks': []
    },
    tasks() {
      return Tasks.find({}).fetch();
    }
  },
  ready() {
    // Subscribes to the 'tasks' publication
    this.$subscribe('tasks');
  },
  components: {
    TaskItem
  }
}
</script>
