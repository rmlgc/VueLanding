<template>
    <div class="card-level" @click.stop="$emit('toggle')">
        <span v-if="!showStars">{{ levelLabel }}</span>
        <div v-else class="stars">
            <span v-for="i in 5" :key="i" :class="{ 'filled': i <= starsFilled }">★</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    level: String,
    showStars: Boolean
});

const levelLabel = computed(() =>
{
    const labels = {
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto'
    };
    return labels[props.level];
});

const starsFilled = computed(() =>
{
    const levels = {
        beginner: 2,
        intermediate: 3,
        advanced: 4,
        expert: 5
    };
    return levels[props.level];
});
</script>

<style scoped>
.stars {
    color: gold;
}

.stars .filled {
    opacity: 1;
}

.stars span:not(.filled) {
    opacity: 0.3;
}
</style>