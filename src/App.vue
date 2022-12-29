<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useIntersectionObserver} from '@vueuse/core'

import WipPage from '@/components/Landing/WipPage.vue'

const elHome = ref(null)
const elHomeIsVisible = ref(false)
const elWip = ref(null)
const elWipIsVisible = ref(false)
const elAboutMe = ref(null)
const elAboutMeIsVisible = ref(false)
const elService = ref(null)
const elServiceIsVisible = ref(false)
const elResume = ref(null)
const elResumeIsVisible = ref(false)
const elPortfolio = ref(null)
const elPortfolioIsVisible = ref(false)
const elContact = ref(null)
const elContactIsVisible = ref(false)
const pageIsLoad = ref(false)

const isMenuOpen = ref(false)

const scrollTo = (elemento: any) => {
  console.log(elemento)
  let targetElemnt = elemento;
  if (elemento.value) {
    const {$el}: any = elemento.value;
    targetElemnt = $el
  }
  targetElemnt.scrollIntoView({behavior: "smooth"})
  isMenuOpen.value = false;
}

onMounted(() => {
  let options = {}

  document.onreadystatechange = () => { //To load the app only after all libraries are loaded
    if (document.readyState == "complete") {
      pageIsLoad.value = true;
      console.log('PAGE LOADED')
    }
  }

  const {$el}: any = elWip.value;
  initIntersection($el, elWipIsVisible, document.querySelector('body'), options)
  initIntersection(elAboutMe.value, elAboutMeIsVisible, document.querySelector('body'), options)
  initIntersection(elService.value, elServiceIsVisible, document.querySelector('body'), options)
  initIntersection(elResume.value, elResumeIsVisible, document.querySelector('body'), options)
  initIntersection(elPortfolio.value, elPortfolioIsVisible, document.querySelector('body'), options)
  initIntersection(elContact.value, elContactIsVisible, document.querySelector('body'), options)

})

const initIntersection = (element: any, elementIsVisible: any, elementScroll: any, newOptions = {}) => {
  let options = {
    threshold: 0.12,
    ...newOptions
  }

  console.log(element)
  console.log(options)
  useIntersectionObserver(
    element,
    ([{isIntersecting}], observerElement) => {
      elementIsVisible.value = isIntersecting
    },
    options
  )
}

</script>

<template>
  <WipPage id="elWip" ref="elWip" class="content-full"></WipPage>
  <main v-show="pageIsLoad">
    <header @click.self="isMenuOpen=!isMenuOpen" :class="`${isMenuOpen ? 'open bg-glass' : ''}`">
      <div
        :class="`header-menu ${isMenuOpen ? 'header-menu-full bg-glass--fat' : 'bg-glass--slim'} bg-glass-secondary `">
        <div class="header-menu-head text-center">
          <a href="https://linktr.ee/rommelgc" target="_blank"
             class="header-menu-title decoration-none text-spacing-none">
            <span class="text-increase">R</span>
            <span class="text-reduces">ommel</span>
            <span class="text-increase">G</span>
            <span class="text-reduces">arcia</span>
            <span class="text-increase">C</span>
            <span class="text-reduces">oronado</span>
          </a>
          <div class="header-menu-btn" @click="isMenuOpen=!isMenuOpen">
            <span v-if="isMenuOpen" class="material-symbols-rounded">close</span>
            <span v-else class="material-symbols-rounded">menu</span>
          </div>
        </div>
        <div class="header-menu-content">
          <a @click="scrollTo(elAboutMe)"
             :class="`header-menu-link ${elAboutMeIsVisible ? 'active bg-glass' : ''}`"><span
            class="material-symbols-rounded">
person
</span> About me</a>
          <a style="display: none;" @click="scrollTo(elService)"
             :class="`header-menu-link ${elServiceIsVisible ? 'active bg-glass' : ''}`"><span
            class="material-symbols-rounded">
design_services
</span> Service</a>
          <a @click="scrollTo(elResume)" :class="`header-menu-link ${elResumeIsVisible ? 'active bg-glass' : ''}`"><span
            class="material-symbols-rounded">
school
</span> Resume</a>
          <a @click="scrollTo(elPortfolio)"
             :class="`header-menu-link ${elPortfolioIsVisible ? 'active bg-glass' : ''}`"><span
            class="material-symbols-rounded">
important_devices
</span> Portfolio</a>
          <a @click="scrollTo(elContact)"
             :class="`header-menu-link ${elContactIsVisible ? 'active bg-glass' : ''}`"><span
            class="material-symbols-rounded">
contact_mail
</span> Contact</a>
        </div>
      </div>
    </header>
    <div class="main-content">
      <section id="elAboutMe" ref="elAboutMe" class="content section-card">
        <h2 class="text-h6"> 👋 Hi There? I’m Rommel</h2>
        <p class="text-body2">
          I have a 2 year career as a 'web developer' && <span class="inline-block">2 years of learning pregress with my own projects</span>
        </p>
        <hr>
        <p class="text-body2">🧑‍🎓 Professional Formation Grade as Web Application Developer 👨‍💻</p>
        <p class="text-h6">
          $ ✨🖥️ Frontend web developer 📐📱
        </p>
        <p class="text-h6">
          $ 📱✨ FullStack web developer 🗄️🖥️
        </p>
        <p class="text-body1">
          $ <span class="text-body2">🖥️🗄️ Backend web developer 💽🖥️</span>
        </p>
        <p class="text-body1">
          $ <small class="text-body2">🧰 Helpdesk Operator 🖱️</small>
        </p>
        <hr>
        <p>
          🧑‍🎨 my free time:
        </p>
        <p class="text-body1">
          $ <small class="text-body2">👾 Play Videogames 🎲</small>
        </p>
        <p class="text-h6">
          $ 🎥 Content creator 🐒
        </p>
      </section>
      <hr/>
      <section style="display: none;" id="elService" ref="elService" class="content section-card">
        <h2 class="text-h3"> Service </h2>
      <hr/>
      </section>
      <section id="elResume" ref="elResume" class="content section-card">
        <h2 class="text-h3"> Resume </h2>
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
        <h3>Jobs trajectory</h3>
        <ul>
          <li>
            GF-tic
          </li>
          <li>
            RefineriaWeb
          </li>
          <li>
            Boomeraling
          </li>
        </ul>
      </section>
      <hr/>
      <section id="elPortfolio" ref="elPortfolio" class="content section-card wrap-center">
        <h2 class="text-h3"> Portfolio: </h2>
        <div>
          <h3>Amigaria WebApp</h3>
          <p>Amigaria is an accessible web platform for social integration.</p>
          <p>developed in group in EOI frontend develop course, doing Agile methods and publish git versions.</p>
          <a class="active" href="https://amigaria.com/">Amigaria</a>
        </div>
        <div>
          <h3>Vue Dummyportfolio</h3>
          <p>Work In Progress</p>
          <p>Simple Web App. render, connect to Rest Apis and list data</p>
          <p>Developed in Vue, using Quasar VueJs Components. for a simple mobile and desktop style design</p>
          <a class="active" href="https://rmlgc.github.io/dummyportfolio-vue/">Web</a>
        </div>

      </section>
      <hr/>
      <section id="elContact" ref="elContact" class="content section-card wrap-center">
        <a href="mailto:rommelgarcia4b@gmail.com" class="active">
          <h2 class="text-h3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        </a>
      </section>
      <footer>
        <a href="https://linktr.ee/rommelgc" target="_blank">Rommel Garcia Coronado</a>
      </footer>
    </div>
  </main>
</template>

<style scoped lang="scss">
.decoration-none {
  text-decoration: none;
}

.text {
  &-spacing-none {
    letter-spacing: 0rem;
  }

  &-increase {
    font-size: 1.2rem;
    transition: font-size 1s cubic-bezier(.68, -0.55, .27, 1.55);
    font-weight: 900;

    .text--interact:hover &,
    &.text--interact:hover,
    .open & {
      font-size: 1rem;
    }
  }

  &-reduces {
    font-size: 0;
    transition: font-size 1s cubic-bezier(.68, -0.55, .27, 1.55);
    font-weight: 900;

    .text--interact:hover &,
    &.text--interact:hover,
    .open & {
      font-size: 1rem;
    }
  }
}

.header-menu {
  z-index: 10;
  font-size: inherit;
  color: var(--text-color);
  transition: width 1s cubic-bezier(.68, -0.55, .27, 1.25), font-size 0.7s cubic-bezier(.68, -0.55, .27, 1.55);
  padding: 20px 0px;
  border-bottom: chocolate 2px solid;
  border-right: chocolate 2px solid;
  border-right-color: var(--link-color);
  border-bottom-color: var(--link-color);
  width: 60px;
  max-width: 800px;

  &:after {
    position: absolute;
    top: 100%;
    left: 0;
    content: "";
    border-top: 48px solid #ccc;
    border-right: 58px solid transparent;
    transition: max-width 0.5s cubic-bezier(.68, 0, .27, 1.50);
    max-width: 60px;
    width: 100vw;

    .open & {
      transition: max-width 1s cubic-bezier(.68, -0.55, .27, 1.25);
      max-width: 800px;
    }
  }

  &-title {
    background-color: var(--link-background-color);
    animation: BgNeonLink 4s linear infinite;
  }

  &-btn {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--link-color);
    margin: auto;
    cursor: pointer;
  }

  &-content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
      //overflow-y: scroll;
      max-height: 265px;
    }
    box-shadow: inset black 0px 0px 5px;
  }

  &-full {
    width: 90vw;
    color: var(--background-color);
    backdrop-filter: blur(5px);
    font-size: inherit;
    transition: width 0.5s cubic-bezier(.68, 0, .27, 1.50), font-size 1.75s cubic-bezier(.68, -0.55, .27, 1.55);
  }

  &-link {
    display: flex;
    gap: 0px;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    font-size: 0px;
    text-align: left;
    cursor: pointer;
    flex: 1 0 100%;
    min-height: 60px;
    width: 100%;

    &.active {
      animation: BgNeonLink 4s linear infinite;
    }

    .open & {
      gap: 20px;
      font-size: 1.5rem;
      justify-content: end;
    }
  }
}

@keyframes BgNeonLink {
  0% {
    border-radius: 5px;
    box-shadow: -3px 3px 2px 1px var(--link-background-color-opacity),
    -3px -3px 2px 1px var(--link-background-color-opacity),
    3px 3px 2px 1px var(--link-background-color-opacity),
    3px -3px 2px 1px var(--link-background-color-opacity);
  }
  50% {
    box-shadow: -1px 1px 5px 3px var(--link-background-color-opacity),
    -1px -1px 5px 3px var(--link-background-color-opacity),
    1px 1px 5px 3px var(--link-background-color-opacity),
    1px -1px 5px 3px var(--link-background-color-opacity);
  }
  100% {
    box-shadow: -3px 3px 2px 1px var(--link-background-color-opacity),
    -3px -3px 2px 1px var(--link-background-color-opacity),
    3px 3px 2px 1px var(--link-background-color-opacity),
    3px -3px 2px 1px var(--link-background-color-opacity);
    border-radius: 5px;
  }

}
</style>
