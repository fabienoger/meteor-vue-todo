<template>
  <div class="tasks-list">
    <toast v-if="error" :text="error" type="error"></toast>
    <toast v-if="success" :text="success" type="success"></toast>
    <div v-if="!$subReady.tasks" class="loading"></div>
    <ul v-sortable>
      <task-item v-for="task in tasks" :task="task" />
    </ul>
  </div>
</template>

<script>
import TaskItem from '/imports/ui/components/tasks/TaskItem.vue';
import Toast from '/imports/ui/components/Toast.vue';
import Tasks from '/imports/api/tasks/collection';
import Sortable from 'vue-sortable'

Vue.use(Sortable);
export default {
  data() {
    return {
      error: '',
      success: ''
    }
  },
  created() {
    // Listen for closing Toast
    this.$on('closeToast', (toast) => {
      this[toast.type] = false;
    })
    // Listen for removing Task then display a Toast
    this.$on('removeTask', (taskItem, type) => {
      let text = 'Oups ! Something went wrong !';
      if (type == 'success') {
        text = 'The task has been successfully removed !';
      }
      this[type] = text;
    })
  },
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
    TaskItem,
    Toast
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
