<template>
  <div class="container">
    <Vue3Lottie
      ref="lottieRef"
      width="50%"
      height="50%"
      :loop="false"
      :auto-play="false"
      :play-on-hover="true"
      background-color="black"
      :animation-data="coffee"
      @on-complete="onComplete"
    />
  </div>
  <button @click="play">play</button>
  <button @click="pause">pause</button>
  <button @click="speed(1)">speed1</button>
  <button @click="speed(3)">speed3</button>
  <button @click="reverse">reverse</button>
  <button @click="forward">forward</button>
</template>

<script setup>
import { ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import coffee from "@/assets/lottie.json";

const lottieRef = ref();
const endCheck = ref(false);

const pause = () => {
  if (!endCheck.value) {
    lottieRef.value.pause();
    endCheck.value = true;
  }
};
const play = () => {
  lottieRef.value.play();
};
const speed = (speed) => {
  lottieRef.value.setSpeed(speed);
};
const reverse = () => {
  lottieRef.value.setDirection("reverse");
};
const forward = () => {
  lottieRef.value.setDirection("forward");
};
const onComplete = () => {
  if (!endCheck.value) {
    endCheck.value = true;
    console.log("end");
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  //   height: 100vh;
}
</style>
