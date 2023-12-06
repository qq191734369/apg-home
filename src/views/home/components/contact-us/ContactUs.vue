<script lang="ts" setup>
import EmialLink from '@/components/email-link/EmailLink.vue'
</script>

<template>
  <div class="contact-us">
    <EmialLink>CONTACT US: support@projecthim.net</EmialLink>
  </div>
</template>

<style lang="scss" scoped>
.contact-us {
  position: relative;
  color: #fff;
  font-size: 16px;
  padding: 12px;
  z-index: 1;

  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
