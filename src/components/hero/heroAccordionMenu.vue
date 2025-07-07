<script setup>
import { computed, ref, watch, nextTick } from 'vue';

// Props definidas para personalización total
const props = defineProps({
    modelValue: Number, // índice activo controlado desde fuera (v-model)
    index: Number, // índice de esta instancia
    title: String,
    subtitle: String,
    items: {
        type: Array,
        default: () => []
    },
    height: {
        type: String,
        default: '80svh'
    },
    direction: {
        type: String,
        default: 'row' // o 'column'
    },
    headerClass: String,
    bodyClass: String,
    footerClass: String,
    containerClass: String,
    cardClass: String,
    customHeader: Object, // slot personalizado opcional
    customBody: Object, // slot personalizado opcional
    customFooter: Object // slot personalizado opcional
});

const emit = defineEmits(['update:modelValue']);

const isActive = computed(() => props.modelValue === props.index);

const containerRef = ref(null);

watch(isActive, (val) =>
{
    if (val && containerRef.value)
    {
        nextTick(() =>
        {
            containerRef.value.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'start' });
        });
    }
});
</script>

<template>
    <article ref="containerRef" class="hero-accordion-container"
        :class="[{ active: isActive }, direction, cardClass, containerClass]"
        :style="{ flex: isActive ? '5 0 0%' : '1 0 0%', height }" @click="emit('update:modelValue', props.index)">
        <!-- Header -->
        <div :class="['hero-accordion-header', headerClass]">
            <slot name="header">
                <h3 class="">{{ title }}</h3>
                <p class="">{{ subtitle }}</p>
            </slot>
        </div>

        <!-- Body -->
        <div :class="['hero-accordion-body', bodyClass]">
            <slot name="body">
                <ul class="">
                    <li v-for="(item, i) in items" :key="i" class="mb-2">
                        {{ item }}
                    </li>
                </ul>
            </slot>
        </div>

        <!-- Footer (opcional) -->
        <div v-if="$slots.footer" :class="['hero-accordion-footer', footerClass]">
            <slot name="footer" />
        </div>
    </article>
</template>

<style scoped>
.hero-accordion-container {
    min-width: 350px;
    transition: all 0.75s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    scroll-margin-top: 130px
}

.hero-accordion-container.active {
    transition: all 0.75s cubic-bezier(0.335, 0.98, 0.04, 0.6);
}

.hero-accordion-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 12px;
    overflow: hidden;
    transition: flex 0.3s ease, max-height 0.3s ease;
    min-width: 280px;
}

.hero-accordion-card.row {
    flex-direction: column;
}

.hero-accordion-card.column {
    width: 100%;
}

.hero-accordion-header {
    flex-shrink: 0;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
}

.hero-accordion-body {
    flex-grow: 1;
    padding: 1rem;
    max-height: 100%;
    overflow: auto;
}

.hero-accordion-footer {
    padding: 1rem;
    border-top: 1px solid #ccc;
}

.hero-accordion-card.active {
    background-color: #ccc;
    box-shadow: 0 0 0 2px #b8b9ff;
}
</style>
