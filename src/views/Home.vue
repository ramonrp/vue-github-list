<template>
  <div class="home">
    <Suspense>
      <UserList />
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "@/components/UserList/UserList.component.vue";

export default defineComponent({
  name: "Home",
  components: { UserList },
});
</script>
