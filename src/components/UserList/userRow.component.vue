<template>
  <li>
    <router-link :to="`detail/${user.login}`">
      <div class="flex">
        <div class="img-wrapper">
          <img :src="user.avatar_url" />
        </div>
        <div>
          <p class="username">{{ user.login }}</p>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/types/index";
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
img {
  display: block;
  max-width: 100%;
}

li {
  margin-bottom: 32px;
}

.img-wrapper {
  width: 100px;
  min-width: 100px;
}
.flex {
  display: flex;
  gap: 32px;
  align-items: center;
}
.username {
  color: black;
  font-size: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
}
a {
  text-decoration: none;
}
</style>
