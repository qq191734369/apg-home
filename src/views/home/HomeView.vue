<script setup lang="ts">
import HomeHeader from './components/home-header/HomeHeader.vue'
import HomeContainer from './components/home-container/HomeContainer.vue'
import CharacterBoard from './components/character-board/CharacterBoard.vue'
import HomeFooter from './components/home-footer/HomeFooter.vue'
import ContactUs from './components/contact-us/ContactUs.vue'
import Logo from './components/Logo/Logo.vue'
import FlowerBox from './components/flower-box/FlowerBox.vue'
</script>

<template>
  <div class="home">
    <HomeHeader class="header" />
    <HomeContainer class="container">
      <CharacterBoard class="boy" />
      <ContactUs class="contact" />
      <Logo class="logo" />
      <FlowerBox class="flower flower-right" type="right" />
      <FlowerBox class="flower flower-middle" type="middle" />
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

    .flower {
      position: absolute;
      z-index: 2;
      bottom: 0;

      &.flower-right {
        width: 250px;
        left: 5%;
        transform: rotateY(180deg);
      }

      &.flower-middle {
        width: 400px;
        left: 45%;
      }
    }

    .boy {
      position: absolute;
      left: 10%;
      bottom: 0;
      z-index: 1;

      @media screen and (max-height: 1000px) and (min-width: 1024px) {
        bottom: unset;
        top: 0;
      }

      @media screen and (max-width: 900px) {
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
      }

      @media screen and (max-width: 600px) {
        height: 80%;
        width: 600px;

        @media screen and (min-height: 1000px) {
          height: 70%;
        }

        @media screen and (min-height: 1200px) {
          height: 70%;
          width: 130%;
        }
      }
    }

    .contact {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 4;
    }

    .logo {
      position: absolute;
      right: 15%;
      top: 50%;
      z-index: 4;
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

      @media screen and (max-width: 1000px) and (min-height: 1200px) {
        top: 20px;
        right: 10%;
        width: 50%;
        transform: none;
      }

      @media screen and (max-width: 1024px) and (max-height: 600px) {
        top: 20px;
        right: 10%;
        width: 200px;
        transform: none;
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
