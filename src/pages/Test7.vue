<template>
  <div class="container">
    <div class="wave" />
    <div class="msgWrapper">
      <p>
        평범한 글자에는 담을 수 없었던 롯데리아 스피릿! 촵-하면 땡겨지는 행운과
        딱-하면 붙어버리는 소망들로 모두의 2023을 응원할게
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background: #f78716;
  .wave {
    --mask: radial-gradient(
          4.5vw at 50% calc(100% - 5.74vw),
          #000 99%,
          #0000 101%
        )
        calc(50% - 8.5vw) 0/17vw 100%,
      radial-gradient(4.5vw at 50% calc(100% + 1.49vw), #0000 99%, #000 101%)
        50% calc(100% - 4.25vw) / 17vw 100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    background: #ffa71e;
    height: 10vw;
    z-index: 9;
  }
  .msgWrapper {
    text-align: center;
    color: white;
    background: #f78716;
    p {
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      width: 56%;
      font-family: "chab";
      font-size: 4vw;
      word-break: keep-all;
    }
  }
}
</style>
