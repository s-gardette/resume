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

// Refined typography with better scaling
const levelClasses = {
  1: "text-3xl md:text-4xl text-blue-500 dark:text-blue-200 font-title tracking-tight print:text-xl", 
  2: "text-2xl md:text-2xl lg:text-2xl text-blue-500 dark:text-gold-200 font-title tracking-tight print:text-lg",
  3: "text-xl md:text-xl text-gold-500 dark:text-blue-300 font-title font-semibold print:text-base",
  4: "text-base md:text-lg text-blue-500 dark:text-gold-300 font-medium tracking-tight print:text-sm", 
  5: "text-sm md:text-base font-medium print:text-xs",
  6: "text-xs md:text-sm font-medium print:text-2xs",
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
