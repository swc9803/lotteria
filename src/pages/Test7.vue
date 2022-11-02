<template>
  <div class="container">
    <div class="dd">
      <img src="../../public/car.jpg" />
    </div>
    dd
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  .dd {
    width: 400px;
    height: 400px;
    overflow: hidden;
    img {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
  }
}
</style>
