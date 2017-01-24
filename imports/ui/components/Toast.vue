<template>
  <div class="toast" v-bind:class="[type == 'error' ? 'toast-danger' : '', type == 'success' ? 'toast-success' : '' ]">
    <button class="btn btn-clear float-right"></button>
    <i class="icon icon-error_outline"></i>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ['text', 'type']
}
</script>
