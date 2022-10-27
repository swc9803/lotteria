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

const createPixiApp = () => {
  const app = new PIXI.Application({
    width: canvasRef.value.width,
    height: canvasRef.value.height,
    view: canvasRef.value,
    antialias: true,
    backgroundAlpha: true,
    resizeTo: canvasRef.value,
  });
  return app;
};

const draw = (app) => {
  let count = 0;

  // build a rope!
  const ropeLength = 1000 / 10;

  const points = [];

  for (let i = 0; i < 20; i++) {
    points.push(new PIXI.Point(i * ropeLength, 0));
  }

  const strip = new PIXI.SimpleRope(PIXI.Texture.from("burger.png"), points);

  strip.x = -900;

  const snakeContainer = new PIXI.Container();
  snakeContainer.x = 400;
  snakeContainer.y = 300;

  snakeContainer.scale.set(800 / 2000);
  app.stage.addChild(snakeContainer);

  snakeContainer.addChild(strip);

  app.ticker.add(() => {
    count += 0.1;

    // make the snake
    for (let i = 0; i < points.length; i++) {
      points[i].y = Math.sin(i * 0.5 + count) * 30;
      points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 20;
    }
  });
};

onMounted(() => {
  const app = createPixiApp();
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
