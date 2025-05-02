<script setup lang="ts">

</script>
<template>
  <section>
    <h2 class="text-h3"> Portfolio: </h2>
    <div class="portfolio-box">
      <div class="portfolio-item">
        <h3>Amigaria WebApp</h3>
        <p>Amigaria is an accessible web platform for social integration.</p>
        <p>developed in group in EOI frontend develop course, doing Agile methods and publish git versions.</p>
        <a class="active" href="https://amigaria-dev.vercel.app/" target="_blank">Amigaria - Landing</a>
        <a class="active" href="https://amigaria-app.vercel.app/login" target="_blank">Amigaria - WebApp</a>
      </div>
      <div class="portfolio-item">
        <h3>Vue Dummyportfolio</h3>
        <p>Work In Progress</p>
        <p>Simple Web App. render, connect to Rest Apis and list data</p>
        <p>Developed in Vue, using Quasar VueJs Components. for a simple mobile and desktop style design</p>
        <a class="active" href="https://rmlgc.github.io/dummyportfolio-vue/" target="_blank">Web</a>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.portfolio {
  &-box {
    position: relative;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

  }

  &-item {
    flex: 1 1 calc(50% - 2rem);
    position: sticky;
    min-height: 320px; 
    min-width: 320px; 
    border: 1px solid var(--text-color-opacity);
    box-shadow: 1px 1px 1px 1px var(--text-color-opacity);
    background-color: var(--text-color-opacity);
    color: var(--background-color-opacity);
    transition: all .75s ease-in-out;
    cursor: not-allowed;

    &:hover {
      background-color: var(--text-color);
      color: var(--background-color);
    }
  }
}
</style>