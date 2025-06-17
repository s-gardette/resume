<script setup>
import Heading from "./Base/Heading.vue";

const props = defineProps({
    category: String,
    skills: Object,
    designType: {
        type: String,
        default: "full",
    },
});

const getProgressColor = (level) => {
    if (level > 70) return "bg-green-300";
    if (level > 30) return "bg-yellow-500";
    return "bg-red-400";
};
</script>

<template>
    <div class="max-w-xs">
        <Heading :level="4" class="text-red">{{ category }}</Heading>
        <div v-if="designType === 'compact'">
            <div class="flex flex-wrap gap-1">
                <ul class="inline">
                    <li
                        class="inline mr-2"
                        v-for="(level, skill) in skills"
                        :key="skill"
                    >
                        <span class="text-sm mr-2 font-bold">{{ skill }}</span>
                        <span
                            class="text-xs px-2 py-1 rounded-full text-black-700 hidden"
                            :class="getProgressColor(level)"
                        >
                            {{ level }}%
                        </span>
                        <span class="hidden">,</span>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else>
            <div
                v-for="(level, skill) in skills"
                :key="skill"
                class="mb-3 flex items-center"
            >
                <p class="flex-grow">
                    <span class="z-10 relative text-xs">{{ skill }}</span>
                </p>

                <div class="ml-2 relative w-16">
                    <div
                        class="absolute h-1 rounded-full w-full bg-gray-300 dark:bg-black-300"
                    ></div>
                    <div
                        :style="{ width: level + '%' }"
                        :class="getProgressColor(level)"
                        class="absolute h-1 rounded-full z-10"
                    ></div>
                </div>
                <p>
                    <span
                        class="text-xs ml-2 bg-gray-300 dark:bg-black-300 rounded-full px-2 py-1"
                        >{{ level }}%</span
                    >
                </p>
            </div>
        </div>
    </div>
</template>
