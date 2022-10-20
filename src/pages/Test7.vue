<template>
  <div class="container">
    <div class="description">
      <p>font-size</p>
      <input v-model="sizeValue" type="range" />
      <p>{{ sizeValue }}</p>
    </div>
    <!-- range 스타일 -->
    <div ref="input" class="input" contenteditable="true">TEXT</div>
    <div class="literalWrapper">
      <p class="literal">{{ literal }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const sizeValue = ref(50);
const input = ref();
const literal = ref(
  "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
);

watch(sizeValue, () => {
  input.value.style.fontSize = `${sizeValue.value / 5}em`;
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "dd";
  src: url("~@/assets/dd.ttf") format("truetype");
  font-style: normal;
}
.container {
  width: 100%;
  height: 100vh;
  h2 {
    margin: 0;
  }
  .description {
    display: flex;
    p {
      font-size: 1.3em;
      margin: 10px;
    }
  }
  .input {
    position: relative;
    transform: translate(-50%);
    left: 50%;
    text-align: center;
    padding: 10px;
    border: 2px solid rgb(223, 223, 223);
    font-family: "dd";
    width: 90%;
    font-size: 10em;
    font-weight: 400;
    animation-duration: 4s;
    animation-name: changeWeight;
    animation-iteration-count: infinite;
    &:focus {
      outline-style: none;
      &::-webkit-input-placeholder {
        color: transparent;
      }
    }
  }
  .literalWrapper {
    .literal {
      margin: 5%;
      font-family: "dd";
      letter-spacing: 6px;
      line-height: 1.1em;
      font-size: 10em;
      word-break: break-all;
      animation-duration: 4s;
      animation-name: changeWeight;
      animation-iteration-count: infinite;
    }
  }
}

@keyframes changeWeight {
  0% {
    font-variation-settings: "wght" 0;
  }

  50% {
    font-variation-settings: "wght" 1000;
  }

  100% {
    font-variation-settings: "wght" 0;
  }
}
</style>
