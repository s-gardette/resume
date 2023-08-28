<template>
    <component :is="icon" />
</template>

<script setup>
import * as icons from "../../assets/icons";
import { ref, computed } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});
let icon = computed(() => {
    return icons[props.name];
});
</script>
