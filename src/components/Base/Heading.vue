<template>
    <component :is="currentTag">
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
    @apply text-5xl lg:text-6xl xl:text-8xl text-blue font-title;
}
h2 {
    @apply lg:text-3xl text-red font-display;
}
h3 {
    @apply text-2xl text-blue font-body font-extrabold;
}
h4 {
    @apply text-lg text-red font-extrabold;
}
</style>
