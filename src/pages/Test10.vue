<template>
  <div v-show="loading">내년에 열립니다.</div>
  <div v-show="!loading" class="container">
    <!-- {{ currTime }} -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const dueDate = new Date("2022-10-19 16:54:10");
const loading = ref(false);

onMounted(() => {
  loading.value = true;
  fetch("https://worldtimeapi.org/api/timezone/Asia/Seoul")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.datetime < dueDate);
      console.log(data.datetime);
      //   console.log(dueDate);
      if (dueDate < data.datetime) {
        loading.value = false;
      }
    });
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
}
</style>
