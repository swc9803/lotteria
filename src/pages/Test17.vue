<template>
  <div class="container">
    <canvas ref="canvasRef" @mousemove="mapMove" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as PIXI from "pixi.js";

PIXI.utils.skipHello();

let displacementFilter;
const canvasRef = ref();

// const img = new PIXI.Sprite.from("/train.jpg");
// const depthMap = new PIXI.Sprite.from("/train-map.png");
const img = PIXI.Sprite.from("https://i.imgur.com/x8Lhx01.jpg");
const depthMap = PIXI.Sprite.from("https://i.imgur.com/7JE0ABT.jpg");

const draw = (app) => {
  app.stage.addChild(img);
  app.stage.addChild(depthMap);

  displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
  app.stage.filters = [displacementFilter];

  onResize();
  window.addEventListener("resize", onResize);
};

const mapMove = (e) => {
  displacementFilter.scale.x =
    (canvasRef.value.offsetWidth / 2 - e.clientX) / 25;
  displacementFilter.scale.y =
    (canvasRef.value.offsetHeight / 2 - e.clientY) / 25;
};

function onResize() {
  if (canvasRef.value.offsetHeight * 4 < canvasRef.value.offsetWidth * 3) {
    // desktop
    img.width = canvasRef.value.offsetWidth;
    img.height = canvasRef.value.offsetWidth * (3 / 4);
    img.position.y = (canvasRef.value.offsetHeight - img.height) / 2;
    depthMap.position.y = (canvasRef.value.offsetHeight - img.height) / 2;
  } else {
    // mobile
    img.width = canvasRef.value.offsetHeight * (4 / 3);
    img.height = canvasRef.value.offsetHeight;
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
