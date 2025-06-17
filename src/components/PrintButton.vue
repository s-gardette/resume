<template>
    <button
        @click="$emit('openPrint')"
        class="px-4 py-2 text-white bg-blue-300 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-300 focus:outline-none rounded"
    >
        🖨️ Version imprimable
    </button>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['openPrint'])
</script>
