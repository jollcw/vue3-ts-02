<template>
  <base-layout>
    <router-view />
  </base-layout>
</template>
<script>
import BaseLayout from './components/base/BaseLayout';
export default {
  components: { BaseLayout },
};
</script>
<style lang="scss">
@import './scss/main.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
