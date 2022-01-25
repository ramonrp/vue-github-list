<template>
  <div>
    <div><img :src="userDetail.avatar_url" /></div>
    <p>Company: {{ userDetail.company }}</p>
    <p>Location: {{ userDetail.location }}</p>
    <p v-if="userDetail.bio">Bio: {{ userDetail.bio }}</p>
    <button @click="goBack">Go to Home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { UserDetail } from "@/types/index";
import { githubService } from "@/services/github";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const { id } = route.params;
    const router = useRouter();
    const userDetail = ref<UserDetail | undefined>();
    userDetail.value = await githubService.getUserDetail(String(id));
    console.log(userDetail.value.bio);
    const goBack = () => {
      router.push("/");
    };
    return { userDetail, goBack };
  },
});
</script>
<style scoped></style>
