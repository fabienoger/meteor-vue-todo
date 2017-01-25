<template>
  <div>
    <div class="toast" v-bind:class="[type == 'error' ? 'toast-danger' : '', type == 'success' ? 'toast-success' : '' ]">
      <button class="btn btn-clear float-right" v-on:click="close"></button>
      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['text', 'type'],
  methods: {
    close(e) {
      e.preventDefault();
      // Emit event for closing Toast
      this.$dispatch('closeToast', this);
    }
  }
}
</script>

<style lang="scss">
.toast {
  margin-bottom: 15px;
}
</style>
