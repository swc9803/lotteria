<template>
  <div class="container">
    <div class="wrapper">
      <div class="menu">
        <div
          class="menu-des"
          :class="showDes ? 'selected' : ''"
          @click="selectDes"
        >
          디자인 특징 보기
        </div>
        <div
          class="menu-pre"
          :class="showPre ? 'selected' : ''"
          @click="selectPre"
        >
          폰트 견본 보기
        </div>
      </div>
      <div v-show="showDes">폰트 설명</div>
      <div v-show="showPre" class="sample">
        <!-- grid로 처리해보기 -->
        <div
          v-for="letter in literal"
          :key="letter.id"
          :data-title="letter.word"
          class="sample-block"
        >
          {{ letter.word }}
        </div>
      </div>
    </div>
  </div>
  <p>dd</p>
  <p>dd</p>
  <p>dd</p>
  <p>dd</p>
  <p>dd</p>
</template>

<script setup>
import { ref } from "vue";

const literal = [
  { word: "Aa" },
  { word: "Bb" },
  { word: "Cc" },
  { word: "Dd" },
  { word: "Ee" },
  { word: "Ff" },
  { word: "Gg" },
  { word: "Hh" },
  { word: "Ii" },
  { word: "Jj" },
  { word: "Kk" },
  { word: "Ll" },
  { word: "Nn" },
  { word: "Mm" },
  { word: "Oo" },
  { word: "Pp" },
  { word: "Qq" },
  { word: "Rr" },
  { word: "Ss" },
  { word: "Tt" },
  { word: "Uu" },
  { word: "Vv" },
  { word: "Ww" },
  { word: "Xx" },
  { word: "Yy" },
  { word: "Zz" },
  { word: "." },
  { word: "," },
  { word: "?" },
  { word: "!" },
  { word: "1" },
  { word: "2" },
  { word: "3" },
  { word: "4" },
  { word: "5" },
  { word: "6" },
  { word: "7" },
  { word: "8" },
  { word: "9" },
  { word: "0" },
  { word: "가" },
  { word: "나" },
  { word: "다" },
  { word: "라" },
  { word: "마" },
  { word: "바" },
  { word: "사" },
  { word: "아" },
  { word: "자" },
  { word: "차" },
  { word: "카" },
  { word: "타" },
  { word: "파" },
  { word: "하" },
];

const showDes = ref(true);
const showPre = ref(false);

const selectDes = () => {
  if (!showDes.value) {
    showDes.value = true;
    showPre.value = false;
  }
};
const selectPre = () => {
  if (!showPre.value) {
    showPre.value = true;
    showDes.value = false;
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  //   overflow: hidden;
  .wrapper {
    width: 100%;
    // height: 500px;
    background: #01ae21;
    border-radius: 1em 1em 0 0;
    // overflow: hidden;
    .menu {
      display: flex;
      height: 40px;
      background: rgb(0, 255, 0);
      color: #06dc35;
      &-des,
      &-pre {
        z-index: 1;
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 1em 1em 0 0;
        background: #008d1d;
        line-height: 40px;
        cursor: pointer;
        &.selected {
          color: white;
          background: #01ae21;
          border-bottom: 1px solid #0bbf2e;
        }
      }
    }
    .sample {
      //   height: 500px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      left: -0.5px;
      top: -1px;
      &-block {
        width: calc(10% + 1px);
        height: 10vw;
        position: relative;
        top: 1px;
        left: 1px;
        margin-left: -1px;
        margin-top: -1px;
        line-height: calc(10vw - 2px);
        text-align: center;
        font-size: 5vw;
        color: white;
        background: #01ae21;
        border: 1px solid #7ddf8e;
        box-sizing: border-box;
        &:hover:before {
          opacity: 1;
        }
        &:before {
          position: absolute;
          content: attr(data-title);
          width: 25vw;
          height: 25vw;
          line-height: 25vw;
          font-size: 15vw;
          color: black;
          background: rgba(255, 255, 255, 0.9);
          z-index: 1;
          opacity: 0;
          pointer-events: none;
        }
      }
    }
  }
}
// @media all and (min-width: 768px) {

// }
</style>
