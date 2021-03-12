<template>
  <h2>UserList</h2>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
      <user-item :user="user"></user-item>
    </li> -->
  </ul>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id" >
      <!-- <user-item :user="user"></user-item> -->
      <user-item :user="user"></user-item>
      <!-- <th scope="row">imagen</th>
      <td>id</td>
      <td>name</td>
      <td>@acciones</td> -->
    </tr>
  </tbody>
    </table>
    
</template>
<script lang="ts">
import UserItem from './UserItem.vue';
import { defineComponent } from 'vue';
import User from '@/Models/user';

export default defineComponent({
  name: 'UserList',
  components: { UserItem },
    setup(props) {
    let users = [] as User[];
    users = [
      {
        id: 1,
        name: 'joll',
        age: 50,
        gender: 'male',
        birthDate: '1961/06/15',
        job: 'informatic',
        image: '1.jpg',
      },
      {
        id: 2,
        name: 'john',
        age: 30,
        gender: 'famale',
        birthDate: '2000/06/15',
        job: 'ingeneer',
        image: '3.jpg',
      },
      {
        id: 3,
        name: 'john',
        age: 30,
        gender: 'famale',
        birthDate: '2000/06/15',
        job: 'ingeneer',
        image: '3.jpg',
      },
    ];
    return {users}
  }
});
</script>
<style lang="scss">
li {
  list-style: none;
}
</style>