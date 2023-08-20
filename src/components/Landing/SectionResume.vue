<script setup lang="ts">
import jsondata from '@/assets/json-data.json'
const jsonData = jsondata;
</script>
<template>
<section id="elResume" ref="elResume" class="content section-card">
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

        <div class="resume-content">
          <div class="resume-item resume-item--fullstack">
            <h3> FullStack</h3>
            <p>
              <small>
                I have little experience with apache servers, just enough to manage a web server. I am currently
                interested in learning how to manage/deploy serverless web/App
              </small>
            </p>
            <p>
              I feel more confident designing and developing the client side (<a href="#resumeFrontend"
                                                                                 :class="`bg-glass active`">FrontEnd</a>)
            </p>
            <p>
              however, developing the server side is always a challenge, it's not my best path, but being constantly
              learning is rewarding(<a href="#resumeFrontend"
                                       :class="`bg-glass active`">BackEnd</a>)
            </p>
          </div>
          <div id="resumeFrontend" class="resume-item resume-item--frontend">
            <h3>FrontEnd</h3>
            <p class="text-body2">my knowledge:</p>
            <ol>
              <li>
                Html
              </li>
              <li>
                Css
                <ul>
                  <li>
                    scss
                  </li>
                  <li>
                    sass
                  </li>
                  <li>
                    PostCSS
                  </li>
                  <li>
                    less
                  </li>
                </ul>
              </li>
              <li>
                Javascript
                <ul>
                  <li>
                    Vue3
                  </li>
                  <li>
                    Angular
                  </li>
                  <li>
                    React
                  </li>
                  <li>
                    Svelt
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div class="resume-item resume-item--backend">
            <h3>Backend</h3>
            <p class="text-body2">my knowledge</p>
            <ol>
              <li>
                php
                <ul>
                  <li>
                    Framework Laravel
                  </li>
                  <li>
                    Framework CakePhP
                  </li>
                  <li>
                    Smarty Template
                  </li>
                </ul>
              </li>
              <li>
                Javascript
                <ul>
                  <li>
                    NodeJS
                  </li>
                  <li>
                    Deno
                  </li>
                </ul>
              </li>
              <li>
                others
                <ul>
                  <li>
                    python
                  </li>
                  <li>
                    Java
                  </li>
                </ul>
              </li>
            </ol>
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

</style>