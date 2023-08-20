<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useIntersectionObserver} from '@vueuse/core'
import WipPage from '@/components/Landing/WipPage.vue'
import SectionAboutMe from '@/components/Landing/SectionAboutMe.vue'
import SectionResume from '@/components/Landing/SectionResume.vue'
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
  <div class="content-tablet ">
    <main v-show="pageIsLoad">
      
      <div class="main-content">
        <SectionAboutMe id="elAboutMe" ref="elAboutMe" class="content section-card"></SectionAboutMe>
        
        <hr/>
        <section style="display: none;" id="elService" ref="elService" class="content section-card">
          <h2 class="text-h3"> Service </h2>
          <hr/>
        </section>
        <SectionResume id="elResume" ref="elResume" class="content section-card"></SectionResume>
        
        <hr/>
        <SectionPortfolio id="elPortfolio" ref="elPortfolio" class="content section-card wrap-center"></SectionPortfolio>
        
        <hr/>
        <SectionContact id="elContact" ref="elContact" class="content section-card wrap-center"></SectionContact>

      <footer>
        <a href="https://linktr.ee/rommelgc" target="_blank">Rommel Garcia Coronado</a>
      </footer>
    </div>
  </main>
</div>
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
header{
  box-shadow: 0px 0px 10px 1px inset;
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
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-flow: row;
  .open &{
      flex-flow: column;
    }
  @media only screen and (min-width:777px){
    flex-flow: column;
    width: 60px;

  }
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
  &-head{
    display: flex;
    flex-flow: row;
    @media only screen and (min-width:777px){
      flex-flow: column;
    }
  }
  &-content {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    box-shadow: inset black 0px 0px 5px;
    flex: 1;
    .open &{
      flex-flow: column;
    }
    @media only screen and (min-width:777px){
      max-height: 265px;
      flex-flow: column;
    }
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
    min-height: 45px;
    flex:1;
    @media only screen and (min-width:777px){
      width: 100%;
    }
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
