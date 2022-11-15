<template>
  <div class="container">
    <div class="conceptIntro">
      <p class="conceptIntro-title">개척정신</p>
      <p class="conceptIntro-des">
        롯데리아는 언제, 어디서나 고객의 마음을 촵-땡겨버릴 수 있도록 전국
        방방곡곡 매장을 오픈하는 개척정신을 발휘해왔습니다
      </p>
    </div>
    <Swiper class="slider" :slides-per-view="'auto'">
      <SwiperSlide class="slider-slide">
        <div class="slider-slide-content">
          <div class="slider-slide-content-margin">
            <p class="year">1979</p>
            <div class="hrLine" />
            <p class="yearDes">1979 서울 중구 소공동에 롯데리아 1호점 오픈</p>
          </div>
        </div>
        <div class="box" style="color: white">img</div>
      </SwiperSlide>
      <SwiperSlide class="slider-slide">
        <div class="slider-slide-content">
          <div class="slider-slide-content-margin">
            <p class="year">1983</p>
            <div class="hrLine" />
            <p class="yearDes">
              1983 업계 최초, 천안삼거리에 첫 고속도로 휴게소 지점 오픈
            </p>
          </div>
        </div>
        <div class="box" style="color: white">img</div>
      </SwiperSlide>
      <SwiperSlide class="slider-slide">
        <div class="slider-slide-content">
          <div class="slider-slide-content-margin">
            <p class="year">1983</p>
            <div class="hrLine" />
            <p class="yearDes">
              1983 업계 최초, 천안삼거리에 첫 고속도로 휴게소 지점 오픈
            </p>
          </div>
        </div>
        <div class="box" style="color: white">img</div>
      </SwiperSlide>
      <SwiperSlide class="slider-slide">
        <div class="slider-slide-content">
          <div class="slider-slide-content-margin">
            <p class="year">1983</p>
            <div class="hrLine" />
            <p class="yearDes">
              1983 업계 최초, 천안삼거리에 첫 고속도로 휴게소 지점 오픈
            </p>
          </div>
        </div>
        <div class="box" style="color: white">img</div>
      </SwiperSlide>
      <SwiperSlide class="slider-slide">
        <div class="slider-slide-content">
          <div class="slider-slide-content-margin">
            <p class="year">1983</p>
            <div class="hrLine" />
            <p class="yearDes">
              1983 업계 최초, 천안삼거리에 첫 고속도로 휴게소 지점 오픈
            </p>
          </div>
        </div>
        <div class="box" style="color: white">img</div>
      </SwiperSlide>
      <SwiperSlide class="slider-slide"></SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<style lang="scss">
.container {
  width: 100%;
  //   height: 100vh;
  background: #9e0602;
  font-family: "chab";
  .conceptIntro {
    position: relative;
    left: 50%;
    width: 48%;
    transform: translate(-50%, 0);
    text-align: center;
    color: #ffd519;
    &-title {
      font-size: 12vw;
      margin-bottom: 48px;
    }
    &-des {
      word-break: keep-all;
      margin-bottom: 100px;
      font-family: "ddak";
    }
  }
  .slider {
    &-slide {
      width: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      &-content {
        width: calc(100% / 3);
        &-margin {
          margin: 0 5%;
          .hrLine {
            position: relative;
            width: calc(100% - 20px);
            height: 2px;
            display: inline-block;
            margin: 15% 0;
            background: white;
            &:after {
              content: "";
              position: absolute;
              top: 50%;
              left: 100%;
              transform: translate(-50%, -50%);
              width: 15px;
              height: 15px;
              background: white;
              border-radius: 50%;
            }
          }
          p {
            color: white;
          }
          .year {
            font-size: 5vw;
          }
          .yearDes {
            font-size: 1vw;
            font-family: "ddak";
          }
        }
      }
      .box {
        width: calc(100% / 3 * 2);
        height: 0;
        padding-bottom: calc(100% / 3 * 2);
        margin-bottom: 100px;
        background: rgb(207, 207, 207);
      }
      &:nth-last-child(1) {
        width: 75%;
      }
    }
  }
}
</style>
