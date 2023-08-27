<script setup>
import { defineProps } from "vue";

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
    <div>
        <Heading :level="level">{{ title }}</Heading>
        <Paragraph><slot /></Paragraph>
    </div>
</template>
