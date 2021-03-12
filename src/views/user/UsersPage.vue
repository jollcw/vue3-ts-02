<template>
  <div class="about">
    <h2>Lista de Usuarios</h2>
    <!-- {{ users }} -->
    <user-list></user-list>
  </div>
</template>
<script lang="ts">
import UserList from '@/components/users/UserList.vue';
import {  defineComponent} from 'vue';

export default defineComponent({
  components: { UserList },
  name: 'UsersPage',
  
});
</script>
<style lang="scss">
</style>