<template>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 print:space-y-2">
        <li
            v-for="(experience, index) in professionalExperiences"
            :key="index"
            class="group break-inside-avoid relative pb-4 border-b border-gray-200 dark:border-gray-700 md:border-b-0 print:pb-1"
        >
            <!-- Simplified layout for both screen and print -->
            <div class="flex flex-row justify-between items-baseline w-full">
                <Heading :level="3" class="uppercase text-lg print:text-xs mb-0 md:mb-0">
                    {{ experience.company }}
                </Heading>
                <span class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap print:text-xs">
                    {{ experience.years }}
                </span>
            </div>
            <Heading :level="4" class="text-base print:text-xs mb-2 print:mb-1">
                {{ experience.title }}
            </Heading>
            <List 
                class="text-sm space-y-1.5 print:text-2xs print:space-y-0 print:flex print:flex-row print:flex-wrap print:gap-x-1" 
                :data="experience.details"
                print-compact
            />
        </li>
    </ul>
</template>

<script setup>
import Heading from "./Base/Heading.vue";
import List from "./Base/List.vue";
// SvgIcon is no longer used
// import SvgIcon from "./Base/SvgIcon.vue"; 
defineProps({
    // Prop name remains the same, but data structure inside has changed
    professionalExperiences: {
        type: Array,
        required: true,
    },
});
</script>

<style>
@media print {
    .text-2xs {
        font-size: 0.65rem;
        line-height: 1rem;
    }
}
</style>
