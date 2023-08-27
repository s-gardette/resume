<script setup>
defineProps({
    href: {
        type: String,
        default: "#",
    },
    target: {
        type: String,
        default: "_self",
    },
    rel: {
        type: String,
        default: "noopener noreferrer",
    },
});
</script>

<template>
    <a :href="href" class="">
        <slot />
    </a>
</template>
