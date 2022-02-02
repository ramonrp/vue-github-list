<template>
  <div class="wrapper">
    <div v-if="userDetail?.avatar_url" class="img-wrapper">
      <img :src="userDetail.avatar_url" />
    </div>
    <p v-if="userDetail?.name">Name:{{ userDetail.name }}</p>
    <p v-if="userDetail?.company">Company: {{ userDetail.company }}</p>
    <p v-if="userDetail?.location">Location: {{ userDetail.location }}</p>
    <p v-if="userDetail?.bio">Bio: {{ userDetail.bio }}</p>
    <button @click="goBack">Go to Home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
    const goBack = () => {
      router.push("/");
    };
    return { userDetail, goBack };
  },
});
</script>
<style scoped>
.wrapper {
  text-align: center;
  width: 375px;
}

img {
  display: block;
  width: 100%;
}
</style>
