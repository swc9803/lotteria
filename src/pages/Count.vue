<template>
  <h1>2023 카운터</h1>
  <button @click="time(t)">time</button>
  <button @click="resume">resume</button>
  <button @click="pause">pause</button>
  <svg
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
  >
    <defs>
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_3_G"
        fill="freeze"
        attributeName="transform"
        from="-24 -43"
        to="-24 -43"
        type="translate"
        additive="sum"
        keyTimes="0;1"
        values="-24 -43;-24 -43"
        keySplines="0 0 1 1"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_2_G"
        fill="freeze"
        attributeName="transform"
        from="1 1"
        to="1 1"
        type="scale"
        additive="sum"
        keyTimes="0;0.4666667;0.5333333;1"
        values="1 1;1.1 0.9;1.1 0.9;1 1"
        keySplines="0.7 0 0.7 0.986;0.7 0.047 0.7 0.98;0.7 0 0.7 1"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_2_G"
        fill="freeze"
        attributeName="transform"
        from="-24.001 -30"
        to="-24.001 -30"
        type="translate"
        additive="sum"
        keyTimes="0;1"
        values="-24.001 -30;-24.001 -30"
        keySplines="0 0 1 1"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_1_G"
        fill="freeze"
        attributeName="transform"
        from="1 1"
        to="1 1"
        type="scale"
        additive="sum"
        keyTimes="0;0.2666667;0.4666667;0.5333333;0.8;1"
        values="1 1;0.9 0.9;1 1;1 1;0.9 0.9;1 1"
        keySplines="0.7 0 0.7 1;0.7 0.014 0.7 0.994;0.7 0.047 0.7 0.98;0.7 0 0.7 1;0.7 0.014 0.7 0.994"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_1_G"
        fill="freeze"
        attributeName="transform"
        from="-24 -24"
        to="-24 -24"
        type="translate"
        additive="sum"
        keyTimes="0;1"
        values="-24 -24;-24 -24"
        keySplines="0 0 1 1"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_0_G_D_0_P_0_G_0_T_0"
        fill="freeze"
        attributeName="transform"
        from="0.8 0.8"
        to="0.8 0.8"
        type="scale"
        additive="sum"
        keyTimes="0;0.4;0.4666667;0.5333333;0.6;1"
        values="0.8 0.8;1.2 1.2;1 1;1 1;1.2 1.2;0.8 0.8"
        keySplines="0.7 0 0.7 1;0.7 0 0.7 1;0.7 0 0.7 1;0.7 0 0.7 1;0.7 0 0.7 1"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_0_G_D_0_P_0_G_0_T_0"
        fill="freeze"
        attributeName="transform"
        from="0.8 0.8"
        to="0.8 0.8"
        type="scale"
        additive="sum"
        keyTimes="0;0.4;0.4666667;0.5333333;0.6;1"
        values="0.8 0.8;1.2 1.2;1 1;1 1;1.2 1.2;0.8 0.8"
        keySplines="0.7 0 0.7 1;0.7 0 0.7 1;0.7 0 0.7 1;0.7 0 0.7 1;0.7 0 0.7 1"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_0_G"
        fill="freeze"
        attributeName="transform"
        from="1 1"
        to="1 1"
        type="scale"
        additive="sum"
        keyTimes="0;0.2666667;0.4666667;0.5333333;0.8;1"
        values="1 1;0.9 0.9;1 1;1 1;0.9 0.9;1 1"
        keySplines="0.7 0 0.7 1;0.7 0.014 0.7 0.994;0.7 0.047 0.7 0.98;0.7 0 0.7 1;0.7 0.014 0.7 0.994"
        calcMode="spline"
      />
      <animateTransform
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_0_G"
        fill="freeze"
        attributeName="transform"
        from="-24 -24"
        to="-24 -24"
        type="translate"
        additive="sum"
        keyTimes="0;1"
        values="-24 -24;-24 -24"
        keySplines="0 0 1 1"
        calcMode="spline"
      />
      <animateMotion
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_3_G"
        fill="freeze"
        keyTimes="0;0.4666667;0.5333333;1"
        path="M24 43 C24,48 24,68 24,73 C24,73 24,73 24,73 C24,68 24,48 24,43"
        keyPoints="0;0.5;0.5;1"
        keySplines="0.6 0 0.6 1;0.6 0.6 0.6 0.6;0.6 0 0.6 1"
        calcMode="spline"
      />
      <animateMotion
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_2_G"
        fill="freeze"
        keyTimes="0;0.4666667;0.5333333;1"
        path="M24 30 C24,34.83 24,54.17 24,59 C24,59 24,59 24,59 C24,54.17 24,34.83 24,30"
        keyPoints="0;0.5;0.5;1"
        keySplines="0.7 0 0.7 1;0.7 0.7 0.7 0.7;0.7 0 0.7 1"
        calcMode="spline"
      />
      <animateMotion
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_0_G_D_0_P_0_G_0_T_0"
        fill="freeze"
        keyTimes="0;0.4666667;0.5333333;1"
        path="M24.14 -2.01 C24.14,2.28 24.14,19.45 24.14,23.74 C24.14,23.74 24.14,23.74 24.14,23.74 C24.14,19.45 24.14,2.28 24.14,-2.01"
        keyPoints="0;0.5;0.5;1"
        keySplines="0.7 0 0.7 1;0.7 0.7 0.7 0.7;0.7 0 0.7 1"
        calcMode="spline"
      />
      <animateMotion
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_0_G_D_0_P_0_G_0_T_0"
        fill="freeze"
        keyTimes="0;0.4666667;0.5333333;1"
        path="M24.14 -2.01 C24.14,2.28 24.14,19.45 24.14,23.74 C24.14,23.74 24.14,23.74 24.14,23.74 C24.14,19.45 24.14,2.28 24.14,-2.01"
        keyPoints="0;0.5;0.5;1"
        keySplines="0.7 0 0.7 1;0.7 0.7 0.7 0.7;0.7 0 0.7 1"
        calcMode="spline"
      />
      <animate
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_1_G_D_0_P_0"
        fill="freeze"
        attributeName="d"
        attributeType="XML"
        from="M48 16.75 C48,19.14 45.93,22 43.2,22 C43.2,22 4.8,22 4.8,22 C2.07,22 0,19.14 0,16.75 C0,6.98 10.75,0 24,0 C37.26,0 48,6.98 48,16.75z"
        to="M48 16.75 C48,19.14 45.93,22 43.2,22 C43.2,22 4.8,22 4.8,22 C2.07,22 0,19.14 0,16.75 C0,6.98 10.75,0 24,0 C37.26,0 48,6.98 48,16.75z"
        keyTimes="0;0.4666667;0.5333333;1"
        values="M48 16.75 C48,19.14 45.93,22 43.2,22 C43.2,22 4.8,22 4.8,22 C2.07,22 0,19.14 0,16.75 C0,6.98 10.75,0 24,0 C37.26,0 48,6.98 48,16.75z ;M48 24 C48,37.12 37.25,48.13 24.06,48 C23.93,48 24.13,48 24,48 C10.74,48 0,37.26 0,24 C0,11 10.75,0 24,0 C37.26,0 48,10.75 48,24z ;M48 24 C48,37.12 37.25,48.13 24.06,48 C23.93,48 24.13,48 24,48 C10.74,48 0,37.26 0,24 C0,11 10.75,0 24,0 C37.26,0 48,10.75 48,24z ;M48 16.75 C48,19.14 45.93,22 43.2,22 C43.2,22 4.8,22 4.8,22 C2.07,22 0,19.14 0,16.75 C0,6.98 10.75,0 24,0 C37.26,0 48,6.98 48,16.75z"
        keySplines="0.7 0 0.833 1;0.7 0 0.833 1;0.7 0 0.7 1"
        calcMode="spline"
      />
      <animate
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        xlink:href="#_R_G_L_0_G_D_0_P_0"
        fill="freeze"
        attributeName="d"
        attributeType="XML"
        from="M-16 0 C-16,-1.1 -15.11,-2 -14,-2 C-14,-2 14,-2 14,-2 C15.1,-2 16,-1.1 16,0 C16,1.11 15.1,2 14,2 C14,2 -14,2 -14,2 C-15.11,2 -16,1.1 -16,0z"
        to="M-16 0 C-16,-1.1 -15.11,-2 -14,-2 C-14,-2 14,-2 14,-2 C15.1,-2 16,-1.1 16,0 C16,1.11 15.1,2 14,2 C14,2 -14,2 -14,2 C-15.11,2 -16,1.1 -16,0z"
        keyTimes="0;0.4666667;0.5333333;1"
        values="M-16 0 C-16,-1.1 -15.11,-2 -14,-2 C-14,-2 14,-2 14,-2 C15.1,-2 16,-1.1 16,0 C16,1.11 15.1,2 14,2 C14,2 -14,2 -14,2 C-15.11,2 -16,1.1 -16,0z M16 0 C16,1.11 15.1,2 14,2 C14,2 -14,2 -14,2 C-15.1,2 -16,1.11 -16,0 C-16,-1.1 -15.1,-2 -14,-2 C-14,-2 14,-2 14,-2 C15.1,-2 16,-1.1 16,0z ;M-11.31 -11.31 C-10.53,-12.09 -9.27,-12.09 -8.49,-11.31 C-8.49,-11.31 11.31,8.49 11.31,8.49 C12.1,9.27 12.1,10.53 11.31,11.31 C10.53,12.1 9.27,12.1 8.49,11.31 C8.49,11.31 -11.31,-8.49 -11.31,-8.49 C-12.09,-9.27 -12.09,-10.53 -11.31,-11.31z M11.31 -11.31 C12.1,-10.53 12.1,-9.27 11.31,-8.49 C11.31,-8.49 -8.49,11.31 -8.49,11.31 C-9.27,12.1 -10.53,12.1 -11.31,11.31 C-12.09,10.53 -12.09,9.27 -11.31,8.49 C-11.31,8.49 8.49,-11.31 8.49,-11.31 C9.27,-12.09 10.53,-12.09 11.31,-11.31z ;M-11.31 -11.31 C-10.53,-12.09 -9.27,-12.09 -8.49,-11.31 C-8.49,-11.31 11.31,8.49 11.31,8.49 C12.1,9.27 12.1,10.53 11.31,11.31 C10.53,12.1 9.27,12.1 8.49,11.31 C8.49,11.31 -11.31,-8.49 -11.31,-8.49 C-12.09,-9.27 -12.09,-10.53 -11.31,-11.31z M11.31 -11.31 C12.1,-10.53 12.1,-9.27 11.31,-8.49 C11.31,-8.49 -8.49,11.31 -8.49,11.31 C-9.27,12.1 -10.53,12.1 -11.31,11.31 C-12.09,10.53 -12.09,9.27 -11.31,8.49 C-11.31,8.49 8.49,-11.31 8.49,-11.31 C9.27,-12.09 10.53,-12.09 11.31,-11.31z ;M-16 0 C-16,-1.1 -15.11,-2 -14,-2 C-14,-2 14,-2 14,-2 C15.1,-2 16,-1.1 16,0 C16,1.11 15.1,2 14,2 C14,2 -14,2 -14,2 C-15.11,2 -16,1.1 -16,0z M16 0 C16,1.11 15.1,2 14,2 C14,2 -14,2 -14,2 C-15.1,2 -16,1.11 -16,0 C-16,-1.1 -15.1,-2 -14,-2 C-14,-2 14,-2 14,-2 C15.1,-2 16,-1.1 16,0z"
        keySplines="0.143 1 0.6 1;0.143 1 0.6 1;0.143 1 0.6 1"
        calcMode="spline"
      />
      <animate
        attributeType="XML"
        attributeName="opacity"
        dur="1s"
        from="0"
        to="1"
        xlink:href="#time_group"
      />
    </defs>
    <g id="_R_G">
      <g id="_R_G_L_3_G">
        <path
          id="_R_G_L_3_G_D_0_P_0"
          fill="#1e1e25"
          fill-opacity="1"
          fill-rule="nonzero"
          d="M48 41.15c0 4.4-3.33 6.85-13.32 6.85H13.32C3.33 48 0 45.55 0 41.15 0 38.72 1.26 38 2.52 38h42.96c1.26 0 2.52.72 2.52 3.15z"
        />
      </g>
      <g id="_R_G_L_2_G">
        <path
          id="_R_G_L_2_G_D_0_P_0"
          fill="#1e1e25"
          fill-opacity="1"
          fill-rule="nonzero"
          d="M42.99 26.29H5.01c-2.05 0-3.71 1.66-3.71 3.71s1.66 3.71 3.71 3.71h37.98c2.05 0 3.71-1.66 3.71-3.71s-1.66-3.71-3.71-3.71z"
        />
      </g>
      <g id="_R_G_L_1_G" transform="translate(24 24)">
        <path
          id="_R_G_L_1_G_D_0_P_0"
          fill="#1e1e25"
          fill-opacity="1"
          fill-rule="nonzero"
          d="M48 16.75c0 2.39-2.07 5.25-4.8 5.25H4.8C2.07 22 0 19.14 0 16.75 0 6.98 10.75 0 24 0c13.26 0 24 6.98 24 16.75z"
        />
      </g>
      <g id="_R_G_L_0_G" transform="translate(24 24)">
        <g id="_R_G_L_0_G_D_0_P_0_G_0_T_0">
          <g id="_R_G_L_0_G_D_0_P_0_G_0_T_0">
            <path
              id="_R_G_L_0_G_D_0_P_0"
              fill="#fff"
              fill-opacity="1"
              fill-rule="nonzero"
              d="M-16 0a2 2 0 0 1 2-2h28a2 2 0 1 1 0 4h-28a2 2 0 0 1-2-2z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
  <p>{{ dayRef }}</p>
  <p>{{ counterRef }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

const svgRef = ref("");
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

const time = (t) => {
  svgRef.value.setCurrentTime(t);
};
const resume = () => {
  svgRef.value.unpauseAnimations();
};
const pause = () => {
  svgRef.value.pauseAnimations();
};

onMounted(() => {
  svgRef.value.pauseAnimations();
  setTimeout(() => {
    svgRef.value.unpauseAnimations();
  }, 2000);
  countDown();
  setInterval(countDown, 1000);
});
</script>

<style lang="scss" scoped>
svg {
  width: 100px;
}
</style>
