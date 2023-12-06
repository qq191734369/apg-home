<script lang="ts" setup></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@mixin bg-element {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@mixin bg-img($img) {
  background-image: url($img);
  background-size: cover;
  background-position: 0% 50%;
  background-repeat: no-repeat;
}

.container {
  position: relative;
  flex: 1;

  &::before {
    @include bg-element();
    @include bg-img('@/assets/img/home/bottom-img.png');
  }

  &::after {
    @include bg-element();
    @include bg-img('@/assets/img/home/bg.png');
    left: 10%;
  }
}
</style>
