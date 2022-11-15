<template>
  <div class="menuContainer">
    <p class="introMsg">롯데리아 촵딱 유니버스에<br />여러분을 초대합니다!</p>
    <div class="menuButtons">
      <div class="menuLogoWrapper">
        <Vue3Lottie
          ref="logoMenuRef"
          :loop="false"
          :auto-play="false"
          background-color="transparent"
          :animation-data="logoMenu"
        />
      </div>
      <div class="toggleMenuWrapper">
        <Vue3Lottie
          ref="toggleMenuRef"
          :loop="false"
          :auto-play="false"
          background-color="transparent"
          :animation-data="toggleMenu"
          @click="toggleMenuPlay"
        />
      </div>
    </div>
    <div class="burgerMenus">
      <IntroButton class="svg" />
      <IntroButton class="svg" />
      <IntroButton class="svg" />
      <IntroButton class="svg" />
      <IntroButton class="svg" />
      <IntroButton class="svg" />
    </div>
  </div>
  <div class="blank"></div>
  <div class="blank"></div>
</template>

<script setup>
import { ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";

import IntroButton from "@/assets/menu/0-01-01_intro_button.vue";
import logoMenu from "@/assets/menu/0-02-00_logo_button.json";
import toggleMenu from "@/assets/menu/0-03-00_hamburger_button.json";

const logoMenuRef = ref();
const toggleMenuRef = ref();
const playedCheck = ref(true);

const toggleMenuPlay = () => {
  if (!playedCheck.value) {
    playedCheck.value = true;
    toggleMenuRef.value.setDirection("reverse");
  } else {
    playedCheck.value = false;
    toggleMenuRef.value.setDirection("forward");
  }
  toggleMenuRef.value.play();
};
setTimeout(() => {
  logoMenuRef.value.play();
}, 1000);
</script>

<style lang="scss" scoped>
.menuContainer {
  position: fixed;
  width: 100%;
  height: 100vh;
  .introMsg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-size: 6vw;
    z-index: 2;
  }
  .menuButtons {
    display: flex;
    justify-content: space-between;
    .menuLogoWrapper {
      margin: 2.5vw 0 0 2.5vw;
      width: 2.5%;
      min-width: 48px;
    }

    // 밖으로 빼내기
    .toggleMenuWrapper {
      margin: 2.5vw 2.5vw 0 0;
      width: 2.5%;
      min-width: 48px;
      cursor: pointer;
    }
  }
  .burgerMenus {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin: 0 12.5% 0 12.5%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .svg {
      width: calc(100% / 3);
      @media screen and (max-width: 480px) {
        & {
          width: 50%;
        }
      }
    }
  }
}
</style>
