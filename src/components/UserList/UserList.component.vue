<template>
  <input type="text" v-model="searchTerm" />
  <button @click="onClickSearch">Search</button>
  <div>
    <button :disabled="page === 1" @click="prevPage">Prev</button>
    {{ page }}
    <button :disabled="userList.length < 30" @click="nextPage">Next</button>
  </div>
  <ul>
    <UserRow v-for="user of userList" :key="user.id" :user="user" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { User } from "@/types/index";
import { githubService } from "@/services/github";
import UserRow from "./userRow.component.vue";
export default defineComponent({
  components: { UserRow },
  async setup() {
    const searchTerm: Ref<string> = ref("microsoft");
    const userList: Ref<User[]> = ref([]);
    const page = ref<number>(1);
    userList.value = await githubService.getUsersByCompany(
      searchTerm.value,
      page.value
    );

    const searchUsers = async () => {
      userList.value = await githubService.getUsersByCompany(
        searchTerm.value,
        page.value
      );
    };

    const onClickSearch = async () => {
      page.value = 1;
      await searchUsers();
    };

    const nextPage = async () => {
      if (userList.value.length < 30) return;
      page.value += 1;
      await searchUsers();
    };
    const prevPage = async () => {
      if (page.value === 1) return;
      page.value -= 1;
      await searchUsers();
    };

    return { userList, searchTerm, onClickSearch, page, nextPage, prevPage };
  },
});
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
