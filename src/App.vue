<template>
  <router-view />
  <div class="blank">공백</div>
</template>

<style lang="scss">
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
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
}
p {
  margin: 0;
}
.blank {
  width: 100%;
  height: 100vh;
  background: rgb(190, 190, 190);
}
</style>
