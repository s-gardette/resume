<template>
    <component :is="currentTag" class="mt-2 mb-4 tracking-wider">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: "Heading",
    props: {
        level: {
            type: Number,
            required: true,
            validator(value) {
                return value >= 1 && value <= 6;
            },
        },
    },
    computed: {
        currentTag() {
            return `h${this.level}`;
        },
    },
};
</script>

<style lang="postcss" scoped>
h1 {
    @apply text-5xl lg:text-6xl xl:text-8xl text-blue dark:text-blue-200 font-title;
}
h2 {
    @apply lg:text-3xl text-red  dark:text-red-200 font-display;
}
h3 {
    @apply text-2xl text-blue dark:text-blue-200 font-body font-extrabold;
}
h4 {
    @apply text-lg text-red  dark:text-red-200 font-extrabold mb-2;
}
</style>
