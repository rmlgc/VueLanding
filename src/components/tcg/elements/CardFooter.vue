<template>
    <footer class="card-footer" :class="`align-${align}`">
        <div class="footer-actions" v-if="$slots.actions">
            <slot name="actions"></slot>
        </div>
        <div class="footer-meta" v-if="tags || date">
            <span v-if="date" class="meta-date">{{ formattedDate }}</span>
            <div v-if="tags" class="meta-tags">
                <span v-for="(tag, index) in tags" :key="index" class="tag" :style="{ backgroundColor: tagColor }">
                    {{ tag }}
                </span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    tags: Array,
    date: String,
    tagColor: {
        type: String,
        default: '#4a6fa5'
    },
    align: {
        type: String,
        validator: (value) => ['left', 'center', 'right', 'space-between'].includes(value),
        default: 'space-between'
    }
});

const formattedDate = computed(() =>
{
    if (!props.date) return '';
    return new Date(props.date).toLocaleDateString();
});
</script>

<style scoped>
.card-footer {
    display: flex;
    padding-top: 1rem;
    margin-top: auto;
}

.align-left {
    justify-content: flex-start;
}

.align-center {
    justify-content: center;
}

.align-right {
    justify-content: flex-end;
}

.align-space-between {
    justify-content: space-between;
}

.meta-date {
    font-size: 0.8rem;
    color: #666;
}

.meta-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.tag {
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
    font-size: 0.7rem;
    color: white;
}
</style>