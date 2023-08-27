<script setup>
import Heading from "./Base/Heading.vue";
import Text from "./Base/Text.vue";
import Link from "./Base/Link.vue";

defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <header class="flex flex-col items-center justify-center">
        <Heading :level="1" class="flex flex-wrap justify-center w-full">
            <p class="mr-4">{{ data.infos.firstName }}</p>
            <p>{{ data.infos.lastName }}</p>
        </Heading>
        <div
            class="w-full text-xs lg:flex lg:justify-between lg:flex-row lg:flex-wrap flex justify-between flex-row flex-wrap"
        >
            <Heading :level="2" class="text-red lg:order-2 order-2">
                {{ data.infos.job }}
            </Heading>
            <div class="lg:order-1 order-1">
                <Text class="text-red">{{ data.infos.phone }}</Text>
                <Text class="text-red">{{ data.infos.email }}</Text>
            </div>
            <div class="lg:order-3 order-3">
                <Link
                    v-for="(item, index) in data.infos.links"
                    :key="index"
                    :href="item"
                    target="_blank"
                    class="block lg:text-right"
                >
                    {{ item }}
                </Link>
            </div>
        </div>
    </header>
</template>
