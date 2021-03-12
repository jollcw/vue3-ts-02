<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <h3>UserDetail</h3>
      img - {{ img }}<br />
      {{ user }}
      <div class="card">
        <img :src="`${img}`" class="card-img-top" :alt="user.name" />
        <img :src="`users/${user.image}`" class="card-img-top" :alt="user.name" />
        <!-- <img :src="require(`@/assets/img/users/${user.image}`)" class="card-img-top" :alt="user.name" /> -->
        <!-- <img :src="require(`./../public/users/${user.image}`)" class="card-img-top" :alt="user.name" /> -->
        <!-- <img :src="`./../public/users/${user.image}`" class="card-img-top" :alt="user.name" /> -->
        <!-- <img :src="`./../public/users/user.image`" class="card-img-top" :alt="user.name" /> -->
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text"><span class="fw-bolder">id</span> {{ user.id }}</p>
          <p class="card-text"><span class="fw-bolder">job</span> {{ user.job }}</p>
          <p class="card-text"><span class="fw-bolder">gender</span> {{ user.gender }}</p>
          <p class="card-text"><span class="fw-bolder">age</span> {{ user.age }}</p>
          <p class="card-text"><span class="fw-bolder">birthDate</span> {{ user.birthDate }}</p>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <!-- <router-link class="btn btn-success" :to="`/user/${user.id}`">Details</router-link> -->
            <router-link class="btn btn-warning" :to="`/user/edit/${user.id}`">Edit</router-link>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, useContext, onMounted, ref, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
// import seStore from 'vuex'
import User from '@/Models/user';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'UserDetail',
  props: {
    // user: {
    //   type: Object as PropType<User>
    // },
  },
  setup(props) {
    const route = useRoute();
    const store = useStore();
    let user = ref({} as User);
    // let user = reactive({} as User);
    const img = ref('' as string);
    // const user User = ref({})
    // const birthD = computed(() => new Date(props.user.birthDate));
    onMounted(async () => {
      console.log('onMounted UserDetail');
      const id = route.params.id;
      console.log(id);
      // store.dispatch('filterUserId', id);
      // user = store.state.user;
      user.value = {
        id: 1,
        name: 'joll',
        age: 50,
        gender: 'male',
        birthDate: '1961/06/15',
        job: 'informatic',
        image: '1.jpg',
      }
      img.value = <string>require(`@/assets/img/users/${user.value.image}`);
      console.log(user)
      return  toRefs(user)
    });

      console.log(user)
    return { user, img };
  },
});
</script>
<style lang="scss">
.card-img-top{
  width: 25%;
}
</style>
