<template>
  <div class="container">
    <div class="bun-top">
      새해엔
      <div class="background" />
    </div>
    <div class="lettuce">
      어쩌구
      <div class="background" />
    </div>
    <div class="tomato">
      저쩌구
      <div class="background" />
    </div>
    <div class="cheese">
      아아아
      <div class="background" />
    </div>
    <div class="patty">
      나나나
      <div class="background" />
    </div>
    <div class="bun-bottom">
      할거야
      <div class="background" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  * {
    position: relative;
    left: 20%;
    width: 100px;
    height: 30px;
    margin-top: 5px;
    font-size: 2em;
    font-weight: 900;
    font-style: italic;
    transform: scaleX(4);
    * {
      width: 100%;
      height: 100%;
    }
  }
  .bun-top {
    color: rgb(197, 141, 95);
  }
  .lettuce {
    color: rgb(73, 149, 10);
  }
  .tomato {
    color: rgb(180, 10, 10);
  }
  .cheese {
    color: rgb(168, 146, 2);
  }
  .patty {
    color: rgb(83, 49, 5);
  }
  .bun-bottom {
    color: rgb(197, 141, 95);
  }
}
</style>
