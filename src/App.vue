<script setup lang="ts">
import Simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';
import {onMounted, ref} from 'vue'
import {useIntersectionObserver} from '@vueuse/core'
import WipPage from '@/components/Landing/WipPage.vue'
import SectionAboutMe from '@/components/Landing/SectionAboutMe.vue'
import SectionResume from '@/components/Landing/SectionResume.vue'
import SectionMyKnowledge from '@/components/Landing/SectionMyKnowledge.vue'
import SectionPortfolio from '@/components/Landing/SectionPortfolio.vue'
import SectionContact from '@/components/Landing/SectionContact.vue'


const pageIsLoad = ref(false)

onMounted(() => {
  let options = {}

  document.onreadystatechange = () => { //To load the app only after all libraries are loaded
    if (document.readyState == "complete") {
      pageIsLoad.value = true;
      console.log('PAGE LOADED')
    }
  }
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
  <main v-show="pageIsLoad" class=" ">
    <SectionAboutMe id="elAboutMe" ref="elAboutMe" class="content section-card main-content"></SectionAboutMe>
    <SectionResume id="elResume" ref="elResume" class="content section-card main-content"></SectionResume>
  </main>
  <main v-show="pageIsLoad" class=" ">
    <SectionMyKnowledge id="elKnowledge" ref="elResume" class="content section-card main-content"></SectionMyKnowledge>
    <SectionPortfolio id="elPortfolio" ref="elPortfolio" class="content section-card main-content"></SectionPortfolio>
  </main>
  <SectionContact id="elContact" ref="elContact" class="content section-card main-content wrap-center"></SectionContact>
  <footer>
    <a href="https://linktr.ee/rommelgc" target="_blank">Rommel Garcia Coronado</a>
  </footer>
</template>

<style scoped lang="scss">
.f {
  text-decoration: none;
}
#elAboutMe{

  @media only screen and (min-width:820px){
    min-width: 400px;
    max-width: 40dvw;
  }
}

</style>
