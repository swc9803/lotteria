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

const dd = PIXI.Texture.from("/burger.png");
const draw = (app) => {
  for (let i = 0; i < 10; i++) {
    createBurger(
      Math.floor(Math.random() * app.screen.width),
      Math.floor(Math.random() * app.screen.height)
    );
  }

  function createBurger(x, y) {
    const burger = new PIXI.Sprite(dd);
    // object event 처리 가능하게
    burger.interactive = true;
    burger.buttonMode = true;
    burger.scale.set(0.2);
    // drag시 중간 지점
    burger.anchor.set(0.5);

    // event
    burger
      .on("pointerdown", onDragStart)
      .on("pointermove", onDragMove)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd);

    burger.x = x;
    burger.y = y;

    app.stage.addChild(burger);
  }
};
function onDragStart(event) {
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
}

function onDragEnd() {
  this.data = null;
  this.alpha = 1;
  this.dragging = false;
}

function onDragMove() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}

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
