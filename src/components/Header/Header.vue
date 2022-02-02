<template>
  <header>
    <h1>VUE GITHUB</h1>
    <router-link to="/">Home</router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss" scoped>
header {
  min-height: 100px;
  background-color: #e2e27c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: grey;
}
a {
  font-size: 1.5rem;
  color: grey;
  text-decoration: none;
  transition: transform 250ms;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
