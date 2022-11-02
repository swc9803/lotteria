<template>
  <div class="container">
    <swiper
      class="slider"
      :modules="[Pagination, Autoplay]"
      :loop="true"
      :space-between="20"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      direction="vertical"
    >
      <swiper-slide v-for="(slide, index) in 5" :key="slide.id" class="slide">
        <p>hi i am {{ index + 1 }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
</script>

<style lang="scss">
@import "@/assets/swiper-pagination.scss";

.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .slider {
    height: 500px;
    .slide {
      background: rgb(206, 206, 206);
    }
  }
}
</style>
