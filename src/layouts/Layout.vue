<script setup>
import DarkModeToogle from "../components/DarkModeToogle.vue";
import PrintButton from "../components/PrintButton.vue";
</script>

<template>
    <div class="flex justify-center flex-grow min-h-screen">
        <header
            id="top"
            class="absolute right-0 top-0 flex justify-between flex-grow pt-2"
        >
            <PrintButton class="hidden lg:inline-block" />
            <DarkModeToogle class="inline-block ml-4 mr-2" />
        </header>
        <slot />
    </div>
</template>
<style scoped>
div {
    @apply bg-gradient-to-r dark:from-red-300 dark:to-blue-900 from-blue-300 to-red-300;
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}
/* #top {
    @apply bg-white-500 dark:bg-black-500;
} */

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
