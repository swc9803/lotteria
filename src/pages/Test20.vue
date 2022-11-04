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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";

import toggleMenu from "@/assets/menu/0-03-00_hamburger_button.json";

const lottieWrapperRef = ref();
const logoLottieRef = ref();

const reverseCheck = ref(true);

const toggleMenuPlay = () => {
  if (reverseCheck.value === false) {
    reverseCheck.value = true;
    logoLottieRef.value.play();
    if (reverseCheck.value === true) {
      logoLottieRef.value.setDirection("reverse");
    }
  } else {
    reverseCheck.value = false;
    logoLottieRef.value.play();
    if (reverseCheck.value === false) {
      logoLottieRef.value.setDirection("forward");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background: darkgray;
}
</style>
