<template>
  <!-- width="50%"
    height="50%" -->
  <div ref="lottieWrapperRef" class="wrapper">
    <Vue3Lottie
      ref="logoLottieRef"
      :loop="false"
      :auto-play="false"
      background-color="transparent"
      :animation-data="toggleMenu"
      @click="toggleMenuPlay"
    />
    {{ playedCheck }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";

import toggleMenu from "@/assets/menu/0-03-00_hamburger_button.json";

const lottieWrapperRef = ref();
const logoLottieRef = ref();

const playedCheck = ref(true);

const toggleMenuPlay = () => {
  if (!playedCheck.value) {
    playedCheck.value = true;
    logoLottieRef.value.setDirection("reverse");
  } else {
    playedCheck.value = false;
    logoLottieRef.value.setDirection("forward");
  }
  logoLottieRef.value.play();
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background: darkgray;
}
</style>
