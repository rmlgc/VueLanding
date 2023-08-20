<script setup lang="ts">
import jsondata from '@/assets/json-data.json'
const jsonData = jsondata;
</script>
<template>
<section>
  <div class="resume-content">
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