<template>
    <ul role="list" class="columns-1 xl:columns-2 gap-8">
        <li
            v-for="(experience, index) in professionalExperiences"
            :key="index"
            class="break-inside-avoid-column"
        >
            <div class="relative pb-8">
                <span
                    v-if="index !== professionalExperiences.length - 1"
                    class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                >
                </span>
                <div class="relative flex space-x-3">
                    <div>
                        <!-- We don't have icons for each experience, so using a default placeholder for now -->
                        <span
                            class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-blue-500"
                        >
                            <svg
                                class="h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M11 0h3L9 20H6l5-20z" />
                            </svg>
                        </span>
                        <p
                            class="experience-years text-xl font-display font-bold mt-4"
                        >
                            {{ experience.years }}
                        </p>
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between">
                            <Heading :level="3" class="self-start">
                                {{ experience.company }}
                            </Heading>
                            <Heading :level="4" class="self-end"
                                >{{ experience.position }}
                            </Heading>
                        </div>
                        <List :data="experience.responsibilities" />
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from "vue";
import Heading from "./Base/Heading.vue";
import List from "./Base/List.vue";
import Separator from "./Base/Separator.vue";

defineProps({
    professionalExperiences: {
        type: Array,
        required: true,
    },
});
</script>
<style scoped>
.experience-years {
    writing-mode: vertical-rl;
    text-orientation: upright;
}
</style>
