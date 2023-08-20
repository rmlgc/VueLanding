<script setup lang="ts">
import jsondata from '@/assets/json-data.json'
const jsonData = jsondata;
</script>
<template>
<section>
        <h2>Jobs trajectory</h2>
         <div class="trajectory-timeline">
          <div v-for="trajectory in jsonData.jobs_trajectory" :key="trajectory.company" class="trajectory-timeline-job">
            <div class="trajectory-timeline-date">
                <span>{{trajectory.date_start}}</span>
                <span>{{trajectory.date_end}}</span>
            </div>
            <div class="trajectory-timeline-content">
              <h4>{{trajectory.job}} - <small>{{trajectory.company}}</small></h4>
              <p data-tecnologiesUsed="Tecnologies like PHP/smarty, Html/Jquery, HereMapsApi, TraccarApi ">
                {{trajectory.description}}
              </p>
            </div>
          </div>
         </div>

        <h3>Academic grade</h3>
        <ul>
          <li>
            FP grado superior DAW (Desarrollo de Aplicaciones Web)
          </li>
          <li>
            FP grado medio SMR (Sistemas Microinformaticos y Redes)
          </li>
        </ul>
        
      </section>
</template>
<style scoped lang="scss">
.trajectory-timeline {
  &-job{
    display: flex;
    min-height: 450px;
    border-bottom: 1px solid white;
    &--right{
      flex-flow: row-reverse;
    }
  }
  &-content{
    padding: 20px 8px;
  }
  &-date{
    writing-mode: sideways-lr;
    text-orientation: mixed;
    display: flex;
    justify-content: space-around;
    border-right: 1px solid white;
    padding: 20px 8px;
    background: var(--text-color);
    color:var(--background-color);
    &--right{

    }
  }
}
</style>