<template>
  <div class="container">
    <button v-for="menu in menus" :key="menu" @click="addMaterial(menu.menu)">
      {{ menu.material }}
    </button>
    <div ref="burgerRef" class="burgerWrapper">
      <div class="bun top" />
      <div class="materialsWrapper">
        <transition-group name="materialFade">
          <div
            v-for="(material, index) in materialsArray"
            :key="material"
            class="material"
            :class="material.materialClass"
            @click="removeMaterial(index)"
          />
        </transition-group>
      </div>
      <div class="bun bottom" />
    </div>
    <button @click="onSaveToImg">click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import html2canvas from "html2canvas";

const burgerRef = ref();

const menus = [
  { menu: "patty", material: "패티 추가" },
  { menu: "cheese", material: "치즈 추가" },
  { menu: "cucumber", material: "피클 추가" },
  { menu: "tomato", material: "토마토 추가" },
];
const materialsArray = ref([
  //   { materialClass: "bun top" },
  //   { materialClass: "bun bottom" },
]);

const addMaterial = (el) => {
  materialsArray.value.push({
    materialClass: el,
  });
};
const removeMaterial = (el) => {
  console.log(el);
  materialsArray.value.splice(el, 1);
};

const onSaveToImg = () => {
  html2canvas(burgerRef.value, { backgroundColor: null }).then((canvas) => {
    saveAs(canvas.toDataURL("image/png"), "burger.png");
  });
};
const saveAs = (uri, filename) => {
  const link = document.createElement("a");
  link.href = uri;
  link.download = filename;
  link.click();
  link.remove();
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  .burgerWrapper {
    width: 300px;
    position: relative;
    margin: 100px 0 0 100px;
    .material {
      transition: all 1s ease;
    }
    .bun {
      width: 300px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: rgb(255, 166, 102);
      border: 1px solid black;
    }
    .top {
      border-radius: 2em 2em 0 0;
    }
    .bottom {
      height: 30px;
      line-height: 30px;
      border-radius: 0.5em;
    }
    .materialsWrapper {
      width: 300px;
      .patty {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: rgb(92, 55, 0);
        border: 1px solid black;
      }
      .cheese {
        width: 100%;
        height: 10px;
        line-height: 10px;
        background: yellow;
        border: 1px solid black;
      }
      .cucumber {
        width: 100%;
        height: 10px;
        line-height: 10px;
        background: rgb(0, 84, 11);
        border: 1px solid black;
      }
      .tomato {
        width: 100%;
        height: 20px;
        line-height: 20px;
        background: rgb(255, 12, 12);
        border: 1px solid black;
      }
    }
  }
  button {
    left: 350px;
    margin: 50px 0 0 10px;
  }
}
.materialFade-leave-to,
.materialFade-enter-from {
  opacity: 0;
  transform: translateX(150px);
}
.materialFade-leave-active {
  position: absolute;
}
</style>
