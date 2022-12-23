<template>
  <div class="container">
    <Vue3Lottie
      ref="lottieRef"
      width="50%"
      height="50%"
      :loop="false"
      :auto-play="false"
      background-color="transparent"
      :animation-data="coffee"
      @on-complete="onComplete"
    />
    <!-- :play-on-hover="true" -->
    <button @click="play">play</button>
    <button @click="pause">pause</button>
    <button @click="stop">stop</button>
    <button @click="speed(1)">speed1</button>
    <button @click="speed(3)">speed3</button>
    <button @click="reverse">reverse</button>
    <button @click="forward">forward</button>
    <input type="checkbox" @change="check" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import coffee from "@/assets/dsa.json";

const lottieRef = ref();
const endCheck = ref(false);
const checkValue = ref(false);

const pause = () => {
  //   if (!endCheck.value) {
  lottieRef.value.pause();
  //     endCheck.value = true;
  //   }
};
const play = () => {
  lottieRef.value.play();
};
const stop = () => {
  lottieRef.value.stop();
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
    if (!checkValue.value) {
      forward();
    } else {
      reverse();
    }
    // console.log("end");
  }
};
const check = () => {
  if (!checkValue.value) {
    checkValue.value = true;
    forward();
  } else {
    checkValue.value = false;
    reverse();
  }
  play();
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: rgb(229, 229, 229);
}
</style>
