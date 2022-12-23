<script setup lang="ts">

</script>

<template>
  <main>
    <section>
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
  </main>
</template>

<style lang="scss">
.text{
  &-increase{
    font-size: 10rem;
  .text--interact:hover &,
  &.text--interact:hover{
    font-size: 4rem;
  }
  }
  &-reduces{
    font-size: 0;
    .text--interact:hover &,
    &.text--interact:hover{
      font-size: 4rem;
    }
  }
  &-center{
    text-align: center;
  }
}
</style>
