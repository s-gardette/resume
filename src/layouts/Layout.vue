<script setup>
import DarkModeToogle from "../components/DarkModeToogle.vue";
import PrintButton from "../components/PrintButton.vue";
</script>

<template>
    <DarkModeToogle class="absolute right-0" />
    <PrintButton class="absolute right-0 top-5" />
    <div class="flex justify-center flex-grow min-h-screen">
        <slot />
    </div>
</template>
<style scoped>
div {
    @apply bg-gradient-to-r from-red-300 to-blue-900 dark:from-blue-300 dark:to-red-300;
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
