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
      @click="play"
    />
    {{ reverseCheck }}
  </div>
  <button @click="reversePlay">reversePlay</button>
</template>

<script setup>
import { ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";

import toggleMenu from "@/assets/menu/0-02-00_logo_button.json";

const lottieWrapperRef = ref();
const logoLottieRef = ref();

const reverseCheck = ref(false);

const play = () => {
  if (reverseCheck.value === false) {
    reverseCheck.value = true;
    lottieWrapperRef.value.style.pointerEvents = "none";
    logoLottieRef.value.play();
    setTimeout(() => {
      logoLottieRef.value.setDirection("reverse");
      lottieWrapperRef.value.style.pointerEvents = "auto";
    }, 1000);
  } else {
    reverseCheck.value = false;
    lottieWrapperRef.value.style.pointerEvents = "none";
    logoLottieRef.value.play();
    setTimeout(() => {
      logoLottieRef.value.setDirection("forward");
      lottieWrapperRef.value.style.pointerEvents = "auto";
    }, 1000);
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
