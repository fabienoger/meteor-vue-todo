<template>
  <div class="app container">
    <h1>Todo List <small class="label">MeteorJS + VueJS</small></h1>
    <div class="columns">
      <add-task class="column col-4"></add-task>
      <tasks-list class="column col-8"></tasks-list>
    </div>
  </div>
</template>

<script>
import AddTask from '/imports/ui/components/tasks/AddTask.vue';
import TasksList from '/imports/ui/components/tasks/TasksList.vue';
import {store} from '/imports/vuex/store';

export default {
  store,
  components: {
    AddTask,
    TasksList
  }
}
</script>
