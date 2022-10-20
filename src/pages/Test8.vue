<template>
  <div class="container">
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as PIXI from "pixi.js";

const canvasRef = ref();

onMounted(() => {
  const app = createPixiApp();

  draw(app);
});

const createPixiApp = () => {
  console.log(`window size(${window.innerWidth}, ${window.innerHeight})`);
  console.log(
    `canvas size(${canvasRef.value.width}, ${canvasRef.value.height})`
  );

  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    backgroundAlpha: true,
    view: canvasRef.value,
  });

  return app;
};

const draw = (app) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(8, 0x008080);
  graphics.moveTo(0, 250);
  graphics.lineTo(800, 500);
  app.stage.addChild(graphics);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sprite = PIXI.Sprite.from(require("@/assets/test.jpg"));
  app.stage.addChild(sprite);

  let elapsed = 0.0;
  app.ticker.add((delta) => {
    elapsed += delta;
    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  });
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  canvas {
    width: 80%;
  }
}
</style>
