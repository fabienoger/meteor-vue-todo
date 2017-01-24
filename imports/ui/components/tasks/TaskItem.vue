<template>
  <li class="task-item">
    {{task.text}}
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>
