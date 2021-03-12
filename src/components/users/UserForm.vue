<template>
  <h2>Usuario Form</h2>
  {{ user }}
  <div class="container">
    <div class="row text-start">
      <form v-on:submit.prevent="submitForm()" action="">
        <!-- <input type="hidden" name="customfield" class="form-control" :value="user.id" /> -->
        <div class="mb-3">
          <label for="name" class="form-label">User name</label>
          <input type="text" v-model="user.name" class="form-control" id="name" placeholder="Enter name." />
          {{ user.name }}
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">User age</label>
          <input type="text" v-model.number="user.age" class="form-control" id="age" placeholder="Enter ege of user" />
        </div>
        <div class="mb-3">
          <label for="birthDate" class="form-label">User birthDate</label>
          <input
            type="text"
            v-model="user.birthDate"
            class="form-control"
            id="birthDate"
            placeholder="Enter user's birthDate yyyy/mm/dd"
          />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">User image</label>
          <input type="text" v-model="user.image" class="form-control" id="image" placeholder="Enter user's image" />
        </div>
        <div class="mb-3">
          <label for="job" class="form-label">User job</label>
          <input type="text" v-model="user.job" class="form-control" id="job" placeholder="Enter user's job" />
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">User gender</label>
          <div class="form-check">
            <input type="radio" id="male" class="form-check-input" value="male" v-model="user.gender" name="gender" />
            <label class="form-check-label" for="male"> Male </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              value="famale"
              v-model="user.gender"
              type="radio"
              name="gender"
              id="famale"
            />
            <label class="form-check-label" for="famale"> Famale </label>
          </div>
        </div>
        <button type="submit">Save</button>
        <!-- <button @click="submitForm()" type="submit">Save</button> -->
        <hr />
      </form>
    </div>
  </div>
</template>
<script lang="ts">
// ! Comprobar que pasa con la importacion !!!!!!!!!!!!!
import User from '@/Models/user';
// import { UserAdd } from '@/Models/userAdd';

import { useStore } from 'vuex';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// todo install datepicker https://morioh.com/p/bbc7645512e2
// todo install datepicker https://programacion.net/articulo/bootstrap_datetimepicker-_o_como_anadir_un_calendario_a_un_campo_input_1796
export default defineComponent({
  name: 'UserForm',
  setup() {
    const store = useStore();
    const route = useRoute();
    let user = ref({} as User);
    const id = route.params.id;
    console.log('id', id);

    if (id == undefined) {
      user.value = {
        id: undefined,
        name: '',
        age: 0,
        gender: '',
        birthDate: '',
        job: '',
        image: '',
      };
    } else {
      user.value = {
        id: 1,
        name: 'joll',
        age: 50,
        gender: 'male',
        birthDate: '1961/06/15',
        job: 'informatic',
        image: '1.jpg',
      };
    }

    // const submitForm = () => {
    //   console.log('id', id);
    //   console.log(user.value);
    //   console.log(user.value.name);
    //   if (id == undefined) {
    //     addUser();
    //   } else {
    //     // editUser();
    //   }
    // };

    // const editUser = () => {
    //   const url: string = `http://localhost:3001/users/${id}`;
    //   let userUpdated = {} as User;

    //   userUpdated = {
    //     id: user.value.id,
    //     name: user.value.name,
    //     age: user.value.age,
    //     gender: user.value.gender,
    //     birthDate: user.value.birthDate,
    //     job: user.value.job,
    //     image: user.value.image,
    //   };
    //   console.log(userUpdated);

    //   const payload = {
    //     url: url,
    //     userUpdated: userUpdated,
    //   };
    //   console.log('payload userForm', payload);
    //   store.dispatch('updateUser', payload);
    // };

    // const addUser = () => {
    //   const url: string = `http://localhost:3001/users`;
    //   // let userAdd = {} as UserAdd;
    //   let userAdd = {} as User;

    //   userAdd = {
    //     id: undefined,
    //     name: user.value.name,
    //     age: user.value.age,
    //     gender: user.value.gender,
    //     birthDate: user.value.birthDate,
    //     job: user.value.job,
    //     image: user.value.image,
    //   };
    //   console.log(userAdd);

    //   const payload = {
    //     url: url,
    //     userAdd: userAdd,
    //   };
    //   console.log('payload userForm', payload);
    //   store.dispatch('insertUser', payload);
    // };

    // onMounted(() => {
    //   console.log('userForm Mounted');
    //   if (id) {
    //     store.dispatch('filterUserId', id);
    //     user.value = store.state.user;
    //     // store.dispatch('filterUserId', id);
    //     // user.value = store.state.user;
    //   }
    // });

    // return { user, submitForm };
    return { user };
  },
});
</script>
<style lang="scss">
.form-label {
  text-align: left;
}
</style>
