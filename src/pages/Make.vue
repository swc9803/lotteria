<template>
  <div class="container">
    <div v-show="showPopup" class="makeBurgerWrapper">
      <button
        style="position: absolute; right: 0; z-index: 3"
        @click="closePopup"
      >
        hideMake
      </button>
      <div class="makeBurgerPhase">
        <button v-show="!phase1" @click="goToPrev">prev</button>
        <p v-show="phase1">새해 다짐을 적어 나만의 복버거를 포장해가세요! 1</p>
        <div v-show="phase2">주머니 2</div>
        <div v-show="phase3">스티커 3</div>
        <div v-show="phase4">
          메세지입력 4
          <input type="text" :value="msgData" @input="msgTyping" />
          <p v-show="!msgData" style="color: red">메세지를 입력하세요</p>
        </div>
        <div v-show="phase5">다운 5 {{ msgData }}</div>
        <button v-show="!phase5" :disabled="incomplete" @click="goToNext">
          next
        </button>
      </div>
    </div>
    <button @click="openPopup">showPopup</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const showPopup = ref(false);
const phase1 = ref(false);
const phase2 = ref(false);
const phase3 = ref(false);
const phase4 = ref(false);
const phase5 = ref(false);

const incomplete = ref(false);

const closePopup = () => {
  showPopup.value = false;
};
const openPopup = () => {
  showPopup.value = true;
  phase1.value = true;
  phase2.value = false;
  phase3.value = false;
  phase4.value = false;
  phase5.value = false;
};

const msgData = ref("");
const msgTyping = (e) => {
  msgData.value = e.target.value;
};

const goToPrev = () => {
  if (phase2.value) {
    phase1.value = true;
    phase2.value = false;
  } else if (phase3.value) {
    phase2.value = true;
    phase3.value = false;
  } else if (phase4.value) {
    phase3.value = true;
    phase4.value = false;
  } else {
    phase4.value = true;
    phase5.value = false;
  }
};

const goToNext = () => {
  if (phase1.value) {
    phase1.value = false;
    phase2.value = true;
  } else if (phase2.value) {
    phase2.value = false;
    phase3.value = true;
  } else if (phase3.value) {
    phase3.value = false;
    phase4.value = true;
  } else {
    phase4.value = false;
    phase5.value = true;
    // html2canvas
  }
};
watch([msgData, phase4], () => {
  if (!msgData.value && phase4.value) {
    incomplete.value = true;
  } else {
    incomplete.value = false;
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  .makeBurgerWrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    .makeBurgerPhase {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
