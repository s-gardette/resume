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
            class="w-full text-red dark:text-red-200 text-xs lg:justify-between flex justify-between flex-row flex-wrap font-bold"
        >
            <Heading :level="2" class="xl:order-2 order-2">
                {{ data.infos.job }}
            </Heading>
            <div class="xl:order-1 order-1 text-md">
                <Link :href="`tel:${data.infos.phone}`" class="block">{{
                    data.infos.phone
                }}</Link>
                <Link :href="`mailto:${data.infos.email}`" class="block">{{
                    data.infos.email
                }}</Link>
            </div>
            <div class="xl:order-3 order-3">
                <Link
                    v-for="(item, index) in data.infos.links"
                    :key="index"
                    :href="item"
                    target="_blank"
                    class="block text-left xl:text-right text-md"
                >
                    {{ item }}
                </Link>
            </div>
        </div>
    </header>
</template>
