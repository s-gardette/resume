<script setup>
import Heading from "./Base/Heading.vue";
import Paragraph from "./Base/Paragraph.vue";
defineProps({
    description: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div>
        <Heading :level="3">À propos</Heading>
        <Paragraph>{{ description }}</Paragraph>
    </div>
</template>
