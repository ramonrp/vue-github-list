<template>
  <header>Header</header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.fullPath"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts"></script>
<style lang="scss"></style>
