<template>
    <div class="max-w-lg font-sans text-left">
        <!-- Render list based on data type -->
        <div v-if="Array.isArray(data)">
            <ul class="list-bullet pl-5">
                <li v-for="item in data" :key="item" class="mb-2">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div v-else-if="typeof data === 'object'">
            <ul>
                <li v-for="(value, key) in data" :key="key" class="mb-2">
                    <span class="text-red font-bold capitalize"
                        >{{ key }}:
                    </span>
                    <span class="text-black-400">{{ value }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { onMounted } from "vue";
const props = defineProps({
    title: String,
    data: [Object, Array],
});
onMounted(() => {
    console.log(props.data);
});
</script>

<style scoped>
/* Additional Tailwind styles if needed */
</style>
