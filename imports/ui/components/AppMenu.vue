<template>
  <div class="app-menu">
    <router-link :to="{ name:'home' }" class="menu-link">Home</router-link>
    <router-link :to="{ name:'tasks' }" class="menu-link">Tasks</router-link>
  </div>
</template>

<style lang="scss">
@import "~imports/ui/colors.scss";
div.app-menu {
  background-color: $primary-color;
  padding: 0 10px;
  height: 50px;
  .menu-link {
    display: inline-block;
    color: #FFF;
    text-decoration: none;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    &:hover {
      color: $primary-color;
      background-color: #FFF;
      border-bottom: 2px solid $primary-color;
    }
  }
}
</style>
