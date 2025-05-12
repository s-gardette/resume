import { ref, onMounted, watchEffect } from "vue";

// Define a key for localStorage
const DARK_MODE_STORAGE_KEY = "darkMode";

/**
 * Composable to manage dark mode state with localStorage persistence
 * and system preference fallback
 *
 * @returns {Object} isDark and toggleDarkMode
 */
export function useDarkMode() {
  const isDark = ref(false);

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(isDark.value));
  };

  // Initialize dark mode from localStorage or system preference
  onMounted(() => {
    // Check localStorage first
    const storedDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);
    if (storedDarkMode !== null) {
      isDark.value = JSON.parse(storedDarkMode);
    } else {
      // Fall back to system preference
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  // Apply dark mode class when state changes
  watchEffect(() => {
    document.body.classList.toggle("dark", isDark.value);
  });

  return {
    isDark,
    toggleDarkMode,
  };
}
