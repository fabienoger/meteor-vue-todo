<template>
  <form @submit.prevent="handleCreateTask" class="add-task">
    <toast v-if="error" :text="error" type="error"></toast>
    <toast v-if="success" :text="success" type="success"></toast>
    <div class="form-group">
      <label class="form-label" for="task-text">Add task</label>
      <input class="form-input" type="text" id="task-text" placeholder="Text" v-model="taskText"  />
    </div>
    <button class="btn btn-primary" type="submit" v-bind:class="{ loading: loading }" >Add task</button>
  </form>
</template>

<script>
import Toast from '/imports/ui/components/Toast.vue';

export default {
  data: () => ({
    loading: false,
    error: '',
    success: '',
    taskText: ''
  }),
  created() {
    // Listen for closing Toast
    this.$on('closeToast', (toast) => {
      this[toast.type] = false;
    })
  },
  vuex: ({tasks}) => ({
    actions: {
      createTask: tasks.actions.createTask
    }
  }),
  methods: {
    handleCreateTask() {
      this.loading = true;
      this.createTask(this.taskText.trim()).then(() => {
        this.loading = false;
        this.success = 'The task has been successfully added !';
        this.taskText = '';
      }).catch((e) => {
        this.loading = false;
        this.error = 'The task cannot be empty';
        return console.error("createTask", e);
      });
    }
  },
  components: {
    Toast
  }
}
</script>
