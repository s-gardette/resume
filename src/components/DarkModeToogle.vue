<template>
    <button class="" @click="toggleDarkMode">
        <span v-if="darkMode"> Toggle dark mode </span>
        <span v-else> Toggle light mode </span>
    </button>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false,
        };
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
        },
    },
    mounted() {
        this.darkMode = JSON.parse(localStorage.getItem("darkMode"));
    },
    watch: {
        darkMode(newVal) {
            if (newVal) {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
        },
    },
};
</script>
