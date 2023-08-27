<script setup>
import DarkModeToogle from "../components/DarkModeToogle.vue";
import PrintButton from "../components/PrintButton.vue";
</script>

<template>
    <div class="flex justify-center flex-grow min-h-screen">
        <div class="absolute right-0 top-2 right-5 bg-transparent">
            <DarkModeToogle class="inline inline mr-2" />
            <PrintButton class="inline" />
        </div>
        <slot />
    </div>
</template>
<style scoped>
div {
    @apply bg-gradient-to-r dark:from-red-300 dark:to-blue-900 from-blue-300 to-red-300;
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
