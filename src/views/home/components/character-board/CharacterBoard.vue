<script lang="ts" setup></script>

<template>
  <div class="character"></div>
</template>

<style lang="scss" scoped>
.character {
  position: relative;
  width: 880px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 115%;
    background-image: url('@/assets/img/home/character.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
