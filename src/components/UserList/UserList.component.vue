<template>
  <div class="filter">
    <div class="search">
      <input type="text" v-model="searchTerm" />
      <button @click="onClickSearch">Search</button>
    </div>
    <div class="pagination">
      <button :disabled="page === 1" @click="prevPage">Prev</button>
      <span class="page">{{ page }}</span>
      <button :disabled="userList.length < 30" @click="nextPage">Next</button>
    </div>
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
    const searchTerm: Ref<string> = ref("lemoncode");
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
<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}
.search {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  & input {
    width: 25vw;
    max-width: 200px;
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
}

.page {
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
