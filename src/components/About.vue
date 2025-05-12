<script setup>
import Heading from "./Base/Heading.vue";

const props = defineProps({
    summary: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="mb-4 print:mb-2">
        <Heading :level="3" class="mb-2 font-semibold screen:text-xl print:text-lg print:font-bold">À propos</Heading>
        <p class="font-body font-light text-xs md:text-sm text-gray-600 dark:text-gray-300 print:text-xs">{{ summary }}</p>
    </div>
</template>
