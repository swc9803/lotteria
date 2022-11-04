<template>
  <h1>2023 카운터</h1>
  <p>{{ dayRef }}</p>
  <p>{{ counterRef }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

const dayRef = ref("");
const counterRef = ref("");

const dueDate = new Date("01/01/2023 00:00 AM"); // D-day
const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const countDown = () => {
  const nowDate = new Date();
  const toDueDate = dueDate - nowDate;

  const days = Math.floor(toDueDate / _day);
  const hours = Math.floor((toDueDate % _day) / _hour);
  const minutes = Math.floor((toDueDate % _hour) / _minute);
  const seconds = Math.floor((toDueDate % _minute) / _second);

  dayRef.value = `D-${formatTime(days)}`;
  counterRef.value = `${formatTime(hours)}`;
  counterRef.value += `:${formatTime(minutes)}`;
  counterRef.value += `:${formatTime(seconds)}`;
};

onMounted(() => {
  countDown();
  setInterval(countDown, 1000);
});
</script>

<style lang="scss" scoped></style>
