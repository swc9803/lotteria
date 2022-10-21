<template>
  <div class="container">
    <div ref="captureRef" class="stickerWrapper">
      <img src="@/assets/burger.png" />
      <canvas ref="canvasRef" width="540" height="540" />
    </div>
    <input type="text" :value="nameData" @input="nameTyping" />
    <button @click="capture">capture</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import html2canvas from "html2canvas";

const captureRef = ref();
const canvasRef = ref();
const nameData = ref("");

const nameTyping = (e) => {
  nameData.value = e.target.value;
};

const angle = ref(Math.PI * 0.5); // 각
const makeSticker = () => {
  const ctx = canvasRef.value.getContext("2d");
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height); // 캔버스 초기화
  ctx.save();
  ctx.translate(canvasRef.value.width / 2, canvasRef.value.height - 300);
  ctx.rotate((-1 * angle.value) / 2);
  ctx.rotate((-1 * (angle.value / nameData.value.length)) / 2);
  ctx.font = "50px testFont";
  ctx.textAlign = "center";
  for (let n = 0; n < nameData.value.length; n++) {
    ctx.rotate(angle.value / nameData.value.length);
    ctx.save();
    ctx.translate(0, -1 * 180);
    let char = nameData.value[n];
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }
  ctx.restore();
};
watch(nameData, () => {
  if (nameData.value.length < 10) {
    makeSticker();
  } else {
    alert("10자 이하로 적어주세요");
  }
  if (nameData.value.length > 4) {
    angle.value = Math.PI * 1;
  } else {
    angle.value = Math.PI * 0.5;
  }
});

const capture = () => {
  if (nameData.value) {
    html2canvas(captureRef.value, {
      backgroundColor: null,
      scale: 2,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "new_year_sticker.png";
      link.click();
      link.remove();
    });
  } else {
    alert("새해 다짐을 적어주세요");
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "testFont";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2")
    format("woff2");
}
.container {
  width: 100%;
  height: 100vh;
  .stickerWrapper {
    width: 540px;
    height: 540px;
    img {
      position: absolute;
      width: 540px;
      height: 540px;
      z-index: -1;
    }
    input {
      display: block;
      &:focus {
        outline-style: none;
        &::-webkit-input-placeholder {
          color: transparent;
        }
      }
    }
  }
}
</style>
