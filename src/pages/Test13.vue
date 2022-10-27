<template>
  <div class="container">
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);
PIXI.utils.skipHello();

const canvasRef = ref();

const draw = (app) => {
  // 원 크기
  const radius = 120;
  // blur
  const blurSize = 15;
  const background = PIXI.Sprite.from("/test.jpg");
  app.stage.addChild(background);
  background.width = app.screen.width;
  background.height = app.screen.height;

  const circle = new PIXI.Graphics()
    .beginFill(0xffffff)
    .drawCircle(radius + blurSize, radius + blurSize, radius)
    .endFill();
  circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

  const bounds = new PIXI.Rectangle(
    0,
    0,
    (radius + blurSize) * 2,
    (radius + blurSize) * 2
  );
  const texture = app.renderer.generateTexture(
    circle,
    PIXI.SCALE_MODES.NEAREST,
    1,
    bounds
  );
  const focus = new PIXI.Sprite(texture);

  app.stage.addChild(focus);
  focus.position.x = -1000;
  background.mask = focus;
  background.interactive = true;
  background.on("mousemove", pointerMove);

  function pointerMove(event) {
    focus.position.x = event.data.global.x - focus.width / 2;
    focus.position.y = event.data.global.y - focus.height / 2;
  }
};

onMounted(() => {
  const app = new PIXI.Application({
    width: canvasRef.value.width,
    height: canvasRef.value.height,
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
