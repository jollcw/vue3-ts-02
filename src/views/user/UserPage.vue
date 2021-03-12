<template>
  <h2>UserPage</h2>
  <UserDetail></UserDetail>
</template>
<script>
import { defineComponent } from 'vue';
import UserDetail from '@/components/users/UserDetail.vue';

export default defineComponent({
  name: 'UserPage',
  components: { UserDetail },
});
</script>
<style lang="scss">
</style>
