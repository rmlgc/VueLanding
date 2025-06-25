<script setup lang="ts">
import { ref, computed } from 'vue'

const hamburguerSizePx = ref(40)
const socialLinkTranslateYPx = ref(100)

const hamburguerSize = computed(() => `${hamburguerSizePx.value}px`)
const socialLinkTranslateY = computed(() => `${socialLinkTranslateYPx.value}px`)

interface MenuLinkItem {
  title: string
  href: string
  scrollTo?: {
    id: string
  }
}

const props = defineProps({
  menuLinks: {
    type: Array as () => MenuLinkItem[],
    default: () => []
  }
})


const isMenuOpen = ref(false)


const handleMenuLinkClick = (link: MenuLinkItem, event: Event) => {
  if (link.scrollTo && link.scrollTo.id) {
    event.preventDefault();
    performScroll(link.scrollTo.id, true, link.href);
  }
  toggleMenu();
};

const performScroll = (targetDomId: string, updateHash: boolean = true, hrefSlug: string = '') => {
  const elementToScroll = document.getElementById(targetDomId);
  if (elementToScroll) {
    const elementRect = elementToScroll.getBoundingClientRect();
    const elementPosition = elementRect.top + window.pageYOffset;
    const offsetPosition = elementPosition - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if (updateHash && hrefSlug) {
      history.pushState(null, '', `#${hrefSlug}`);
    }
  } else {
    console.warn(`Element with ID '${targetDomId}' not found for scrolling.`);
  }
};

const scrollToElement = (elementId: string, event: Event) => {

  if (elementId.startsWith('#')) {
    event.preventDefault()
    const targetId = elementId.substring(1)
    const elementToScroll = document.getElementById(targetId)

    if (elementToScroll) {
      const elementRect = elementToScroll.getBoundingClientRect()
      const elementPosition = elementRect.top + window.pageYOffset
      const offsetPosition = elementPosition - 100

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  return false;
}


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  return false;
}

const externalScrollByHref = (hrefSlug: string) => {
  const foundLink = props.menuLinks.find(link => link.href === hrefSlug && link.scrollTo);
  if (foundLink && foundLink.scrollTo) {
    performScroll(foundLink.scrollTo.id, false);
  } else {
    console.warn(`No scrollable link found for href slug: '${hrefSlug}'`);
  }
};

defineExpose({
  externalScrollByHref
});
</script>

<template>
  <div>
    <header id="headerMenu" :class="{ 'open': isMenuOpen }">
      <a v-for="link in props.menuLinks" :href="link.scrollTo ? `#${link.href}` : link.href"
        @click="handleMenuLinkClick(link, $event)" :key="link.title">
        {{ link.title }}
      </a>
    </header>
    <div class="header social-header header-btns">
      <div id="headerMenuBtn" class="btn-hamburguer" :class="{ 'open': isMenuOpen }" @click="toggleMenu"></div>
      <div class="header-socials">
        <a href="https://linktr.ee/" class="social-link" target="_blank" rel="noopener noreferrer">
          <img class="social-icon" src="https://linktr.ee/favicon.ico" alt="Linktree Icon">
        </a>
        <a href="https://github.com/" class="social-link" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
            class="octicon octicon-mark-github social-icon">
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
            </path>
          </svg>
        </a>
      </div>
    </div>
  </div>
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
  width: calc(100% - 2 * v-bind(hamburguerSize));
  transition: left .75s ease-in-out;

  & a {
    isolation: isolate;
    mix-blend-mode: light;
    display: block;
    padding: 10px 15px;
    color: var(--link-color, white);
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &.open {
    left: 0%;
  }
}

.header {
  &-btns {
    width: v-bind(hamburguerSize);
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

    .social-link {
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

    .social-icon {
      height: 20px;
      object-fit: contain;

    }
  }




  .btn-hamburguer {
    cursor: pointer;
    width: v-bind(hamburguerSize);
    height: v-bind(hamburguerSize);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid var(--text-color);
    box-shadow: inset 0px 0px 1px 4px var(--background-color);
    transition: all .75s ease-in-out;

    &::before,
    &::after {
      content: "";
      height: calc(v-bind(hamburguerSize) / 7);
      width: 70%;
      background-color: var(--text-color);
      position: absolute;
      transition: transform .75s ease-in-out,
        box-shadow .75s .5s ease-in-out,
        margin-top .5s .75s ease-in-out,
        opacity .25s .15s ease-in-out;
    }


    &::before {
      transform: translateY(calc(-1 * v-bind(hamburguerSize) / 4));
    }


    &::before {
      box-shadow: 0px 10px 0px 0px var(--text-color);
    }


    &::after {
      transform: translateY(calc(v-bind(hamburguerSize) / 4));
    }

    &.open {
      box-shadow: 0px 0px 0px 0px var(--text-color-opacity), inset 1px 1px 1px 1px var(--text-color-opacity);
      background-color: var(--text-color);

      &::before {
        opacity: 1;
        transform: rotate(45deg);
        margin-top: 0;
      }

      &::after {
        transform: rotate(-45deg);
        margin-top: 0;
      }

      &::before,
      &::after {
        background-color: var(--link-background-color-opacity);
        transition: transform .5s .75s ease-in-out,
          background-color .5s 1s ease-in-out;
      }
    }
  }

  .header-socials {
    .social-link {
      opacity: 0;
      transform: translateY(v-bind(socialLinkTranslateY));


      @for $i from 1 through 2 {

        &:nth-child(#{$i}) {
          transition: opacity 0.75s (($i * 0.1) + 0s) ease,
            transform 1.75s (($i * 0.1) + 0s) ease;
        }
      }
    }
  }

  .btn-hamburguer.open~.header-socials .social-link {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>