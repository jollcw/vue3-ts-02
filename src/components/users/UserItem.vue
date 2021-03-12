<template>
  <!-- 
  <th scope="row">imagen</th>
  <td>id</td>
  <td>name</td>
  <td>@acciones</td>
-->
  <th scope="row"><img class="img-item-list" :src="`users/${user.image}`" /></th>
  <td>{{ user.id }}</td>
  <td>{{ user.name }}</td>
  <td>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <router-link class="btn btn-success" :to="`/user/${user.id}`">Details</router-link>
      <router-link class="btn btn-warning" :to="`/user/edit/${user.id}`">Edit</router-link>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </td>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import User from '@/Models/user';

export default defineComponent({
  name: 'UserItem',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>
<style lang="scss">
.img-item-list {
  width: 60px;
}
</style>
