<template>
  <div class="wrapper">
    <div class="menu">
      <div class="menu-item">
        <div @click="changeFont(chab)">폰트1</div>
        <div @click="changeFont(ddak)">폰트2</div>
      </div>
      <div class="menu-item">
        <input v-model="sizeValue" type="range" />
      </div>
      <div class="menu-item">
        <div
          v-for="color in fontColor"
          :key="color.id"
          class="color"
          @click="changeColor(color.color)"
        />
      </div>
    </div>
    <div ref="input" class="input" contenteditable="true">
      처음 버거 반한 맛!
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const sizeValue = ref(50);
const input = ref();

const fontColor = [
  { color: "black" },
  { color: "brown" },
  { color: "red" },
  { color: "blue" },
  { color: "green" },
];

const changeFont = (font) => {
  input.value.style.fontFamily = `${font}`;
};

const changeColor = (color) => {
  input.value.style.color = `${color}`;
};

watch(sizeValue, () => {
  input.value.style.fontSize = `${sizeValue.value / 10}em`;
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "testFont";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2")
    format("woff2");
}
.wrapper {
  width: 100%;
  .menu {
    display: flex;
    justify-content: space-around;
    &-item {
      display: flex;
      justify-content: space-around;
      width: calc(100% / 3);
      .color {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        &:nth-child(1) {
          background: black;
        }
        &:nth-child(2) {
          background: brown;
        }
        &:nth-child(3) {
          background: red;
        }
        &:nth-child(4) {
          background: blue;
        }
        &:nth-child(5) {
          background: green;
        }
      }
    }
  }
  .input {
    font-size: 5em;
    &:focus {
      outline-style: none;
      &::-webkit-input-placeholder {
        color: transparent;
      }
    }
  }
}
</style>
