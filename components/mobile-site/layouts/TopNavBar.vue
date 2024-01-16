
import { Title } from 'nuxt/dist/head/runtime/components';
<template>
  <div class="top-nav">
    <v-icon size="24">mdi-chevron-left</v-icon>
    <div class="top-nav-title">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

<style scoped lang="scss">
@import '@/assets/color.scss';

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .top-nav-title {
    color: $color-black-custom;
    flex-grow: 1;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>