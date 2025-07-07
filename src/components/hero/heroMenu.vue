<script setup>
import simplebar from 'simplebar-vue';
import { ref, onMounted } from 'vue';

const props = defineProps({
    title: String,
    cards: Object,
    // cardType: String,  // Ej: "framework", "lenguaje"
    // tcgType: {        // Ej: "artefacto", "conjuro"
    //     type: String,
    //     validator: (value) => ['artefacto', 'conjuro', 'criatura', 'trampa', 'habilidad'].includes(value),
    //     default: 'artefacto'
    // },
    description: String,
    // quote: String,
    // level: {
    //     type: String,
    //     validator: (value) => ['beginner', 'intermediate', 'advanced', 'expert'].includes(value),
    //     default: 'intermediate'
    // }
});

const typeColors = {
    artefacto: '#c3cfe2',
    conjuro: '#a1c4fd',
    criatura: '#f5d7e3',
    trampa: '#f5e7d7'
};
const scrollData = ref(null);
const showStars = ref(false);
// const collapseItemList = ref(true);
// const itemScroll = ref(itemScroll);

onMounted(() =>
{
    console.log('asd');
    // .addEventListener('scroll', () => {
    //                 console.log('asd1')
    //             })
});

const toggleLevelView = () =>
{
    showStars.value = !showStars.value;
};

const fetchRandomQuote = () =>
{
    // Lógica para cambiar la frase
};
const handleScrollEvent = (payload) =>
{
    console.table(payload.originalTarget);
    console.table(payload);
    // console.table(payload.scrollTop);
    scrollData.value = payload;
    // Do something with the scroll event data, e.g., update parent state
};
</script>
<template>
    <!-- @click="toggleLevelView" -->
    <article class="hero-menu-item" :class="`tcg-card--${tcgType}`">
        <simplebar @scroll="handleScrollEvent" :autoHide="false" class="simplebar-height">


            <p class="hero-menu-title">
                {{ title }}
            </p>
            <p class="hero-menu-subtitle">
                {{ description }}
            </p>
            <ul class="hero-menu-list" :class="``">
                <li v-on:scroll="(e, payload) => {
                    console.log(e);
                    console.log(this);
                    console.log(payload);
                }" v-for="({ name, tcg_type, level, quote, description }, index) in cards">
                    {{ name }}
                    <span>
                        : {{ description }}
                    </span>
                    <!-- 
                {{ level }}
                {{ quote }}
                {{ description }} 
                 -->
                </li>
            </ul>
        </simplebar>
    </article>
</template>

<style scoped lang="scss">
.simplebar-height {
    height: 100%;
    padding-right: 8px;
}

.hero-menu {
    &-item {
        padding: 12px;
        // margin-right: 8px;
        border-radius: 8%;
        border: 1px solid var(--text-color);
        // display: flex;
        // flex: 1 1 33%;
        min-width: 320px;
        max-width: 460px;
        max-height: 80svh;
        height: 100%;
    }

    &-title {
        font-size: 2rem;
    }

    &-subtitle {
        font-size: 1.2rem;
    }

    &-list {
        // display: none;
        padding-left: 1rem;
        padding-right: 0.5rem;
        transition: all 1.2s;


        & span {
            // line-height: 0rem;
            // display: inline-block;
            // overflow: hidden;
            // transition: all 1.2s;

            // &.active {
            //     line-height: 1.3rem;
            // }
        }

        & li {
            // line-height: 0rem;
            // display: inline-flex;
            // overflow: hidden;

        }

        &.active {
            display: none;
        }
    }
}
</style>