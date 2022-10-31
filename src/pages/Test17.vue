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

let width, height;

const img = new PIXI.Sprite.from("/car.jpg");
const depthMap = new PIXI.Sprite.from("/car-map.jpg");

const draw = (app) => {
  width = canvasRef.value.offsetWidth;
  height = canvasRef.value.offsetHeight;
  img.width = width;
  img.height = height;
  depthMap.width = width;
  depthMap.height = height;

  app.stage.addChild(img);
  app.stage.addChild(depthMap);

  // 지정된 Depth map(깊이 정보)을 사용해, 이미지의 위치 정보를 변화시킬 수 있는 필터를 등록.
  const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
  // 앱 스테이지에 필터 정보를 등록.
  app.stage.filters = [displacementFilter];

  // HTML 요소 내에서 마우스를 움직이면,
  // 그 정보로 필터 정보를 수정해 원하는 효과를 구현합니다.
  canvasRef.value.onmousemove = function (e) {
    displacementFilter.scale.x = (width / 2 - e.clientX) / 20;
    displacementFilter.scale.y = (height / 2 - e.clientY) / 20;
  };
  window.addEventListener("resize", onWindowResize);
};

function onWindowResize() {
  width = canvasRef.value.offsetWidth;
  height = canvasRef.value.offsetHeight;
  img.width = width;
  img.height = height;
  depthMap.width = width;
  depthMap.height = height;
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
