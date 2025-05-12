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
    <div class="mb-2 print:mb-0.5">
        <!-- ATS-friendly category heading -->
        <Heading :level="4" class="mb-1 font-semibold screen:text-base print:text-2xs print:font-bold print:mb-0.5">{{ category }}</Heading> 
        <!-- Simple list with minimal print styling -->
        <ul class="list-disc pl-4 space-y-0.5 print:pl-2 print:space-y-0 print:grid print:grid-cols-2 print:gap-x-1">
            <li
                v-for="(skill, index) in skills"
                :key="index"
                class="text-xs md:text-sm text-gray-600 dark:text-gray-300 print:text-2xs print:font-normal print:leading-[0.9rem]"
            >
               {{ skill }}
            </li>
        </ul>
    </div>
</template>

<style>
@media print {
    .text-2xs {
        font-size: 0.6rem;
        line-height: 0.9rem;
    }
}
</style>