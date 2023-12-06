<script lang="ts" setup>
import logo from '@/assets/img/home/logo.png'
</script>

<template>
  <div class="logo">
    <img :src="logo" />
    <div class="des">THE ONE AND ONLY YOUR AY BOYFRIEND</div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  z-index: 1;
  color: #fff;

  img {
    width: 100%;
  }

  .des {
    font-size: 16px;
    letter-spacing: 2px;
    text-align: justify;
  }
}
</style>
