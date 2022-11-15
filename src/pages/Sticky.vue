<template>
  <div class="container">
    <div class="ddakMarquee">
      <p ref="ddakMarqueeRef">
        어떤 재료건 딱-붙이는 도전정신의 총체 딱-붙어체 어떤 재료건 딱-붙이는
        도전정신의 총체 딱-붙어체
      </p>
    </div>
    ddak animation
    <div class="ddakWrapper">
      <div class="menu">
        <div
          class="menu-des"
          :class="showDes ? 'selected' : ''"
          @click="selectDes"
        >
          디자인 특징 보기
        </div>
        <div
          class="menu-bat"
          :class="showBat ? 'selected' : ''"
          @click="selectBat"
        >
          특별한 딩벳
        </div>
        <div
          class="menu-pre"
          :class="showPre ? 'selected' : ''"
          @click="selectPre"
        >
          폰트 견본 보기
        </div>
      </div>
      <!-- 디자인 특징 보기 -->
      <div v-show="showDes" class="board">
        <div class="ddakDesImgWrapper">
          <img src="@/assets/square.png" alt="딱붙어체 설명" />
        </div>
        <div class="ddakDesWrapper">
          <div class="ddakDropDown">
            <transition-group name="ddakDropDownFade">
              <div
                v-for="(ddakDropDownItem, i) in ddakDropDownItems"
                :key="ddakDropDownItem.title"
                :ref="ddakDropDownRef"
                class="ddakDropDown-item"
                :class="ddakDropDownArray[i] ? 'selected' : ''"
              >
                <div
                  class="ddakDropDown-item-title"
                  @click="ddakDropDownItem.selectItem(i)"
                >
                  <p>{{ ddakDropDownItem.title }}</p>
                  <img
                    :src="
                      ddakDropDownArray[i]
                        ? require('@/assets/ddak/ddakDropdownOpened.png')
                        : require('@/assets/ddak/ddakDropdownClosed.png')
                    "
                    alt="dropdownBtn"
                  />
                </div>
                <p v-show="ddakDropDownArray[i]">{{ ddakDropDownItem.des }}</p>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
      <!-- 특별한 딩벳 -->
      <div v-show="showBat" class="board">
        <div class="dingbat">
          <div
            v-for="(dingbatImg, i) in dingbatImgs"
            :key="dingbatImg.id"
            class="dingbatImg"
            :class="dingbatImg.class"
          >
            img{{ i + 1 }}
          </div>
          <div class="swapSwitch">swap switch</div>
        </div>
      </div>
      <!-- 폰트 견본 보기 -->
      <div v-show="showPre" class="board">
        <div class="sample">
          <div
            v-for="(letter, i) in literal"
            :key="letter.id"
            :ref="letterRef"
            :data-title="letter.word"
            class="sample-block"
            @mousemove="print(i)"
          >
            {{ letter.word }}
          </div>
        </div>
        <div class="circle">
          {{ focusWord }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

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
  { word: "!" },
  { word: "?" },
  { word: "&" },
  { word: "@" },
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
  { word: "." },
];

const print = (i) => {
  letterArray.value.map((word) => {
    word.style.background = "#00af22";
  });
  letterArray.value[i].style.background = "#008d1d";
  focusWord.value = letterArray.value[i].getAttribute("data-title");
};

const showDes = ref(true);
const showBat = ref(false);
const showPre = ref(false);
const selectDes = () => {
  if (!showDes.value) {
    showBat.value = false;
    showPre.value = false;
    showDes.value = true;
  }
};
const selectBat = () => {
  if (!showBat.value) {
    showDes.value = false;
    showPre.value = false;
    showBat.value = true;
  }
};
const selectPre = () => {
  if (!showPre.value) {
    showDes.value = false;
    showBat.value = false;
    showPre.value = true;
  }
};

const ddakDropDownArray = ref([]);
const ddakDropDownRef = (el) => ddakDropDownArray.value.push(el);
const ddakDropDownItems = [
  {
    title: "햄버거를 담은 글자",
    des: "획들이 넘치도록 쌓고 또 쌓았습니다. 가로획을 차곡차곡 쌓아 올려 햄버거의 정체성을 표현하는 글자입니다.",
    selectItem: (i) => selectDropDown(i),
  },
  {
    title: "관심을 바라는 글자",
    des: "엉뚱하게 행동하면 관심 받을 줄 알았습니다. ㅂ의 x, E의 가로획, # 등 엉뚱한 시도로 관심을 갈구하는 글자입니다.",
    selectItem: (i) => selectDropDown(i),
  },
  {
    title: "꽉꽉 채워 만든 글자",
    des: "꽉꽉 채워 만든 글자 재료와 자신감은 가득 찰수록 좋습니다. 꽉 찬 모듈로 존재감을 입증하는 글자입니다",
    selectItem: (i) => selectDropDown(i),
  },
  {
    title: "아무나 못 쓰는 글자",
    des: "여러분의 도전을 기다립니다. 쓰는 것도 읽는 것도 쉽지 않아 도전정신을 자극하는 글자입니다.",
    selectItem: (i) => selectDropDown(i),
  },
];
ddakDropDownArray.value[0] = true;
ddakDropDownArray.value[1] = false;
ddakDropDownArray.value[2] = false;
ddakDropDownArray.value[3] = false;

const selectDropDown = (i) => {
  if (!ddakDropDownArray.value[i]) {
    for (let j = 0; j < ddakDropDownArray.value.length; j++) {
      ddakDropDownArray.value[j] = false;
    }
  }
  ddakDropDownArray.value[i] = !ddakDropDownArray.value[i];
};

// dingbat
const dingbatImgs = [
  { class: "img1" },
  { class: "img2" },
  { class: "img3" },
  { class: "img4" },
  { class: "img5" },
  { class: "img6" },
];

const ddakMarqueeRef = ref();
onMounted(() => {
  gsap.fromTo(
    ddakMarqueeRef.value,
    { xPercent: 100 },
    { duration: 20, ease: "none", xPercent: -230, repeat: -1 }
  );
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background: #44d13d;
  font-family: "ddak";
  .ddakMarquee {
    width: 100%;
    height: 8vw;
    line-height: 8vw;
    font-size: 5vw;
    color: #1fb118;
    background: white;
    overflow: hidden;
    p {
      white-space: nowrap;
    }
  }
  .ddakWrapper {
    position: relative;
    top: 0;
    width: 100%;
    background: #1fb118;
    border-radius: 1em 1em 0 0;
    .menu {
      display: flex;
      height: 40px;
      background: #44d13d;
      color: white;
      &-des,
      &-bat,
      &-pre {
        z-index: 1;
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 1em 1em 0 0;
        background: #1e8431;
        line-height: 40px;
        cursor: pointer;
        &.selected {
          background: #1fb118;
        }
      }
    }
    .board {
      display: flex;
      .ddakDesImgWrapper {
        width: 50%;
        img {
          width: 95%;
          margin: 2.5%;
          vertical-align: bottom;
        }
      }
      .ddakDesWrapper {
        width: 50%;
        .ddakDropDown {
          width: 95%;
          margin: 2.5%;
          &-item {
            width: 100%;
            color: #1e8431;
            transition: 0.3s;
            &.selected {
              color: white;
            }
            &-title {
              display: flex;
              justify-content: space-between;
              margin: 10px 10px 10px 0;
              cursor: pointer;
              border-top: 1px solid white;
              p {
                font-size: 5vw;
                margin: 14px 0 4px 0;
                word-break: keep-all;
              }
              img {
                position: relative;
                width: 1.5em;
                height: 1.5em;
                margin-top: 2.5vw;
              }
            }
          }
        }
      }
      .dingbat {
        width: 100vw;
        height: calc(50vw - 7.5px);
        position: relative;
        left: -0.5px;
        top: -1px;
        overflow: hidden;
        color: white;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
          "a g g d"
          "b g g e"
          "c g g f";
        @media screen and (max-width: 480px) {
          height: 70vh;
          & {
            grid-template-columns: none;
            grid-template-rows: repeat(5, 1fr);
            grid-template-areas:
              "a b c"
              "g g g"
              "g g g"
              "g g g"
              "d e f";
          }
        }
        @mixin centerAlign {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          top: 1px;
          left: 1px;
          margin-left: -1px;
          margin-top: -1px;
          border: 1px solid white;
          box-sizing: border-box;
        }
        .dingbatImg {
          $imgCount: 6;
          @for $i from 1 through $imgCount {
            &:nth-child(#{$i}) {
              @include centerAlign;
            }
          }
        }
        .img1 {
          grid-area: a;
        }
        .img2 {
          grid-area: b;
        }
        .img3 {
          grid-area: c;
        }
        .img4 {
          grid-area: d;
        }
        .img5 {
          grid-area: e;
        }
        .img6 {
          grid-area: f;
        }
        .swapSwitch {
          @include centerAlign;
          grid-area: g;
        }
      }
      .sample {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        left: -1px;
        top: -1px;
        &-block {
          width: calc(20% + 1px);
          height: calc(10vw - 0.5px);
          position: relative;
          top: 1px;
          left: 1px;
          margin-left: -1px;
          margin-top: -1px;
          line-height: calc(10vw - 0.5px);
          text-align: center;
          font-size: 5vw;
          color: white;
          background: #00af22;
          border: 1px solid #7ddf8e;
          box-sizing: border-box;
        }
      }
      .circle {
        position: sticky;
        top: 17.5%;
        left: 51.25%;
        // margin: 2.5%;
        width: 47.5%;
        height: 0;
        padding-bottom: 47.5%;
        border-radius: 50%;
        text-align: center;
        line-height: 47vw;
        font-size: 18vw;
        background: white;
        // background: url("~@/assets/circleMask.png") center/cover;
        // @media screen and (max-width: 480px) {
        //   & {
        //     width: 45vw;
        //     height: 45vw;
        //     line-height: 45vw;
        //     font-size: 25vw;
        //   }
        // }
      }
    }
  }
}

.ddakDropDownFade-leave-active {
  position: absolute;
}
</style>
