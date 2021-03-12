<template>
  <h2>User Form</h2>
  <user-form></user-form>
</template>
<script>
import UserForm from '../../components/users/UserForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { UserForm },
  name: 'UserAddPage',
});
</script>
<style lang="scss"></style>
