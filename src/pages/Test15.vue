<template>
  <div class="container">
    <canvas ref="canvasRef" />
  </div>
  <p ref="dd">hi</p>
  <div class="container">
    <canvas ref="canvasRef" />
  </div>
  <div class="container">
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const canvasRef = ref();
const dd = ref();

const plus = () => {
  gsap.to(dd.value, {
    fontSize: "6em",
    duration: 2,
  });
};
const minus = () => {
  gsap.to(dd.value, {
    fontSize: "1em",
    duration: 10,
  });
};

onMounted(() => {
  const options = {};
  // options에 따라 인스턴스 생성
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        plus();
      } else {
        minus();
      }
      //   관찰중지
      //   observer.unobserve(entry.target);
    });
  }, options);
  // 타겟 요소 관찰 시작
  io.observe(dd.value);
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  canvas {
    width: 100%;
    height: 100%;
    background: black;
  }
}
p {
  margin: 0;
}
</style>
