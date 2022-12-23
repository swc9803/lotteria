<template>
  <div class="container" @click="ss">
    <div class="box" @click.stop="dd">box</div>
  </div>
</template>

<script setup>
const ss = () => {
  console.log("container");
};
const dd = () => {
  console.log("clicked");
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  .box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: gray;
  }
}
</style>
