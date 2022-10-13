<template>
  <main class="container">
    <div class="input-wrap">
      <div v-if="emailText" class="input-text">
        <span
          v-for="(letter, index) in emailText"
          :key="index"
          class="input-text-letter"
          >{{ letter }}</span
        >
      </div>
      <div class="dreamy-input">
        <textarea
          v-model="emailValue"
          autocomplete="off"
          class="dreamy-input-control"
          type="text"
          @keydown.enter="submitMail"
        />
        <button class="dreamy-input-button" @click="submitMail">click</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

const emailValue = ref("");
const emailText = ref("");

const submitMail = () => {
  if (emailValue.value) {
    emailText.value =
      emailValue.value.length > 15
        ? `${emailValue.value.slice(0, 15)}...`
        : emailValue.value;
    emailValue.value = "";

    setTimeout(() => {
      const tlJiggle = gsap.timeline({
        delay: 1,
        defaults: {
          duration: 0.1,
        },
      });
      tlJiggle
        .to(".input-text-letter", {
          y: "random(-6, 4)",
        })
        .to(".input-text-letter", {
          y: "random(-6, 4)",
        })
        .to(".input-text-letter", {
          y: "random(-6, 4)",
        })
        .to(".input-text-letter", {
          y: "random(-6, 4)",
        })
        .to(".input-text-letter", {
          y: 0,
        })
        .to(".input-text-letter", {
          delay: 0,
          duration: 0.5,
          ease: "expo.in",
          x: 300,
          stagger: {
            amount: 0.3,
            from: "end",
          },
          onComplete: () => {
            emailText.value = "";
          },
        });
    }, 0);
  }
};
</script>

<style lang="scss">
// .container {
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   align-items: center;
//   width: 100%;
//   max-width: 400px;
// }

// .input-text {
//   position: absolute;
//   z-index: 5;
//   width: 17rem;
//   font-size: 1.25rem;
//   line-height: 1.5;
//   color: #87213c;
//   transform: translate(1rem, 0.625rem);
//   overflow: hidden;

//   &-letter {
//     display: inline-block;
//     transform-origin: center bottom;
//   }
// }

// .input-wrap {
//   position: relative;
// }

// .dreamy-input {
//   position: relative;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0.1875rem;
//     left: -0.125rem;
//     height: 100%;
//     width: 100%;
//     border: 3px solid #87213c;
//     pointer-events: none;
//     transition: border 0.5s ease-in-out;
//   }

//   &::after,
//   &-control {
//     border-radius: 3.125rem;
//   }

//   &-control {
//     width: 15.625rem;
//     height: 3.125rem;
//     padding: 0 calc(1rem + 3.125rem) 0 1rem;
//     border: 0;
//     background-color: #f9dde3;
//     font-size: 1.25rem;
//     color: #87213c;
//     caret-color: #ff2961;
//     transition: background-color 0.5s ease-in-out;

//     &:focus {
//       outline: none;
//     }

//     &:disabled {
//       background-color: #fcf2f5;
//     }
//   }

//   &:focus-within {
//     &::after {
//       border-color: #ff2961;
//     }
//   }

//   &-button {
//     display: grid;
//     place-items: center;
//     position: absolute;
//     top: calc(0.1875rem + 3px);
//     right: 0;
//     height: 3.125rem;
//     width: 3.125rem;
//     padding: 0;
//     border: 0;
//     cursor: pointer;
//     transition: 0.4s ease-in-out;
//   }
// }
$black: #87213c;
$white: #fff;

$primary-color: #f9dde3;
$primary-color-tint: #fcf2f5;
$secondary-color: #ff2961;
$accent-color: #fae798;

$mail-color: #326dcc;
$star-sparkly-color: #b8d7ff;

$primary-font: "Fredoka One", sans-serif;

:root {
  --black: #{$black};
  --white: #{$white};
  --primary-color: #{$primary-color};
  --primary-color-tint: #{$primary-color-tint};
  --secondary-color: #{$secondary-color};
  --accent-color: #{$accent-color};
  --mail-color: #{$mail-color};
  --star-color: #{$accent-color};
  --star-sparkly-color: #{$star-sparkly-color};
}

@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");

* {
  box-sizing: border-box;
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: var(--primary-color-tint);
  font-size: 16px;
  line-height: 1;
  font-family: $primary-font;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.input-text {
  position: absolute;
  z-index: 5;
  width: 17rem;
  font-size: 1.25rem;
  line-height: 1.5;
  color: var(--black);
  transform: translate(1rem, 0.625rem);
  overflow: hidden;

  &-letter {
    display: inline-block;
    transform-origin: center bottom;
  }
}

.input-wrap {
  position: relative;
}

.cloudy {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  transform: translate(-50%, -50%);

  &-poofs {
    fill: var(--white);
  }
}

.dreamy-input {
  --offset-top: 0.1875rem;
  --offset-left: -0.125rem;
  --control-height: 3.125rem;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: var(--offset-top);
    left: var(--offset-left);
    height: 100%;
    width: 100%;
    border: 3px solid var(--black);
    pointer-events: none;
    transition: border 0.5s ease-in-out;
  }

  &::after,
  &-control {
    border-radius: var(--control-height);
  }

  &-control {
    width: 15.625rem;
    height: var(--control-height);
    padding: 0.8rem calc(1rem + var(--control-height)) 0 1rem;
    border: 0;
    background-color: var(--primary-color);
    font-family: $primary-font;
    font-size: 1.25rem;
    color: var(--black);
    caret-color: var(--secondary-color);
    transition: background-color 0.5s ease-in-out;

    &:focus {
      outline: none;
    }

    &:disabled {
      background-color: var(--primary-color-tint);
    }
  }

  &:focus-within {
    &::after {
      border-color: var(--secondary-color);
    }
  }

  &-label,
  &-error {
    position: absolute;
    left: 1rem;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }

  &-label {
    top: -0.75rem;
    color: var(--black);
  }

  &-error {
    bottom: -1.5rem;
    color: var(--secondary-color);
  }

  &-button {
    display: grid;
    place-items: center;
    position: absolute;
    top: calc(var(--offset-top) + 3px);
    right: 0;
    height: var(--control-height);
    width: var(--control-height);
    padding: 0;
    border: 0;
    background-color: transparent;
    color: var(--white);
    cursor: pointer;
    transition: 0.4s ease-in-out;

    &-star {
      fill: currentColor;
      stroke: var(--star-stroke, transparent);
      stroke-width: 3px;
    }

    &-svg {
      width: 40%;
      overflow: visible;
    }

    &:focus {
      outline: none;
      color: var(--secondary-color);
    }

    &:hover {
      --star-stroke: var(--black);
      transform: scale(1.2);
      color: var(--accent-color);
    }
  }

  &.disabled {
    &::after {
      border-color: var(--primary-color);
    }

    .dreamy-input-button {
      color: var(--primary-color);
    }
  }
}
</style>
