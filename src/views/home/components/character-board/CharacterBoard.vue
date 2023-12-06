<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from 'vue'

const state = reactive({
  width: 880
})

function handleResize() {
  const w = window.document.body.clientWidth
  const h = window.document.body.clientHeight

  const min = Math.min(w, h)

  if (h > w) {
    state.width = h / 1.8

    return
  }

  state.width = min / 1.65
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="character" :style="{ width: `${state.width}px` }"></div>
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
