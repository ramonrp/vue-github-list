<template>
  <div class="wrapper">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive include="Home">
          <component :is="Component" :key="$route.fullPath"></component>
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header/Header.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Header },
});
</script>
<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  margin-top: 32px;
  flex: 1;
  max-width: min(100%, calc(1200px + 32px * 2));
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
