<template>
    <button class="h-8 w-8" @click="toggleDarkMode">
        <SvgIcon class="h-8 w-8 fill-yellow-700" v-if="darkMode" name="Sun" />
        <SvgIcon class="h-8 w-8 fill-blue-200" v-else name="Moon" />
    </button>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import SvgIcon from "./Base/SvgIcon.vue";

// Use `ref` for reactive variables.
const darkMode = ref(false);

// Replace methods with simple functions.
const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem("darkMode", JSON.stringify(darkMode.value));
};

// Move lifecycle hooks like `mounted()` into `onMounted` or `onBeforeMount`.
onMounted(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
        darkMode.value = JSON.parse(storedDarkMode);
    }
});

// Replace watchers with `watchEffect`.
watchEffect(() => {
    const bodyClassList = document.body.classList;
    if (darkMode.value) {
        bodyClassList.add("dark");
    } else {
        bodyClassList.remove("dark");
    }
});
</script>
