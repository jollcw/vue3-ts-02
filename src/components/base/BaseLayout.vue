<template>
  <div class="container">
    <base-header></base-header>
    BaseLayout container
    <slot></slot>
    <base-footer></base-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BaseFooter from './BaseFooter.vue';
import BaseHeader from './BaseHeader.vue';

export default defineComponent({
  components: { BaseHeader, BaseFooter },
});
</script>
<style lang="scss">
</style>