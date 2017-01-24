<template>
  <div class="app container">
    <h1>App.vue</h1>
    <div class="columns">
      <add-task class="column col-6"></add-task>
      <tasks-list class="column col-6"></tasks-list>
    </div>
  </div>
</template>

<script>
import AddTask from '/imports/ui/components/tasks/AddTask.vue';
import TasksList from '/imports/ui/components/tasks/TasksList.vue';

export default {
  components: {
    AddTask,
    TasksList
  }
}
</script>
