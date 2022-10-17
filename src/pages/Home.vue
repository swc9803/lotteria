<template>
  <div class="container">
    <div ref="wrapper" class="wrapper">
      <div ref="sunRef" class="sun" />
      <div v-if="textData" class="input-text-wrapper">
        <span
          v-for="(letter, index) in textData"
          :key="index"
          class="input-text"
        >
          {{ letter }}
        </span>
      </div>
      <textarea
        ref="textareaRef"
        v-model="textValue"
        autocomplete="off"
        type="text"
        @focus="onFocus"
        @blur="onBlur"
      />
      <div class="svgWrapper">
        <svg
          width="317"
          height="357"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="logo1"
            d="M175.437 232.896c-5.839 0-9.155-4.798-7.35-10.608l62.589-200.372h-86.812L74.525 244.223c-7.292 23.21 5.693 42.108 28.947 42.108h196.264l16.726-53.435H175.437Z"
            fill="#E60012"
          />
          <g id="logo2">
            <path
              d="M195.584 237.364s54.599 16.312 58.942 43.604l42.375-.008 13.663-43.602-114.98.006Z"
              fill="url(#a)"
            />
            <path
              d="m167.681 212.71-5.149 16.904s-.808 2.619 1.519 6.019l-.444-3.215s-.766-1.337-.325-2.507c.278-1.153 5.226-17.201 5.226-17.201h-.827Z"
              fill="url(#b)"
            />
            <path
              d="M140.517 50.838 79.634 245.72c-6.331 20.339 5.118 36.907 25.431 36.907h5.064l.943-1.535h-3.879c-22.36 0-31.681-16.595-25.431-36.854l60.372-193.4h-1.617Z"
              fill="url(#c)"
            />
            <path
              d="M148.413 25.514 111.512 143.87c34.633-67.236 87.955-118.37 87.955-118.37l-51.054.015Z"
              fill="url(#d)"
            />
            <path
              d="m148.433 25.523-.752 2.472h74.49l-38.589 124.472h1.505l39.341-126.945h-75.995Z"
              fill="url(#e)"
            />
            <path
              d="m111.098 281.104-.921 1.521 166.963-.011.312-1.524-166.354.014Z"
              fill="url(#f)"
            />
            <path
              d="m169.719 238.322 139.892-.019-13.832 44.237 1.11.004 14.67-46.756-141.847-.015c-3.66.003-6.141-2.169-6.651-5.284-.68 4.504 2.117 7.834 6.658 7.833Z"
              fill="url(#g)"
            />
          </g>
          <defs>
            <linearGradient
              id="a"
              x1="305.008"
              y1="224.79"
              x2="248.071"
              y2="258.106"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset=".04" stop-color="#fff" />
              <stop offset=".88" stop-color="#E60027" />
              <stop offset="1" stop-color="#E60027" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="165.341"
              y1="224.279"
              x2="165.907"
              y2="211.778"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7BFA4" />
              <stop offset="1" stop-color="#E60012" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="66.301"
              y1="225.76"
              x2="93.241"
              y2="198.82"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FBDAC8" />
              <stop offset=".94" stop-color="#E72518" />
              <stop offset="1" stop-color="#E60012" />
            </linearGradient>
            <linearGradient
              id="d"
              x1="127.522"
              y1="63.191"
              x2="153.525"
              y2="83.176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset=".04" stop-color="#fff" />
              <stop offset=".97" stop-color="#E60027" />
              <stop offset="1" stop-color="#E60027" />
            </linearGradient>
            <linearGradient
              id="e"
              x1="186.052"
              y1="29.5"
              x2="186.052"
              y2="136.989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#E60012" />
            </linearGradient>
            <linearGradient
              id="f"
              x1="111.118"
              y1="282.713"
              x2="215.727"
              y2="281.633"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FBDAC8" />
              <stop offset=".94" stop-color="#E72518" />
              <stop offset="1" stop-color="#E60012" />
            </linearGradient>
            <linearGradient
              id="g"
              x1="236.963"
              y1="235.406"
              x2="232.142"
              y2="267.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#E60012" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <button ref="buttonRef" @click="submit">submit</button>
      <div class="dataWrapper">
        <p>
          {{ data }}
        </p>
      </div>
      <button class="test" style="position: absolute; top: 70%; opacity: 0">
        Share With SNS
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

const wrapper = ref();
const sunRef = ref();
const textValue = ref("새해 다짐을 적어보세요!");
const textData = ref("");
const textareaRef = ref();
const buttonRef = ref();
const data = ref("");

const onFocus = () => {
  if (textValue.value === "새해 다짐을 적어보세요!") {
    textValue.value = "";
  }
};
const onBlur = () => {
  if (!textValue.value) {
    textValue.value = "새해 다짐을 적어보세요!";
  }
};

const submitValue = async () => {
  if (textValue.value && textValue.value !== "새해 다짐을 적어보세요!") {
    buttonRef.value.style.pointerEvents = "none";
    textareaRef.value.style.pointerEvents = "none";
    textData.value =
      textValue.value.length > 22
        ? `${textValue.value.slice(0, 22)}...`
        : textValue.value;

    textValue.value = "";
  }
};

const submitAni = () => {
  const tlTransform = gsap.timeline({ paused: false });
  const tlSubmit = gsap.timeline({
    delay: 0.5,
    defaults: {
      duration: 0.1,
    },
  });
  tlSubmit
    .to(".input-text", {
      delay: 0.5,
      y: "random(-10, 10)",
    })
    .to(".input-text", {
      y: "random(-10, 10)",
    })
    .to(".input-text", {
      y: "random(-10, 10)",
    })
    .to(".input-text", {
      y: "random(-10, 10)",
    })
    .to(".input-text", {
      y: 0,
    })
    .to(".input-text", {
      delay: 0.5,
      duration: 1.5,
      ease: "expo.in",
      y: -200,
      scale: 0.1,
      stagger: {
        amount: 0.3,
        from: "start",
      },
      onComplete: () => {
        if (matchMedia("(max-width: 500px)").matches) {
          gsap.to(wrapper.value, {
            left: "-30px",
          });
          gsap.to(
            ".dataWrapper > p",
            {
              left: "30px",
              duration: 0,
            },
            ""
          );
        }
        data.value = `올해에는 꼭 ${textData.value}!`;
        textData.value = "";
        tlTransform
          .to(buttonRef.value, {
            delay: 1,
            y: 50,
            opacity: 0,
            duration: 0.5,
          })
          .to(
            sunRef.value,
            {
              x: 100,
              y: 100,
              scale: 1.3,
              filter: "blur(0)",
              duration: 0.5,
            },
            "<"
          )
          .to(
            textareaRef.value,
            {
              minWidth: "100px",
              height: "30px",
            },
            "<"
          )
          .to("#logo1", {
            opacity: 1,
          })
          .to("#logo2", {
            delay: 0.3,
            duration: 0.3,
            opacity: 1,
          })
          .from("p", {
            delay: 1,
            y: "-100px",
            duration: 0.5,
          })
          .to(
            "p",
            {
              duration: 0.5,
              opacity: 1,
            },
            "<"
          )
          .to(".test", {
            opacity: 1,
            duration: 0.5,
          });
      },
    });
};

const submit = () => {
  submitValue().then(() => {
    submitAni();
  });
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(
    circle at 50% 25%,
    rgba(244, 183, 30, 1) 10%,
    rgb(112, 54, 0) 100%
  );
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .sun {
      position: relative;
      top: -150px;
      width: 200px;
      height: 200px;
      background: #fbf30d;
      border-radius: 50%;
      filter: blur(2px);
      z-index: 4;
    }
    .input-text-wrapper {
      position: absolute;
      z-index: 3;
      height: 40px;
      line-height: 40px;
      font-size: 1.2em;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      .input-text {
        color: #fbf30d;
        display: inline-block;
      }
    }
    textarea {
      position: absolute;
      z-index: 2;
      min-width: 300px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fbf30d;
      font-size: 1.2em;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      background: #e60012;
      resize: none;
      padding: 0.5em;
      overflow: hidden;
      border: none;
      &::placeholder {
        color: #fbf30d;
      }
      &:focus {
        outline-style: none;
        &::-webkit-input-placeholder {
          color: transparent;
        }
      }
    }
    .svgWrapper {
      position: absolute;
      z-index: 4;
      pointer-events: none;
      svg {
        position: relative;
        top: -80px;
        left: -72px;
        width: 317px;
        pointer-events: none;
        #logo1 {
          opacity: 0;
        }
        #logo2 {
          opacity: 0;
        }
      }
    }
    button {
      padding: 0.5em;
      border-radius: 1em;
    }
    .dataWrapper {
      position: absolute;
      p {
        position: relative;
        top: 100px;
        font-size: 1.5em;
        color: white;
        font-weight: 600;
        opacity: 0;
      }
    }
    .hopeWrap {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      .hope {
        display: inline-block;
        margin: 0;
        color: #fbf30d;
      }
    }
  }
}
</style>
