<script setup lang="ts">
import { ref } from 'vue'
import Simplebar from 'simplebar-vue';

const hamburguerSize = ref(50+'px')

interface menuLinks {
  title: string
  href: string
  scrollTo?: boolean
  icon?: string
}

const props = defineProps({
  menuLinks: Array<menuLinks>
})

const scrollTo = (elementId:string, event:Event)=>{
  const bodyRect = document.body.getBoundingClientRect();
  if(elementId == null)return
  const elementToScroll = document.getElementById(elementId);
  if(elementToScroll == null)return
  const elemRect = elementToScroll.getBoundingClientRect();
  const offset   = elemRect.top - bodyRect.top;
  
  window.scrollTo({
    top:offset,
    behavior:"smooth",
  })
  event.preventDefault();
  return false;
}

const openMenu = ()=>{
  const currentEl = document.getElementById('headerMenuBtn');
  const hedaerEl = document.getElementById('headerMenu');
  if(currentEl== null)return
  if(hedaerEl== null)return
  if(currentEl.classList== null)return
  hedaerEl.classList.toggle("open");
  currentEl.classList.toggle("open");
}
</script>
<template>
  <header id="headerMenu">
    <a v-for="link in props.menuLinks" :href="link.href" @click="scrollTo(link.href, $event); openMenu();" :key="link.title">{{link.title}}</a>
  </header>
  <divi id="headerMenuBtn" class="btn-hamburguer" @click="openMenu"></divi>
</template>
<style scoped lang="scss">
  header {
    position: fixed;
    top: 0%;
    left: -200%;
    background-color: var(--text-color-opacity);
    z-index: 1;
    backdrop-filter: blur(5px);
    display: flex;
    flex-wrap: wrap;
    padding: 32px 12px;
    width:calc(100% - 2 * v-bind(hamburguerSize));
    transition:left .75s ease-in-out;
    & a{
      isolation: isolate;
      mix-blend-mode: light;
    }
    &.open{
      left: 0%;
    }
  }

  .btn-hamburguer{
    cursor:pointer;
    z-index: 1;
    position: fixed;
    top: 2dvh;
    left: calc(98dvw - v-bind(hamburguerSize));
    border:solid 1px var(--text-color-opacity);
    height:v-bind(hamburguerSize);
    width:v-bind(hamburguerSize);
    border-radius:8px;
    box-shadow:1px 1px 1px 1px var(--text-color-opacity), inset 0px 0px 0px 0px var(--text-color-opacity);
    transition:box-shadow .15s ease-in-out;
    background-color:var(--text-color-opacity);
    &::before,
    &::after{
      content: "";
      height:calc(v-bind(hamburguerSize) / 7);
      width:70%;
      display:block;
      background-color:var(--link-color);
      margin:auto;
      margin-top:calc(v-bind(hamburguerSize) / 7);
      border-radius:8px;
    }
    &::after{
      box-shadow:0px calc(2*(v-bind(hamburguerSize) / 7)) 1px 0px;  
    }
    &::before{
      opacity:0;
      margin-top:calc(3*(v-bind(hamburguerSize) / 7));
      transform: rotate(0deg);
    }
  &::after{
    margin-top:calc((-1* v-bind(hamburguerSize) / 7));
    box-shadow:0px calc(2*(v-bind(hamburguerSize) / 7)) 1px 0px var(--link-color),
      0px calc(2*(-1* v-bind(hamburguerSize) / 7)) 1px 0px  var(--link-color);  
  }
  &.open{
    box-shadow: 0px 0px 0px 0px var(--text-color-opacity), inset 1px 1px 1px 1px var(--text-color-opacity);
    background-color:var(--text-color);
    &::before{
      opacity:1;
      transform: rotate(45deg);
    }
    &::after{
      transform: rotate(-45deg) translate(calc(v-bind(hamburguerSize)/10), calc(v-bind(hamburguerSize)/-10));
      margin-top:0px;
      box-shadow:0px 0px 0px 0px;  
    }
    &::after,
    &::before{
      transition:
        transform .5s .75s ease-in-out,
        box-shadow .5s  ease-in-out,
        margin-top .5s .5s ease-in-out,
        opacity .5s .25s ease-in-out;
    }
  }
  &::before,
  &::after{
     transition:
      transform .75s ease-in-out,
       box-shadow .75s .5s ease-in-out,
      margin-top .5s .75s ease-in-out,
      opacity .25s .15s ease-in-out;
  }
}

</style>