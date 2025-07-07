<template>
    <header class="card-header">
        <h3 class="card-title">{{ title }}</h3>
        <span class="card-type">{{ type }} • {{ tcgType }}</span>
    </header>
</template>

<script setup>
defineProps({
    title: String,
    type: String,
    tcgType: String
});
</script>