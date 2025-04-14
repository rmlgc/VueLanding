<script setup lang="ts">
import jsondata from '@/assets/json-data.json'
const jsonData = jsondata;
</script>
<template>
  <section>
    <div class="trajectory-timeline">
      <h2 class="title-tag">Jobs trajectory</h2>
      <div v-for="trajectory in jsonData.jobs_trajectory" :key="trajectory.company" class="trajectory-timeline-job">
        <div class="trajectory-timeline-date">
          <span>{{ trajectory.date_start }}</span>
          <span>{{ trajectory.date_end }}</span>
        </div>
        <div class="trajectory-timeline-content">
          <h4>{{ trajectory.job }} - <small>{{ trajectory.company }}</small></h4>
          <p data-tecnologiesUsed="Tecnologies like PHP/smarty, Html/Jquery, HereMapsApi, TraccarApi ">
            {{ trajectory.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="academic-timeline">
      <h3 class="title-tag">Academic grade</h3>
      <ul class="academic-timeline-content">
        <li>
          FP grado superior DAW (Desarrollo de Aplicaciones Web)
        </li>
        <li>
          FP grado medio SMR (Sistemas Microinformaticos y Redes)
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped lang="scss">
.trajectory-timeline {
  &-job {
    display: flex;
    min-height: 320px;
    border-bottom: 1px solid var(--text-color-opacity);

    &--right {
      flex-flow: row-reverse;
    }
  }

  &-content {
    // padding: 20px 8px;
  }

  &-date {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(180deg);
    display: flex;
    justify-content: space-around;
    border-right: 1px solid var(--text-color-opacity);
    border-left: 1px solid var(--text-color-opacity);
    padding: 20px 8px;
    background: var(--text-color);
    color: var(--background-color);
    font-size: 0.75rem;

    &--right {}
  }
}

.academic-timeline {
  padding: 1rem 0px;

  &-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-flow: row;
    gap: 2rem;
  }
}
</style>