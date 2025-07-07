<script setup>
import { ref } from 'vue';
import CardHeader from './elements/CardHeader.vue';
import CardBody from './elements/CardBody.vue';
import CardQuote from './elements/CardQuote.vue';
import CardLevel from './elements/CardLevel.vue';

const props = defineProps({
    title: String,
    cardType: String,  // Ej: "framework", "lenguaje"
    tcgType: {        // Ej: "artefacto", "conjuro"
        type: String,
        validator: (value) => ['artefacto', 'conjuro', 'criatura', 'trampa', 'habilidad'].includes(value),
        default: 'artefacto'
    },
    description: String,
    quote: String,
    level: {
        type: String,
        validator: (value) => ['beginner', 'intermediate', 'advanced', 'expert'].includes(value),
        default: 'intermediate'
    }
});

const typeColors = {
    artefacto: '#c3cfe2',
    conjuro: '#a1c4fd',
    criatura: '#f5d7e3',
    trampa: '#f5e7d7'
};

const showStars = ref(false);

const toggleLevelView = () =>
{
    showStars.value = !showStars.value;
};

const fetchRandomQuote = () =>
{
    // Lógica para cambiar la frase
};
</script>

<template>
    <article class="tcg-card" :class="`tcg-card--${tcgType}`" @click="toggleLevelView">
        <CardHeader :title="title" :type="cardType" :tcg-type="tcgType" />
        <CardBody :description="description" />
        <CardQuote v-if="quote" :quote="quote" />
        <CardLevel :level="level" :show-stars="showStars" @toggle="toggleLevelView" />
        <slot name="footer"></slot> <!-- Para contenido adicional -->
        <CardQuote :quote="quote" :accent-color="typeColors[tcgType]" @randomize="fetchRandomQuote" />
        <CardFooter :tags="['vue', 'frontend']" date="2023-11-15" align="space-between">
            <template #actions>
                <button @click="bookmark">⭐ Guardar</button>
            </template>
        </CardFooter>
    </article>
</template>

<style scoped>
.tcg-card {
    border-radius: 12px;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
}

.tcg-card:hover {
    transform: scale(1.02);
}

.tcg-card--artefacto {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.tcg-card--conjuro {
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
}

/* Añade más estilos según tcgType */
</style>