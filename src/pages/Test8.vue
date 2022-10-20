<template>
  <div class="container">
    <canvas ref="canvasRef" />
  </div>
  <button @click="dd">click</button>
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
    autoResize: true,
  });

  return app;
};

// three js과 같이 public 폴더에 위치해야 한다.
const sprite = PIXI.Sprite.from("/test.jpg");
const draw = (app) => {
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(8, 0x008080);
  graphics.moveTo(0, 250);
  graphics.lineTo(800, 500);
  app.stage.addChild(graphics);

  app.stage.addChild(sprite);

  let elapsed = 0.0;
  app.ticker.add((delta) => {
    elapsed += delta;
    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  });
};

onMounted(() => {
  const app = createPixiApp();

  draw(app);
});
const dd = () => {
  gsap.to(sprite, {
    duration: 1,
    pixi: { saturation: 0 },
  });
  setTimeout(() => {
    gsap.to(sprite, {
      duration: 1,
      pixi: { colorize: "", colorizeAmount: 0 },
    });
  }, 2000);
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
