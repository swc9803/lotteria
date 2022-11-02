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
  // 캔버스 초기화
  ctx.clearRect(
    0,
    0,
    canvasRef.value.offsetWidth,
    canvasRef.value.offsetHeight
  );
  ctx.save();
  ctx.translate(
    canvasRef.value.offsetWidth - 270,
    canvasRef.value.offsetHeight - 270
  );
  ctx.rotate((-1 * angle.value) / 2);
  ctx.rotate((-1 * (angle.value / nameData.value.length)) / 2);
  ctx.font = "50px testFont";
  ctx.textAlign = "center";
  for (let i = 0; i < nameData.value.length; i++) {
    ctx.rotate(angle.value / nameData.value.length);
    ctx.save();
    ctx.translate(0, -1 * 180);
    // ctx.scale(1, -1);
    let char = nameData.value[i];
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }
  ctx.restore();
};
watch(nameData, () => {
  if (nameData.value.length > 4) {
    angle.value = Math.PI * 1;
  } else {
    angle.value = Math.PI * 0.5;
  }
  if (nameData.value.length < 11) {
    makeSticker();
  } else {
    alert("10자 이하로 적어주세요");
  }
});

const capture = () => {
  if (nameData.value) {
    html2canvas(captureRef.value, {
      backgroundColor: null,
      //  최대한 1080에 맞춰서
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
  font-family: "testFont";
  .stickerWrapper {
    width: 540px;
    height: 540px;
    img {
      position: absolute;
      width: 540px;
      height: 540px;
      z-index: -1;
    }
    canvas {
      //   transform: scale(1, -1);
      //   background: url("@/assets/burger.png");
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   background-position: center center;
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
