<template>
  <picture>
    <source
      v-if="Image.sources.avif"
      :srcset="Image.sources.avif"
      type="image/avif"
      :sizes="imageSizes"
      class="h-full w-full object-cover"
    />
    <source
      v-if="Image.sources.webp"
      :srcset="Image.sources.webp"
      type="image/webp"
      :sizes="imageSizes"
      class="h-full w-full object-cover"
    />
    <source
      v-if="Image.sources.jpeg"
      :srcset="Image.sources.jpeg"
      type="image/jpeg"
      :sizes="imageSizes"
      class="h-full w-full object-cover"
    />
    <img
      :src="Image.img.src"
      :srcset="Image.sources.jpeg"
      :sizes="imageSizes"
      :alt="altText"
      class="h-full w-full object-cover"
      loading="lazy"
      :width="Image.img.width"
      :height="Image.img.height"
    />
  </picture>
</template>

<script setup>
import { ref } from "vue";
import Image from "../assets/portrait.jpg?w=64;128;256;512;768&format=avif;webp;jpeg&as=picture";
const altText = ref(
  "Simon Gardette - Directeur Digital et spécialiste en référencement naturel"
);

const imageSizes = ref("(max-width: 768px) 128px, (max-width: 1024px) 144px, 192px");
</script>
