<script setup>
import DarkModeToggle from "../components/DarkModeToggle.vue";
import PrintButton from "../components/PrintButton.vue";
</script>

<template>
    <div class="flex justify-center flex-grow min-h-screen bg-ivory print:bg-white print:min-h-0">
        <header
            id="top"
            class="absolute right-0 top-0 flex justify-end items-center z-20 p-3 print:hidden"
        >
            <PrintButton class="hidden lg:block mr-3" />
            <DarkModeToggle class="block" />
        </header>
        <slot />
    </div>
</template>

<style scoped>
div {
    @apply bg-ivory dark:bg-gray-900 transition-colors duration-300;
    background-image: 
        radial-gradient(circle at top left, rgba(59, 130, 246, 0.1), transparent 30%),
        radial-gradient(circle at bottom right, rgba(239, 68, 68, 0.1), transparent 30%);
}

@media print {
    div {
        background: none !important;
        background-color: white !important;
        min-height: 0 !important;
        height: auto !important;
        display: block !important;
    }
    
    header#top {
        display: none !important;
    }
}
</style>
