<script setup>
import Heading from "./Heading.vue";
import Paragraph from "./Paragraph.vue";
defineProps({
    title: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        default: 3,
    },
});
</script>

<template>
    <div class="mb-4 print:mb-2">
        <Heading :level="level" class="mb-3 md:mb-4 screen:text-xl print:text-lg print:mb-2">{{ title }}</Heading>
        <div class="mt-2 print:mt-1"><slot /></div>
    </div>
</template>
