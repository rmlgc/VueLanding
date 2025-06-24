<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>
<template>
  <section class="wrap-center wrap-wip" @click="open = !open">
    <span class="material-symbols-outlined">touch_app</span>
    <h1 :class="`text--interact text-center ${open ? 'open' : ''}`">
      <span :class="`${open ? 'inline-block' : ''}`">
        <span class="text--wip text-increase">W</span>
        <span class="text--wip text-reduces">ork&nbsp;</span>
      </span>
      <span :class="`${open ? 'inline-block' : ''}`">
        <span class="text--wip text-increase">I</span>
        <span class="text--wip text-reduces">n&nbsp;</span>
      </span>
      <span :class="`${open ? 'inline-block' : ''}`">
        <span class="text--wip text-increase">P</span>
        <span class="text--wip text-reduces">rogress</span>
      </span>
    </h1>
    <span class="material-symbols-outlined">touch_app</span>
  </section>
</template>
<style scoped lang="scss">
$deep: 10;
$textColor: var(--text-color-opacity);
$textBorderColor: var(--link-color);
$deepOpen: 3;
$textColorOpen: var(--link-background-color-opacity);
$textBorderColorOpen: var(--text-color);

@function makelongshadow($deep, $color, $borderColor) {
  $val: 0px 0px 3px $borderColor;

  @for $i from 1 through ($deep - 1) {
    $val: #{$val}, #{$i}px #{$i}px #{$color};
  }

  $val: #{$val}, #{$deep}px #{$deep}px 3px $borderColor;
  @return $val;
}

@mixin longshadow($deep, $color, $border) {
  text-shadow: makelongshadow($deep, $color, $border);
}

.text {
  &--wip {
    @include longshadow($deep, $textColor, $textBorderColor);
    shape-rendering: optimizeSpeed;
    color-rendering: optimizeSpeed;
    text-rendering: geometricPrecision;

    .open & {
      @include longshadow($deepOpen, $textColorOpen, $textBorderColorOpen);
    }
  }

  &-increase {
    font-size: 7.5rem;
    transition: font-size 1s cubic-bezier(.68, -0.55, .27, 1.55),
      text-shadow 1.5s cubic-bezier(.68, -0.55, .27, 1.55);
    font-weight: 900;
    animation: firstAnimationIncrease 3s cubic-bezier(.68, -0.55, .27, 1.55);

    .text--interact:hover &,
    .text--interact.open &,
    &.text--interact:hover {
      font-size: 4.7rem;
    }
  }

  &-reduces {
    font-size: 0;
    transition: font-size 1s cubic-bezier(.68, -0.55, .27, 1.55),
      text-shadow 1.5s cubic-bezier(.68, -0.55, .27, 1.55);
    font-weight: 900;
    animation: firstAnimationReduces 2.5s cubic-bezier(.68, -0.55, .27, 1.55);

    .text--interact:hover &,
    &.text--interact:hover {
      @media (hover: hover) {
        & {
          font-size: 3.2rem;
        }
      }
    }

    .text--interact.open & {
      font-size: 3.2rem;
    }

  }
}

.wrap-wip {
  min-height: 90vh;
  cursor: pointer;
}

@keyframes firstAnimationIncrease {
  0% {
    font-size: 4.7rem;
  }

  40% {
    font-size: 6rem;
  }

  80% {
    font-size: 7rem;
  }

  100% {
    font-size: 7.5rem;
  }
}

@keyframes firstAnimationReduces {
  0% {
    font-size: 3.5rem;
  }

  40% {
    font-size: 3rem;
  }

  80% {
    font-size: 1rem;
  }

  100% {
    font-size: -2rem;
  }
}
</style>