<template>
    <div class="max-w-lg font-sans text-left">
        <!-- Render list based on data type -->
        <div v-if="Array.isArray(data)">
            <ul class="list-disc pl-5">
                <li v-for="item in data" :key="item" class="mb-1">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div v-else-if="typeof data === 'object'">
            <ul>
                <li v-for="(value, key) in data" :key="key" class="mb-1">
                    <span
                        class="text-red dark:text-red-200 font-bold capitalize"
                        >{{ key }}:
                    </span>
                    <span class="text-black-400 dark:text-gray-300">{{
                        value
                    }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({
    title: String,
    data: [Object, Array],
});
</script>
