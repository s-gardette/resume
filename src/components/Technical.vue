<script setup>
import Heading from "./Base/Heading.vue";
import Skills from "./Skills.vue";
defineProps({
    skills: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-y-6 print:grid-cols-1 print:gap-y-1">
            <Skills
                v-for="(skills, category) in skills"
                :key="category"
                :category="category"
                :skills="skills"
                class="break-inside-avoid"
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
