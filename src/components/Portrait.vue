<template>
    <picture>
        <source
            v-for="image in Image.sources.jpeg"
            :key="image.src"
            :srcset="image.src"
            :sizes="image.w + 'w'"
            type="image/jpeg"
            class="rounded-full"
        />
        <img
            :src="Image.img.src"
            :width="500"
            :height="500"
            :alt="altText"
            class="rounded-t-full"
        />
    </picture>
</template>

<script setup>
import { ref } from "vue";
import Image from "../assets/portrait.jpg?h=500;900;1200&format=avif;webp;jpg&as=picture";

// You might also consider having an alt text for accessibility
const altText = ref("Descriptive text for the image");
</script>
