<script setup>
import { ref, watchEffect, defineAsyncComponent } from "vue";

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    iconType: {
        type: String,
        default: "solid", // or "outline" or whatever categories heroicons has
    },
});

const loadIconComponent = (icon, type) => {
    return defineAsyncComponent(() =>
        import(`@heroicons/vue/${type}/${icon}.vue`)
    );
};

const DynamicIcon = ref(null);

watchEffect(() => {
    DynamicIcon.value = loadIconComponent(props.icon, props.iconType);
});
</script>

<template>
    <component :is="DynamicIcon" class="h-8 w-8" />
</template>
