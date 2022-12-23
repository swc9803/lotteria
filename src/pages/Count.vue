<template>
  <div class="dateWrapper">
    <p class="counterTitle">2023<br />새해맞이 응원<br />프로젝트</p>
    <div class="counter">
      <p class="counter-day">D-{{ dayRef }}</p>
      <p class="counter-date">{{ counterRef }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

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

const nowDate = new Date();
const toDueDate = dueDate - nowDate;
const days = Math.floor(toDueDate / _day);
const countDown = () => {
  const nowDate = new Date();
  const toDueDate = dueDate - nowDate;
  const days = Math.floor(toDueDate / _day);
  const hours = Math.floor((toDueDate % _day) / _hour);
  const minutes = Math.floor((toDueDate % _hour) / _minute);
  const seconds = Math.floor((toDueDate % _minute) / _second);

  dayRef.value = formatTime(days);
  counterRef.value = formatTime(hours);
  counterRef.value += `:${formatTime(minutes)}`;
  counterRef.value += `:${formatTime(seconds)}`;
};

onMounted(() => {
  countDown();
  setInterval(countDown, 1000);

  const Cont = { val: 99 };
  gsap.to(Cont, {
    duration: 3,
    val: formatTime(days),
    roundProps: "val",
    onUpdate: function () {
      dayRef.value = Cont.val;
    },
  });
});
</script>

<style lang="scss" scoped>
.dateWrapper {
  width: 100%;
  height: 100vh;
  background: #132184;
  font-family: "chab";
  .introWrapper {
    width: 100%;
    .twinkle {
      width: 100%;
      svg {
        position: absolute;
        &:nth-child(1) {
          width: 5%;
          top: 32vw;
          left: 10%;
        }
        &:nth-child(2) {
          width: 5%;
          top: 36vw;
          right: 12%;
        }
        &:nth-child(3) {
          width: 3%;
          top: 30vw;
          right: 5%;
        }
      }
    }
    .cloudLeft {
      position: absolute;
      width: 40%;
      opacity: 0.7;
    }
    .cloudRight {
      position: absolute;
      width: 40%;
      opacity: 0.7;
      right: 0;
      transform: rotateY(180deg);
    }
  }
  .counterTitle {
    position: relative;
    top: 3%;
    font-size: 3vw;
    line-height: 4.5vw;
    text-align: center;
    color: white;
  }
  .counter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // width: 45%;
    font-size: 10vw;
    color: #fff800;
    p {
      position: relative;
      //   width: 100%;
    }
    &-day {
      text-align: center;
    }
    &-date {
      left: 1vw;
    }
  }
}
</style>
