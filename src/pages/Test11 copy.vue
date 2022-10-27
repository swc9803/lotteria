<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as PIXI from "pixi.js";

PIXI.utils.skipHello();
onMounted(() => {
  const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
    resolution: window.devicePixelRatio || 1,
  });
  document.body.appendChild(app.view);

  app.loader.add("test", "test.jpg").load(build);

  function build() {
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
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
}
</style>
