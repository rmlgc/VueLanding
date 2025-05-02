<script setup lang="ts">
import { ref } from 'vue'
import Simplebar from 'simplebar-vue';

const hamburguerSize = ref(40 + 'px')
const socialLinkTranslateY = ref(100 + 'px')

interface menuLinks {
  title: string
  href: string
  scrollTo?: boolean
  icon?: string
}

const props = defineProps({
  menuLinks: Array<menuLinks>
})

const scrollTo = (elementId: string, event: Event) => {
  const bodyRect = document.body.getBoundingClientRect();
  if (elementId == null) return
  const elementToScroll = document.getElementById(elementId);
  if (elementToScroll == null) return
  const elemRect = elementToScroll.getBoundingClientRect();
  const offset = elemRect.top - bodyRect.top;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  })
  event.preventDefault();
  return false;
}

const openMenu = () => {
  const currentEl = document.getElementById('headerMenuBtn');
  const hedaerEl = document.getElementById('headerMenu');
  if (currentEl == null) return
  if (hedaerEl == null) return
  if (currentEl.classList == null) return
  hedaerEl.classList.toggle("open");
  currentEl.classList.toggle("open");
}
</script>
<template>
  <header id="headerMenu">
    <a v-for="link in props.menuLinks" :href="link.href" @click="scrollTo(link.href, $event); openMenu();"
      :key="link.title">{{ link.title }}</a>
  </header>
  <div class="social-header header-btns">
    <divi id="headerMenuBtn" class="btn-hamburguer" @click="openMenu"></divi>
    <div class="header-socials">
      <a href="about:blank" class="social-link" target="_blank" rel="noopener noreferrer">
        <img class="social-icon" src="https://linktr.ee/favicon.ico">
      </a>
      <a href="about:blank" class="social-link" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
          class="octicon octicon-mark-github social-icon">
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
          </path>
        </svg>
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  &-btns {
    width: calc(v-bind(hamburguerSize));
    z-index: 1;
    position: fixed;
    top: calc(v-bind(hamburguerSize) + 2dvh);
    left: calc(95dvw - v-bind(hamburguerSize));
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  &-socials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
}

.social {
  z-index: 1;
  position: relative;
  top: calc(v-bind(hamburguerSize) + 2dvh);
  left: calc(95dvw - v-bind(hamburguerSize));
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &-header {
    overflow: hidden;
  }

  &-link {
    cursor: pointer;
    z-index: 1;
    top: 0px;
    border: 2px solid var(--text-color);
    box-shadow: inset 0px 0px 1px 4px var(--background-color);
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    transition: all .75s ease-in-out;

    &:hover {
      border: 2px solid var(--link-background-color-opacity);
      box-shadow: inset 0px 0px 1px 4px var(--text-color-opacity);
    }
  }

  &-icon {
    height: 20px;
    object-fit: contain;
    // filter: brightness(0);
  }
}

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
  width: calc(100% - 2 * v-bind(hamburguerSize));
  transition: left .75s ease-in-out;

  & a {
    isolation: isolate;
    mix-blend-mode: light;
  }

  &.open {
    left: 0%;
  }
}

.btn-hamburguer {
  cursor: pointer;
  display: block;
  border: solid 1px var(--text-color-opacity);
  height: v-bind(hamburguerSize);
  width: v-bind(hamburguerSize);
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px var(--text-color-opacity), inset 0px 0px 0px 0px var(--text-color-opacity);
  transition: box-shadow .15s ease-in-out;
  background-color: var(--text-color-opacity);

  &::before,
  &::after {
    content: "";
    height: calc(v-bind(hamburguerSize) / 7);
    width: 70%;
    display: block;
    background-color: var(--link-color);
    margin: auto;
    margin-top: calc(v-bind(hamburguerSize) / 7);
    border-radius: 8px;
    transition:
      transform .75s ease-in-out,
      box-shadow .75s .5s ease-in-out,
      margin-top .5s .75s ease-in-out,
      opacity .25s .15s ease-in-out;
  }

  &::after {
    margin-top: calc((-1* v-bind(hamburguerSize) / 7));
    box-shadow: 0px calc(2*(v-bind(hamburguerSize) / 7)) 1px 0px var(--link-color),
      0px calc(2*(-1* v-bind(hamburguerSize) / 7)) 1px 0px var(--link-color);
  }

  &::before {
    opacity: 0;
    margin-top: calc(3*(v-bind(hamburguerSize) / 7));
    transform: rotate(0deg);
  }

  &.open {
    box-shadow: 0px 0px 0px 0px var(--text-color-opacity), inset 1px 1px 1px 1px var(--text-color-opacity);
    background-color: var(--text-color);

    &::before {
      opacity: 1;
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg) translate(calc(v-bind(hamburguerSize)/10), calc(v-bind(hamburguerSize)/-10));
      margin-top: 0px;
      box-shadow: 0px 0px 0px 0px var(--link-color);
    }

    &::after,
    &::before {
      background-color: var(--link-background-color-opacity);
      transition:
        transform .5s .75s ease-in-out,
        box-shadow .5s ease-in-out,
        margin-top .5s .5s ease-in-out,
        background-color .5s 1s ease-in-out,
        opacity .5s .25s ease-in-out;
    }
  }
}

.social-link {
  opacity: 0;
  transition: opacity 0.75s 0s ease 0s,
    transform 1.75s ease 0s;
  -webkit-transform: translateY(calc(-100 * v-bind(socialLinkTranslateY)));
  transform: translateY(calc(-100 * v-bind(socialLinkTranslateY)));
}

.social-link:nth-child(1) {
  -webkit-transform: translateY(calc(-1 * v-bind(socialLinkTranslateY)));
  transform: translateY(calc(-1 * v-bind(socialLinkTranslateY)));
  // transition-duration: 1s;
  // transition-delay: 0s;

}

.social-link:nth-child(2) {
  -webkit-transform: translateY(calc(-2 * v-bind(socialLinkTranslateY)));
  transform: translateY(calc(-2 * v-bind(socialLinkTranslateY)));
  // transition-duration: 1s;
  // transition-delay: 0s;
}

.btn-hamburguer.open~.header-socials {
  .social-link {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    opacity: 1;
  }

  .social-link:nth-child(1) {}

  .social-link:nth-child(2) {}
}
</style>