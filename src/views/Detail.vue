<template>
  <div>
    <div v-if="error">Something went wrong:{{ error }}</div>
    <Suspense>
      <UserDetail />
      <template #fallback v-if="!error">Loading...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref, Ref } from "vue";
import UserDetail from "@/components/UserDetail/UserDetail.vue";

export default defineComponent({
  name: "Detail",
  components: { UserDetail },
  setup() {
    const error: Ref<unknown> = ref();
    onErrorCaptured((errorCaptured) => {
      error.value = errorCaptured;
    });
    return { error };
  },
});
</script>
