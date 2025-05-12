<script setup>
import { useDarkMode } from "../utils/useDarkMode";
import SvgIcon from "./Base/SvgIcon.vue";

const { isDark, toggleDarkMode } = useDarkMode();
</script>

<template>
  <button 
    class="h-8 w-8 transition-transform hover:scale-110" 
    @click="toggleDarkMode"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <SvgIcon 
      class="h-8 w-8 fill-yellow-700 transition-all" 
      v-if="isDark" 
      name="Sun" 
    />
    <SvgIcon 
      class="h-8 w-8 fill-blue-200 transition-all" 
      v-else 
      name="Moon" 
    />
  </button>
</template> 