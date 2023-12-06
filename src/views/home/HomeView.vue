<script setup lang="ts">
import HomeHeader from './components/home-header/HomeHeader.vue'
import HomeContainer from './components/home-container/HomeContainer.vue'
import CharacterBoard from './components/character-board/CharacterBoard.vue'
import HomeFooter from './components/home-footer/HomeFooter.vue'
import ContactUs from './components/contact-us/ContactUs.vue'
import Logo from './components/Logo/Logo.vue'
</script>

<template>
  <div class="home">
    <HomeHeader class="header" />
    <HomeContainer class="container">
      <CharacterBoard class="boy" />
      <ContactUs class="contact" />
      <Logo class="logo" />
    </HomeContainer>
    <HomeFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .header {
    flex-shrink: 0;
    flex-grow: 0;
    z-index: 2;

    @media screen and (max-width: 700px) {
      :deep(.title) {
        font-size: 12px;
      }

      :deep(.links) {
        font-size: 10px;
      }
    }
  }

  .container {
    flex: 1;

    .boy {
      position: absolute;
      left: 10%;
      bottom: 0;
      z-index: 1;

      @media screen and (max-height: 1000px) and (min-width: 1024px) {
        bottom: unset;
        top: 0;
      }

      @media screen and (max-width: 1024px) {
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
      }

      @media screen and (max-width: 600px) {
        height: 80%;
        width: 600px;
      }
    }

    .contact {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .logo {
      position: absolute;
      right: 15%;
      top: 50%;
      transform: translateY(-50%);
      width: 400px;

      @media screen and (max-width: 600px) {
        top: 20px;
        right: 10%;
        width: 50%;
        transform: none;

        :deep(.des) {
          font-size: 1.75vw;
        }
      }
    }
  }

  .footer {
    flex-shrink: 0;
    flex-grow: 0;
    z-index: 2;

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
}
</style>
