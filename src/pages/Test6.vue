<template>
  <div
    ref="containerRef"
    class="container"
    @mousemove="move"
    @touchmove.passive="move"
  >
    <div ref="lightRef" class="light" />
    <div ref="hideRef" class="hide" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const containerRef = ref();
const lightRef = ref();
const hideRef = ref();

const pointer = reactive({
  x: 0,
  y: 0,
});

const move = (e) => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  lightRef.value.style.top = `${pointer.y}px`;
  lightRef.value.style.left = `${pointer.x}px`;
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: black;
  overflow: hidden;
  .light {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: yellow;
    transform: translate(-50%, -50%);
  }
  .hide {
    width: 100px;
    height: 100px;
    background: white;
  }
}
</style>
