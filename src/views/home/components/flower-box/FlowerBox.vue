<script lang="ts" setup>
import RightFlower from '@/assets/img/home/right-flower.png'
import MiddleFlower from '@/assets/img/home/middle-flower.png'
import { defineProps, withDefaults, toRefs, computed } from 'vue'

const props = withDefaults(defineProps<{
  type: 'right' | 'middle'
}>(), {
  type: 'middle'
})

const { type } = toRefs(props)

const flowerUrl = computed(() => {
  switch (type.value) {
    case 'right':
      return RightFlower

    case 'middle':
      return MiddleFlower
    
    default:
      return ''
  }
})
</script>

<template>
  <img class="flower" :src="flowerUrl" />
</template>

<style>
.flower {
  width: 100px;
}
</style>