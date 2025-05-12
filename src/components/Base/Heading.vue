<script setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";

const props = defineProps({
  level: {
    type: Number,
    required: true,
    validator: (value) => {
      return value >= 1 && value <= 6;
    },
  },
  class: {
    type: String,
    default: "",
  },
});

const currentTag = computed(() => `h${props.level}`);

// Refined typography with better scaling and consistent colors
const levelClasses = {
  1: "text-3xl md:text-4xl text-blue-500 dark:text-blue-200 font-title font-semibold tracking-tight print:text-2xl", 
  2: "text-2xl md:text-3xl text-blue-500 dark:text-gold-200 font-title font-semibold tracking-tight print:text-xl",
  3: "text-xl md:text-2xl text-gold-500 dark:text-blue-300 font-title tracking-tight print:text-lg",
  4: "text-lg md:text-xl text-gray-700 dark:text-gold-300 font-medium tracking-tight print:text-base", 
  5: "text-base md:text-lg font-medium print:text-sm",
  6: "text-sm md:text-base font-medium print:text-xs",
};

const headingClasses = computed(() => {
  return twMerge("mb-2 md:mb-3 print:mb-1", levelClasses[props.level] || "", props.class);
});
</script>

<template>
  <component :is="currentTag" :class="headingClasses">
    <slot></slot>
  </component>
</template>
