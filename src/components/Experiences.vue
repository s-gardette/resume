<template>
    <ul role="list" class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <li
            v-for="(experience, index) in professionalExperiences"
            :key="index"
            class="break-inside-avoid-column"
        >
            <div class="relative">
                <div class="relative flex space-x-3">
                    <div>
                        <!-- We don't have icons for each experience, so using a default placeholder for now -->
                        <span
                            class="h-8 w-8 rounded-full flex items-center justify-center bg-red dark:bg-red-200 mt-2"
                        >
                            <SvgIcon
                                class="h-4 w-4 fill-white"
                                :name="experience.icon"
                            />
                        </span>
                        <p
                            class="experience-years text-xl font-extrabold mt-4 dark:text-white text-gray-500 leading-2 tracking-tightest"
                        >
                            {{ experience.start_date }}-{{
                                experience.end_date
                            }}
                        </p>
                    </div>
                    <div class="w-full">
                        <div class="flex lg:justify-between flex-wrap">
                            <Heading :level="3" class="mr-2 lg:mr-0">
                                {{ experience.company }}
                            </Heading>
                            <Heading :level="4" class="mt-3"
                                >{{ experience.position }}
                            </Heading>
                        </div>
                        <List
                            class="text-justify"
                            :data="experience.responsibilities"
                        />
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import Heading from "./Base/Heading.vue";
import List from "./Base/List.vue";
import SvgIcon from "./Base/SvgIcon.vue";
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
