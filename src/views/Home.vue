<template>
  <div class="home">
    <div v-if="error">Something went wrong:{{ error }}</div>
    <Suspense>
      <UserList v-if="!error" />
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref, Ref } from "vue";
import UserList from "@/components/UserList/UserList.component.vue";

export default defineComponent({
  name: "Home",
  components: { UserList },
  setup() {
    const error: Ref<unknown> = ref();
    onErrorCaptured((errorCaptured) => {
      error.value = errorCaptured;
    });
    return { error };
  },
});
</script>
