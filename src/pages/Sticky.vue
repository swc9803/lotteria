<template>
  <div class="blank" />
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
      <div class="circle">
        {{ focusWord }}
      </div>
      <div v-show="showPre" class="sample">
        <div
          v-for="(letter, i) in literal"
          :key="letter.id"
          :ref="letterRef"
          :data-title="letter.word"
          class="sample-block"
          @mousemove="log(i)"
        >
          {{ letter.word }}
        </div>
      </div>
    </div>
  </div>
  <div class="blank" />
  <div class="blank" />
</template>

<script setup>
import { ref } from "vue";

const focusWord = ref("");
const letterArray = ref([]);
const letterRef = (el) => letterArray.value.push(el);
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

const log = (i) => {
  focusWord.value = letterArray.value[i].getAttribute("data-title");
};

const selectDes = () => {
  if (showDes.value === false) {
    showDes.value = true;
    showPre.value = false;
  }
};
const selectPre = () => {
  if (showPre.value === false) {
    showPre.value = true;
    showDes.value = false;
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 500px;
  //   //   overflow: hidden;
  .wrapper {
    position: relative;
    top: 0;
    width: 100%;
    height: 1000px;
    background: #01ae21;
    border-radius: 1em 1em 0 0;
    // overflow: hidden;
    .circle {
      position: sticky;
      top: 42.5%;
      left: 70%;
      width: 30vw;
      height: 30vw;
      border-radius: 50%;
      text-align: center;
      line-height: 30vw;
      font-size: 20vw;
      background: linear-gradient(
          rgba(255, 255, 255, 0.4),
          rgba(255, 255, 255, 0.4)
        ),
        url("~@/assets/burger.png") center/cover;
      z-index: 5;
      @media screen and (max-width: 480px) {
        & {
          width: 45vw;
          height: 45vw;
          line-height: 45vw;
          font-size: 25vw;
        }
      }
    }
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
      left: -1px;
      top: -1px;
      &-block {
        width: calc(10% + 1px);
        height: 10vw;
        position: relative;
        top: 1px;
        left: 1px;
        margin-left: -1px;
        margin-top: -1px;
        line-height: 10vw;
        text-align: center;
        font-size: 5vw;
        color: white;
        background: #01ae21;
        border: 1px solid #7ddf8e;
        box-sizing: border-box;
        // &:hover:before {
        //   opacity: 1;
        // }
        // &:before {
        //   position: absolute;
        //   content: attr(data-title);
        //   width: 25vw;
        //   height: 25vw;
        //   line-height: 25vw;
        //   font-size: 15vw;
        //   color: black;
        //   background: rgba(255, 255, 255, 0.9);
        //   z-index: 1;
        //   opacity: 0;
        //   pointer-events: none;
        // }
      }
      @media screen and (max-width: 480px) {
        &-block {
          width: calc(20% + 1px);
          height: 20vw;
          line-height: 20vw;
          font-size: 10vw;
        }
      }
    }
  }
}
</style>
