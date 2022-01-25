<template>
  <div class="home">
    <Suspense>
      <UserDetail />
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDetail from "@/components/UserDetail/UserDetail.vue";

export default defineComponent({
  name: "Detail",
  components: { UserDetail },
});
</script>
