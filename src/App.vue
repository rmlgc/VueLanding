<script setup lang="ts">
import {ref, onMounted} from 'vue'
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

const isMenuOpen = ref(false)

const scrollTo = (elemento: any) => {
  console.log(elemento)
  let targetElemnt = elemento;
  if (elemento.$el) {
    targetElemnt = elemento.$el
  }
  targetElemnt.scrollIntoView({behavior: "smooth"})

}

onMounted(()=>{
  let options = {
    margin:'10%',
  }

  initIntersection(elWip.value.$el, elWipIsVisible, document.querySelector('body'), options)
  initIntersection(elHome.value, elHomeIsVisible, document.querySelector('body'), options)
  initIntersection(elAboutMe.value, elAboutMeIsVisible, document.querySelector('body'), options)
  initIntersection(elService.value, elServiceIsVisible, document.querySelector('body'), options)
  initIntersection(elResume.value, elResumeIsVisible, document.querySelector('body'), options)
  initIntersection(elPortfolio.value, elPortfolioIsVisible, document.querySelector('body'), options)
  initIntersection(elContact.value, elContactIsVisible, document.querySelector('body'), options)

})

const initIntersection = (element:any, elementIsVisible:any, elementScroll:any,  newOptions = {})=>{
  let options = {
    threshold:0.5,
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
  <main>
    <header @click.self="isMenuOpen=!isMenuOpen" :class="`${isMenuOpen ? 'open' : ''}`">
      <div
        :class="`header-menu ${isMenuOpen ? 'header-menu-full bg-glass--fat' : 'bg-glass--slim'} bg-glass-secondary `">
        <div class="header-menu-title">
          <a href="https://linktr.ee/rommelgc" target="_blank" class="decoration-none text-spacing-none">
            <span class="text-increase">R</span>
            <span class="text-reduces">ommel</span>
            <span class="text-increase">G</span>
            <span class="text-reduces">arcia</span>
            <span class="text-increase">C</span>
            <span class="text-reduces">oronado</span>
            {{ }}
          </a>
          <div class="header-menu-btn" @click="isMenuOpen=!isMenuOpen">
            <span v-if="isMenuOpen" class="material-symbols-rounded">close</span>
            <span v-else class="material-symbols-rounded">menu</span>
          </div>
        </div>
        <div class="header-menu-content">
          <a @click="scrollTo(elWip)" :class="`header-menu-link ${elWipIsVisible ? 'active' : ''}`"> <span
            class="material-symbols-rounded">
engineering
</span>Wip</a>
          <a @click="scrollTo(elHome)" :class="`header-menu-link ${elHomeIsVisible ? 'active' : ''}`"> <span
            class="material-symbols-rounded">
home
</span> Home</a>
          <a @click="scrollTo(elAboutMe)" :class="`header-menu-link ${elAboutMeIsVisible ? 'active' : ''}`"><span
            class="material-symbols-rounded">
person
</span> About me</a>
          <a @click="scrollTo(elService)" :class="`header-menu-link ${elServiceIsVisible ? 'active' : ''}`"><span
            class="material-symbols-rounded">
design_services
</span> Service</a>
          <a @click="scrollTo(elResume)" :class="`header-menu-link ${elResumeIsVisible ? 'active' : ''}`"><span
            class="material-symbols-rounded">
school
</span> Resume</a>
          <a @click="scrollTo(elPortfolio)" :class="`header-menu-link ${elPortfolioIsVisible ? 'active' : ''}`"><span
            class="material-symbols-rounded">
important_devices
</span> Portfolio</a>
          <a @click="scrollTo(elContact)" :class="`header-menu-link ${elContactIsVisible ? 'active' : ''}`"><span
            class="material-symbols-rounded">
contact_mail
</span> Contact</a>
        </div>
      </div>
    </header>
    <div class="main-content">
      <section id="elHome" ref="elHome" class="section-card">
        <h2 class="text-h1"> Home </h2>
      </section>
      <section id="elAboutMe" ref="elAboutMe" class="content section-card">
        <h2 class="text-h2"> About me </h2>
      </section>
      <section id="elService" ref="elService" class="content section-card">
        <h2 class="text-h3"> Service </h2>
      </section>
      <section id="elResume" ref="elResume" class="content section-card">
        <h2 class="text-h4"> Experience </h2>
        <h2 class="text-h5"> Resume </h2>
      </section>
      <section id="elPortfolio" ref="elPortfolio" class="content section-card">
        <h2 class="text-h6"> Portfolio </h2>
      </section>
      <section id="elContact" ref="elContact" class="content section-card">
        <h2 class="text-h1"> Contact </h2>
      </section>
      <footer>
        <a href="https://linktr.ee/rommelgc" target="_blank">Rommel Garcia Coronado</a>
      </footer>
    </div>
  </main>
</template>

<style lang="scss">
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

  &-full {
    width: 100vw;
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
    .open & {
      gap: 20px;
      font-size: 1.5rem;
      justify-content: end;
    }
  }
}
</style>
