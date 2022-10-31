<template>
  <div class="container">
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as PIXI from "pixi.js";

PIXI.utils.skipHello();

const canvasRef = ref();

const img = new PIXI.Sprite.from("/car.jpg");
const depthMap = new PIXI.Sprite.from("/car-map.jpg");

const draw = (app) => {
  app.stage.addChild(img);
  app.stage.addChild(depthMap);

  const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
  app.stage.filters = [displacementFilter];

  document.addEventListener("pointermove", (e) => {
    displacementFilter.scale.x =
      (canvasRef.value.offsetWidth / 2 - e.clientX) / 20;
    displacementFilter.scale.y =
      (canvasRef.value.offsetHeight / 2 - e.clientY) / 20;
  });

  onResize();
  window.addEventListener("resize", onResize);
};

function onResize() {
  if (canvasRef.value.offsetHeight * 4 < canvasRef.value.offsetWidth * 3) {
    // desktop
    img.width = canvasRef.value.offsetWidth;
    img.height = canvasRef.value.offsetWidth * 0.75;
    img.position.y = (canvasRef.value.offsetHeight - img.height) / 2;
    depthMap.position.y = (canvasRef.value.offsetHeight - img.height) / 2;
  } else {
    // mobile
    img.width = canvasRef.value.offsetHeight * 1.33333;
    img.height = canvasRef.value.offsetHeight;
    depthMap.width = img.width;
    depthMap.height = img.height;
    img.position.x = (canvasRef.value.offsetWidth - img.width) / 2;
    depthMap.position.x = (canvasRef.value.offsetWidth - img.width) / 2;
  }
  depthMap.width = img.width;
  depthMap.height = img.height;
}

onMounted(() => {
  const app = new PIXI.Application({
    width: canvasRef.value.offsetWidth,
    height: canvasRef.value.offsetHeight,
    view: canvasRef.value,
    antialias: true,
    backgroundAlpha: true,
    resizeTo: canvasRef.value,
  });
  draw(app);
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
  }
}
</style>
