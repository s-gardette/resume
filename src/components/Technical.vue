<script setup>
import Heading from "./Base/Heading.vue";
import Skills from "./Base/Skills.vue";
defineProps({
    skills: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div>
        <Heading :level="3">Compétences techniques</Heading>
        <!-- Masonry Grid Layout -->
        <div class="columns-1 md:columns-2 xl:columns-3">
            <Skills
                v-for="(skills, category) in skills"
                :key="category"
                :category="category"
                :skills="skills"
                class="break-inside-avoid-column"
            />
        </div>
    </div>
</template>

<style scoped>
/* Masonry-like grid layout */
.masonry {
    grid-auto-rows: minmax(100px, auto);
}
</style>
