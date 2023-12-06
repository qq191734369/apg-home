<script lang="ts" setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const state = reactive<{
  showMenu: boolean
}>({
  showMenu: false
})

function toggle() {
  state.showMenu = !state.showMenu
}

function handleResize() {
  const w = window.document.body.clientWidth

  if (w <= 600) {
    state.showMenu = false
  } else {
    state.showMenu = true
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="header">
    <div class="title">AI Boy Friend(HK) Limited</div>

    <div class="links">
      <div class="more" @click="toggle">···</div>
      <div class="item-container" v-if="state.showMenu">
        <div class="link-item"><RouterLink to="/team">TEAMS AND CONDITIONS</RouterLink></div>
        <span class="split">|</span>
        <div class="link-item"><RouterLink to="/privacy">PRIVACY POLICY</RouterLink></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  height: 48px;
  align-items: center;
  background-color: #000;
  color: #fff;

  .title {
    flex: 1;
    padding: 0 20px;
    font-size: 20px;
    font-weight: 700;
  }

  .links {
    position: relative;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0 20px;
    font-size: 14px;

    a {
      color: #fff;
      text-decoration: none;
    }

    .more {
      display: none;
      cursor: pointer;
    }

    .item-container {
      display: flex;
    }

    .link-item {
      display: inline-block;
      cursor: pointer;

      &:hover {
        color: #8e8e8e;
      }

      &:active {
        opacity: 0.8;
      }
    }

    .split {
      margin: 0 12px;
    }

    @media screen and (max-width: 600px) {
      .more {
        display: block;
      }

      .split {
        display: none;
      }

      .link-item {
        display: block;
        white-space: nowrap;
        padding: 10px;

        & ~ .link-item {
          border-top: 1px solid #fff;
        }
      }

      .item-container {
        position: absolute;
        display: block;
        top: 30px;
        right: 0;
        z-index: 3;
        background-color: #000;
        padding: 0 10px;
      }
    }
  }
}
</style>
