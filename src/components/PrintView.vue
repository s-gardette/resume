<template>
  <div v-if="visible" class="fixed inset-0 bg-white z-50 overflow-auto print-view">
    <!-- Screen controls -->
    <div class="no-print flex justify-between items-center p-4 bg-gray-100 border-b print:hidden">
      <div class="flex space-x-4">
        <button 
          @click="printResume" 
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 print:hidden"
        >
          🖨️ Imprimer
        </button>
        <button 
          @click="$emit('close')" 
          class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 print:hidden"
        >
          ✕ Fermer
        </button>
      </div>
      <p class="text-sm text-gray-600 print:hidden">
        Aperçu d'impression • Utilisez Ctrl+P ou le bouton Imprimer
      </p>
    </div>

    <!-- Print Resume Component -->
    <PrintResume :data="data" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import PrintResume from './PrintResume.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const printResume = () => {
  window.print()
}
</script>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
  
  .print-view {
    position: static !important;
    background: white !important;
    z-index: auto !important;
    overflow: visible !important;
  }
}
</style> 