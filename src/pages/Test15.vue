<template>
  <div class="container">
    <!-- 이미지 씌워보기 -->
    <canvas ref="canvasRef" width="600" height="600" />
    <input type="text" :value="nameData" @input="nameTyping" />
    <button @click="capture">capture</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import html2canvas from "html2canvas";

const canvasRef = ref();
const nameData = ref("");

const nameTyping = (e) => {
  nameData.value = e.target.value;
};

const angle = Math.PI * 0.6; // radians
const makeSticker = () => {
  const ctx = canvasRef.value.getContext("2d");
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height); // 캔버스 초기화
  ctx.save();
  ctx.translate(canvasRef.value.width / 2, canvasRef.value.height - 50);
  ctx.rotate((-1 * angle) / 2);
  ctx.rotate((-1 * (angle / nameData.value.length)) / 2);
  ctx.font = "50px testFont";
  ctx.textAlign = "center";
  for (let n = 0; n < nameData.value.length; n++) {
    ctx.rotate(angle / nameData.value.length);
    ctx.save();
    ctx.translate(0, -1 * 180);
    let char = nameData.value[n];
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }
  ctx.restore();
};
watch(nameData, () => {
  makeSticker();
});

const capture = () => {
  html2canvas(canvasRef.value, {
    backgroundColor: null,
    scale: 3,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "newYearSticker.png";
    link.click();
    link.remove();
  });
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "testFont";
  font-style: normal;
  font-weight: 400;
  src: local("testFont"), local("testFont"),
    url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2")
      format("woff2");
}
.container {
  width: 100%;
  height: 100vh;
}
</style>
