<script>

</script>
<template>
  <section class="wrap-center">
    <div>
      <h1 class="text--interact text-center">
        <span class="text-increase">
          W</span>
        <span class="text-reduces">ork
        </span>
        <span class="text-increase">I</span>
        <span class="text-reduces">n
        </span>
        <span class="text-increase">
          P</span>
        <span class="text-reduces">rogress
        </span>
      </h1>
    </div>
  </section>
</template>
<style scoped lang="scss">
.text {
  &-increase {
    font-size: 8rem;
    transition: font-size 1s cubic-bezier(.68, -0.55, .27, 1.55);
    font-weight: 900;
    animation: firstAnimationIncrease 3s cubic-bezier(.68, -0.55, .27, 1.55);

    .text--interact:hover &,
    &.text--interact:hover {
      font-size: 4.7rem;
    }
  }

  &-reduces {
    font-size: 0;
    transition: font-size 1s cubic-bezier(.68, -0.55, .27, 1.55);
    font-weight: 900;
    animation: firstAnimationReduces 2.5s cubic-bezier(.68, -0.55, .27, 1.55);

    .text--interact:hover &,
    &.text--interact:hover {
      font-size: 3.5rem;
    }
  }
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
    font-size: 8rem;
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