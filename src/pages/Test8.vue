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
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    view: canvasRef.value,
    antialias: true,
    backgroundAlpha: true,
    resizeTo: window,
  });
  return app;
};

// three js과 같이 public 폴더에 위치해야 한다.
const test = PIXI.Sprite.from("/test.jpg");
const draw = (app) => {
  const graphics = new PIXI.Graphics();
  test.scale.set(0.2);
  graphics.lineStyle(8, 0x008080);
  graphics.moveTo(0, 250);
  graphics.lineTo(800, 500);

  app.stage.addChild(graphics);
  app.stage.addChild(test);

  test.interactive = true;
  test.buttonMode = true;

  test.on("pointerdown", onClick);

  let elapsed = 0.0;
  app.ticker.add((delta) => {
    elapsed += delta;
    test.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  });
};
function onClick() {
  console.log("hi");
}
onMounted(() => {
  const app = createPixiApp();

  draw(app);
});
const dd = () => {
  gsap.to(test, {
    duration: 1,
    pixi: { saturation: 0 },
  });
  setTimeout(() => {
    gsap.to(test, {
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
