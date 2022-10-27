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

const draw = (app) => {
  // Create a new texture
  const texture = app.loader.resources.test.texture;

  // Create the simple plane
  const verticesX = 10;
  const verticesY = 10;
  const plane = new PIXI.SimplePlane(texture, verticesX, verticesY);

  plane.x = 100;
  plane.y = 100;
  plane.scale.set(0.2);

  app.stage.addChild(plane);

  // Get the buffer for vertice positions.
  const buffer = plane.geometry.getBuffer("aVertexPosition");

  // Listen for animate update
  app.ticker.add(() => {
    // Randomize the vertice positions a bit to create movement.
    for (let i = 0; i < buffer.data.length; i++) {
      buffer.data[i] += Math.random() - 0.5;
    }
    buffer.update();
  });
};

onMounted(() => {
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    view: canvasRef.value,
    antialias: true,
    backgroundAlpha: true,
    resizeTo: canvasRef.value,
  });
  app.loader.add("test", "test.jpg").load(draw);
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
