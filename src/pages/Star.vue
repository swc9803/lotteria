<template>
  <div class="container">
    <canvas ref="canvas" @mousemove="onMouseMove" @touchmove="onTouchMove" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvas = ref();
const starSize = 2.5;
const starMinSize = 0.2;
const overflowLimit = 20;
let scale;
let touchInput;
let pointerX, pointerY;
const stars = [];
let canvasWidth, canvasHeight;
const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.001 };

const positionStar = (star) => {
  star.x = Math.random() * canvasWidth;
  star.y = Math.random() * canvasHeight;
};
const onResize = () => {
  scale = window.devicePixelRatio || 1;
  canvasWidth = window.innerWidth * scale;
  canvasHeight = window.innerHeight * scale;
  canvas.value.width = canvasWidth;
  canvas.value.height = canvasHeight;
  stars.forEach(positionStar);
};
const movePointer = (x, y) => {
  const ox = x - pointerX;
  const oy = y - pointerY;
  velocity.tx = velocity.x + (ox / 8) * scale * (touchInput ? -1 : 1);
  velocity.ty = velocity.y + (oy / 8) * scale * (touchInput ? -1 : 1);
  pointerX = x;
  pointerY = y;
};
const onMouseMove = (e) => {
  touchInput = false;
  movePointer(e.clientX / 5, e.clientY / 5);
};
const onTouchMove = (e) => {
  touchInput = true;
  movePointer(e.touches[0].clientX / 5, e.touches[0].clientY / 5);
  e.preventDefault();
};

onMounted(() => {
  onResize();
  const ctx = canvas.value.getContext("2d");
  const starCount = (window.innerWidth + window.innerHeight) / 5;

  const recycleStar = (star) => {
    let direction = "z";
    const vx = Math.abs(velocity.tx);
    const vy = Math.abs(velocity.ty);

    if (vx > 1 && vy > 1) {
      let axis;
      if (vx > vy) {
        axis = Math.random() < Math.abs(velocity.x) / (vx + vy) ? "h" : "v";
      } else {
        axis = Math.random() < Math.abs(velocity.y) / (vx + vy) ? "v" : "h";
      }

      if (axis === "h") {
        direction = velocity.x > 0 ? "l" : "r";
      } else {
        direction = velocity.y > 0 ? "t" : "b";
      }
    }
    star.z = starMinSize + Math.random() * (1 - starMinSize);

    if (direction === "z") {
      star.z = 0.1;
      star.x = Math.random() * canvasWidth;
      star.y = Math.random() * canvasHeight;
    } else if (direction === "l") {
      star.x = -starSize;
      star.y = canvasHeight * Math.random();
    } else if (direction === "r") {
      star.x = canvasWidth + starSize;
      star.y = canvasHeight * Math.random();
    } else if (direction === "t") {
      star.x = canvasWidth * Math.random();
      star.y = -starSize;
    } else if (direction === "b") {
      star.x = canvasWidth * Math.random();
      star.y = canvasHeight + starSize;
    }
  };

  const update = () => {
    velocity.tx *= 0.8;
    velocity.ty *= 0.8;
    velocity.x += (velocity.tx - velocity.x) * 0.4;
    velocity.y += (velocity.ty - velocity.y) * 0.4;

    stars.forEach((star) => {
      star.x += velocity.x * star.z;
      star.y += velocity.y * star.z;
      star.x += (star.x - canvasWidth / 2) * velocity.z * star.z;
      star.y += (star.y - canvasHeight / 2) * velocity.z * star.z;
      star.z += velocity.z;

      if (
        star.x < -overflowLimit ||
        star.x > canvasWidth + overflowLimit ||
        star.y < -overflowLimit ||
        star.y > canvasHeight + overflowLimit
      ) {
        recycleStar(star);
      }
    });
  };

  const render = () => {
    stars.forEach((star) => {
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineWidth = starSize * star.z * scale;
      ctx.strokeStyle =
        "rgba(255, 255, 255," + (0.7 + 0.7 * Math.random()) + ")";
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);

      let tailX = velocity.x * 2;
      let tailY = velocity.y * 2;

      if (Math.abs(tailX) < 0.1) tailX = 0.4;
      if (Math.abs(tailY) < 0.1) tailY = 0.4;

      ctx.lineTo(star.x + tailX, star.y + tailY);
      ctx.stroke();
    });
  };

  const generate = () => {
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: starMinSize + Math.random() * (1 - starMinSize),
      });
    }
  };
  const step = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    update();
    render();
    requestAnimationFrame(step);
  };
  generate();
  step();

  window.addEventListener("resize", onResize());
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize());
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  canvas {
    position: relative;
    background: gray;
    width: 100%;
    height: 100%;
  }
}
</style>
