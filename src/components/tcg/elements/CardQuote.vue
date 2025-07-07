<template>
    <blockquote class="card-quote" :style="{ borderColor: accentColor }" @dblclick="$emit('randomize')">
        <span class="quote-icon">“</span>
        {{ quote }}
        <span class="quote-author" v-if="author">— {{ author }}</span>
    </blockquote>
</template>

<script setup>
defineProps({
    quote: String,
    author: String,
    accentColor: {
        type: String,
        default: '#4a6fa5'
    }
});

defineEmits(['randomize']);
</script>

<style scoped>
.card-quote {
    border-left: 3px solid;
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    color: #555;
    transition: all 0.3s;
}

.card-quote:hover {
    transform: translateX(5px);
}

.quote-icon {
    font-size: 2rem;
    line-height: 0;
    vertical-align: -0.4rem;
    color: var(--accent-color, #4a6fa5);
}

.quote-author {
    display: block;
    font-weight: bold;
    margin-top: 0.5rem;
}
</style>