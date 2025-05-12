<script setup>
import Heading from "./Base/Heading.vue";

const props = defineProps({
    category: String,
    // Skills is now an array of strings
    skills: Array,
});

// getProgressColor and designType are no longer needed

</script>

<template>
    <div class="mb-2 print:mb-1">
        <!-- ATS-friendly category heading -->
        <Heading :level="4" class="mb-2 font-semibold screen:text-base print:text-sm print:font-bold">{{ category }}</Heading> 
        <!-- Simple list with minimal print styling -->
        <ul class="list-disc pl-4 space-y-0.5 print:pl-3 print:space-y-0">
            <li
                v-for="(skill, index) in skills"
                :key="index"
                class="text-xs md:text-sm dark:text-white-100 print:text-xs print:font-normal"
            >
               {{ skill }}
            </li>
        </ul>
    </div>
</template>