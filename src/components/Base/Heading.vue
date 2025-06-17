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
    @apply text-3xl lg:text-4xl xl:text-5xl text-blue dark:text-blue-200 font-title font-extrabold;
}
h2 {
    @apply lg:text-2xl text-red  dark:text-red-200 font-title font-extrabold;
}
h3 {
    @apply text-2xl text-blue dark:text-blue-200 font-title font-extrabold;
}
h4 {
    @apply text-lg text-red  dark:text-red-200 font-extrabold mb-2;
}
</style>
