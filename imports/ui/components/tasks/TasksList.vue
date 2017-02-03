<template>
  <div class="tasks-list">
    <ul v-sortable>
      <task-item v-for="task in tasks" :task="task" />
      <div v-show="tasks.length < 1" class="loading"></div>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex';
import TaskItem from '/imports/ui/components/tasks/TaskItem.vue';
import store from '/imports/vuex/store';

export default {
  store,
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
