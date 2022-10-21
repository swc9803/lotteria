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

// test8 구조로 수정하기
onMounted(() => {
  const app = new PIXI.Application({
    backgroundColor: 0xeaeaea,
    width: window.innerWidth,
    height: window.innerHeight,
    view: canvasRef.value,
    antialias: true,
    backgroundAlpha: true,
    resizeTo: window,
  });

  const dd = PIXI.Texture.from("/burger.png");

  dd.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

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

  // 클릭 포함
  function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
  }

  function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
  }

  function onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
}
</style>
