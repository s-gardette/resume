<script setup>
import { ref, computed } from "vue";
import { useSlots } from "vue";

const hasDefaultSlot = computed(() => !!useSlots().default);
const props = defineProps({
    bgColor: {
        type: String,
        default: "bg-white", // default to white background if no color is provided
    },
});
</script>

<template>
    <div class="relative flex items-center justify-center my-4">
        <hr class="border border-red absolute w-full z-0 mt-1" />
        <div v-if="hasDefaultSlot" :class="[bgColor, 'px-8', 'z-10']">
            <slot></slot>
        </div>
    </div>
</template>
