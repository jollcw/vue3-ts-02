<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
              <!-- <a class="nav-link" rou>Features</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
              <!-- <a class="nav-link" href="#">Pricing</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user/1">User</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/useradd">UsersAdd</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script  lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseHeader',
});
</script>
<style lang="scss">
</style>