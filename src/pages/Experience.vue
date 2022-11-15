<template>
  <div class="experienceContainer">
    <div class="experienceTitle">서체 써보기</div>
    <div class="experienceWrapper">
      <input
        id="topMenu"
        ref="experienceInputRef1"
        type="text"
        class="experienceInput"
      />
      <!-- @click="showCustomColor = false" -->
      <div class="experienceMenu">
        <div class="experienceMenu-item">
          <div
            class="experienceMenu-item-selectFont"
            :class="chabValue ? 'selected' : ''"
            @click="selectChab"
          >
            <p>촵땡겨체</p>
          </div>
          <div
            class="experienceMenu-item-selectFont"
            :class="ddakValue ? 'selected' : ''"
            @click="selectDdak"
          >
            <p>딱붙어체</p>
          </div>
        </div>
        <div class="experienceMenu-item">
          <input v-model="sizeValue" type="range" />
        </div>
        <div class="experienceMenu-item">
          <span
            v-for="(color, i) in colors"
            :key="color.id"
            :ref="colorRef"
            :style="{ background: color.background }"
            @click="color.selectColor(i)"
          />
        </div>
      </div>
      <input
        id="bottomMenu"
        ref="experienceInputRef2"
        type="text"
        class="experienceInput"
      />
      <!-- @click="showCustomColor = false" -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

// const showCustomColor = ref(false);
const sizeValue = ref(50);
const experienceInputRef1 = ref();
const experienceInputRef2 = ref();
const colorValue = ref("#000000");

const colorArray = ref([]);
const colorRef = (el) => colorArray.value.push(el);
const colors = [
  {
    background: "#2e2828",
    selectColor: (i) => {
      changeColor("2e2828");
      for (let j = 0; j < colorArray.value.length; j++) {
        colorArray.value[j].style.boxShadow = "";
      }
      colorArray.value[i].style.boxShadow = "0 0 0 2px #000000";
    },
  },
  {
    background: "#ce5b0d",
    selectColor: (i) => {
      changeColor("ce5b0d");
      for (let j = 0; j < colorArray.value.length; j++) {
        colorArray.value[j].style.boxShadow = "";
      }
      colorArray.value[i].style.boxShadow = "0 0 0 2px #000000";
    },
  },
  {
    background: "#ffa526",
    selectColor: (i) => {
      changeColor("ffa526");
      for (let j = 0; j < colorArray.value.length; j++) {
        colorArray.value[j].style.boxShadow = "";
      }
      colorArray.value[i].style.boxShadow = "0 0 0 2px #000000";
    },
  },
  {
    background: "#0068ff",
    selectColor: (i) => {
      changeColor("0068ff");
      for (let j = 0; j < colorArray.value.length; j++) {
        colorArray.value[j].style.boxShadow = "";
      }
      colorArray.value[i].style.boxShadow = "0 0 0 2px #000000";
    },
  },
  {
    background: "#f7342b",
    selectColor: (i) => {
      changeColor("f7342b");
      for (let j = 0; j < colorArray.value.length; j++) {
        colorArray.value[j].style.boxShadow = "";
      }
      colorArray.value[i].style.boxShadow = "0 0 0 2px #000000";
    },
  },
  {
    background: "#1fb118",
    selectColor: (i) => {
      changeColor("1fb118");
      for (let j = 0; j < colorArray.value.length; j++) {
        colorArray.value[j].style.boxShadow = "";
      }
      colorArray.value[i].style.boxShadow = "0 0 0 2px #000000";
    },
  },
  //   {
  //     background:
  //       "conic-gradient( from 90deg, violet, indigo, blue, green, yellow, orange, red, violet)",
  //     selectColor: (i) => {
  //       for (let j = 0; j < colorArray.value.length; j++) {
  //         colorArray.value[j].style.boxShadow = "";
  //       }
  //       showCustomColor.value = !showCustomColor.value;
  //       colorArray.value[i].style.boxShadow = "0 0 0 2px #000000";
  //     },
  //   },
];

const chabValue = ref(true);
const ddakValue = ref(false);
const selectChab = () => {
  if (!chabValue.value) {
    ddakValue.value = false;
    chabValue.value = true;
    experienceInputRef1.value.style.fontFamily = "chab";
    experienceInputRef2.value.style.fontFamily = "chab";
  }
};
const selectDdak = () => {
  if (!ddakValue.value) {
    chabValue.value = false;
    ddakValue.value = true;
    experienceInputRef1.value.style.fontFamily = "ddak";
    experienceInputRef2.value.style.fontFamily = "ddak";
  }
};

const changeColor = (color) => {
  experienceInputRef1.value.style.color = `#${color}`;
  experienceInputRef2.value.style.color = `#${color}`;
};

watch(sizeValue, () => {
  experienceInputRef1.value.style.fontSize = `${sizeValue.value / 5}vw`;
  experienceInputRef2.value.style.fontSize = `${sizeValue.value / 10}vw`;
});
watch(colorValue, () => {
  experienceInputRef1.value.style.color = `${colorValue.value}`;
  experienceInputRef2.value.style.color = `${colorValue.value}`;
});

onMounted(() => {
  colorArray.value[0].style.boxShadow = "0 0 0 2px #000000";
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "ddak";
  src: url("~@/assets/ddakTest.otf") format("truetype");
  font-style: normal;
}
@font-face {
  font-family: "chab";
  src: url("~@/assets/chabTest.otf") format("truetype");
  font-style: normal;
}
.experienceContainer {
  width: 100%;
  background: #f9f9d7;
  overflow: hidden;
  .experienceTitle {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 18vw;
    height: 2.62vw;
    line-height: 2.62vw;
    background: #c0c683;
    color: white;
    border-radius: 2em;
    font-family: "chab";
    font-size: 2vw;
    text-align: center;
    padding: 0.5vw 0;
    margin-bottom: 60px;
    @media screen and (max-width: 480px) {
      & {
        position: absolute;
        top: 5vh;
        margin-bottom: 0;
        width: 42vw;
        height: 8vw;
        line-height: 8vw;
        font-size: 5vw;
      }
    }
  }
  .experienceWrapper {
    width: 100%;
    background: #f9f9d7;
    @media screen and (max-width: 480px) {
      #topMenu {
        border-radius: 0 0 0 0;
        box-shadow: none;
      }
      #bottomMenu {
        display: none;
      }
    }
    @media screen and (min-width: 481px) {
      #topMenu {
        display: none;
      }
    }
    .experienceMenu {
      width: 100%;
      display: flex;
      justify-content: space-around;
      background: #c0c683;
      border-radius: 1em 1em 0 0;
      padding-bottom: 2vw;
      @media screen and (max-width: 480px) {
        & {
          position: relative;
          display: block;
        }
      }
      &-item {
        width: 27%;
        height: 3.4vw;
        margin-top: 1.7vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 2em;
        &:nth-child(3) {
          justify-content: center;
          gap: 6%;
          margin-bottom: 0;
        }
        @media screen and (max-width: 480px) {
          & {
            justify-content: space-between;
            position: relative;
            left: 50%;
            transform: translate(-50%, 0);
            width: 90%;
            height: 5vh;
            margin-top: 0;
            margin-bottom: 4vw;
          }
          &:nth-child(1) {
            padding-top: 4vw;
          }
        }
        input {
          cursor: pointer;
        }
        input[type="range"] {
          width: 80%;
          border-radius: 50%;
          border-radius: 8px;
          outline: none;
          appearance: none;
          background: #ffa526;
          accent-color: #ce5b0d;
          @media screen and (max-width: 480px) {
            & {
              position: relative;
              left: 50%;
              transform: translate(-50%, 0);
            }
          }
        }

        input[type="range"]::-webkit-slider-thumb {
          margin-top: -6px;
        }
        input[type="range"]::-webkit-slider-runnable-track {
          width: 10px;
          height: 4px;
        }
        &-selectFont {
          width: 40%;
          height: 100%;
          line-height: 3.4vw;
          background: white;
          border-radius: 2em;
          text-align: center;
          font-size: 2.4vw;
          filter: grayscale(1);
          p {
            opacity: 0.5;
          }
          cursor: pointer;
          @media screen and (max-width: 480px) {
            & {
              width: 48%;
              font-size: 6vw;
              line-height: 5vh;
            }
          }
          &.selected {
            filter: grayscale(0);
            p {
              opacity: 1;
            }
          }
          &:nth-child(1) {
            font-family: "chab";
            color: #f7342b;
          }
          &:nth-child(2) {
            font-family: "ddak";
            color: #1fb118;
          }
        }
        span {
          width: 2vw;
          height: 2vw;
          border-radius: 50%;
          cursor: pointer;
          border: 1px solid white;
          @media screen and (max-width: 480px) {
            & {
              width: 5vw;
              height: 5vw;
              border: 2px solid white;
            }
          }
        }
        .customColor {
          position: absolute;
          transform: translate(0, 80%);
          right: 2vw;
          width: 40px;
          height: 40px;
          border: none;
          margin: 0;
          background: transparent;
        }
      }
      &-item:not(:first-child) {
        background: white;
      }
    }
    .experienceInput {
      width: 100%;
      height: 45vw;
      font-size: 5vw;
      text-align: center;
      font-family: "chab";
      border: none;
      border-radius: 0 0 0.5em 0.5em;
      padding: 0;
      box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.15);
      background: white;
      overflow: hidden;
      &:focus {
        outline-style: none;
      }
      @media screen and (max-width: 480px) {
        & {
          height: 75vh;
          font-size: 10vw;
        }
      }
    }
  }
}
</style>
