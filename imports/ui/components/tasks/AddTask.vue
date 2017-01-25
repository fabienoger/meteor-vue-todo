<template>
  <form class="add-task">
    <toast v-if="error" :text="error" type="error"></toast>
    <toast v-if="success" :text="success" type="success"></toast>
    <div class="form-group">
      <label class="form-label" for="task-text">Add task</label>
      <input class="form-input" type="text" id="task-text" placeholder="Text" v-model="taskText"/>
    </div>
    <button class="btn btn-primary" v-bind:class="{ loading: loading }" v-on:click="addTask">Add task</button>
  </form>
</template>

<script>
import Toast from '/imports/ui/components/Toast.vue';

export default {
  data() {
    return {
      loading: false,
      error: '',
      success: '',
      taskText: ''
    }
  },
  created() {
    // Listen for closing Toast
    this.$on('closeToast', (toast) => {
      this[toast.type] = false;
    })
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      this.loading = true;
      const task = {
        text: this.taskText
      };

      Meteor.call("addTask", task, (err, taskId) => {
        this.loading = false;
        if (err) {
          this.error = 'The task cannot be empty';
          return console.error("addTask", err);
        }
        this.success = 'The task has been successfully added !';
        this.taskText = '';
      });
    }
  },
  components: {
    Toast
  }
}
</script>
