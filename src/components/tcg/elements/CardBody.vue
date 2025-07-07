<template>
    <div class="card-body" :class="{ 'collapsible': collapsible }">
        <p v-if="!isCollapsed || !collapsible">{{ description }}</p>
        <button v-if="collapsible" @click="toggleCollapse" class="collapse-btn" aria-label="Toggle description">
            {{ isCollapsed ? '▼ Mostrar más' : '▲ Mostrar menos' }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    description: String,
    collapsible: {
        type: Boolean,
        default: false
    },
    maxLength: {
        type: Number,
        default: 150
    }
});

const isCollapsed = ref(props.collapsible);

const toggleCollapse = () =>
{
    isCollapsed.value = !isCollapsed.value;
};

const truncatedText = computed(() =>
{
    return props.description.length > props.maxLength
        ? props.description.slice(0, props.maxLength) + '...'
        : props.description;
});
</script>

<style scoped>
.card-body {
    margin: 1rem 0;
    line-height: 1.6;
}

.collapse-btn {
    background: none;
    border: none;
    color: #4a6fa5;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.2rem 0;
}

.collapse-btn:hover {
    text-decoration: underline;
}
</style>