<script setup>
import { computed } from "vue";
import Heading from "./Base/Heading.vue";
import Link from "./Base/Link.vue";
import Portrait from "./Portrait.vue";

// Define props with proper typing
const props = defineProps({
  data: {
    type: Object,
    required: true,
    validator: (value) => {
      // Ensure data has the required properties
      return (
        value.name && 
        value.title && 
        value.contact && 
        typeof value.contact === 'object'
      );
    }
  }
});

// Helper to filter contact links (excluding phone/email)
const getLinks = (contact) => {
  if (!contact) return {};
  
  const links = {};
  for (const key in contact) {
    if (key !== "phone" && key !== "email") {
      links[key] = contact[key];
    }
  }
  return links;
};
</script>

<template>
  <header class="relative border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8 pt-4 md:pt-6 print:pb-3 print:pt-1">
    <div class="flex flex-col md:flex-row md:items-start print:flex-row print:items-start">
      <!-- Text Content -->
      <div class="flex-grow z-10">
        <Heading :level="1" class="mb-1 md:mb-2 tracking-tight screen:text-4xl print:text-2xl print:mb-0.5">
          {{ data.name }}
        </Heading>
        <Heading :level="2" class="text-gold-500 dark:text-gold-300 mb-3 md:mb-4 font-medium tracking-wide screen:text-xl print:text-lg print:mb-1">
          {{ data.title }}
        </Heading>
        
        <!-- Contact Information -->
        <div class="flex flex-wrap items-center gap-x-4 md:gap-x-5 gap-y-2 text-xs md:text-sm print:gap-x-3 print:gap-y-1 print:text-xs">
          <!-- Primary Contact: Phone & Email -->
          <div class="flex items-center gap-x-4 md:gap-x-5 mr-1 md:mr-2 print:gap-x-3 print:mr-1">
            <Link
              v-if="data.contact?.phone"
              :href="`tel:${data.contact.phone}`"
              class="flex items-center whitespace-nowrap text-blue-500 dark:text-blue-300 hover:text-gold-500 dark:hover:text-gold-300 transition-colors print:text-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1.5 print:h-3 print:w-3 print:mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {{ data.contact.phone }}
            </Link>

            <Link
              v-if="data.contact?.email"
              :href="`mailto:${data.contact.email}`"
              class="flex items-center whitespace-nowrap text-blue-500 dark:text-blue-300 hover:text-gold-500 dark:hover:text-gold-300 transition-colors print:text-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1.5 print:h-3 print:w-3 print:mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {{ data.contact.email }}
            </Link>
          </div>

          <!-- Social/Other Links -->
          <div class="flex flex-wrap items-center gap-x-4 md:gap-x-5 gap-y-2 print:gap-x-3 print:gap-y-1">
            <template v-for="(value, key) in getLinks(data.contact)" :key="key">
              <Link
                :href="value"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center whitespace-nowrap capitalize text-blue-500 dark:text-blue-300 hover:text-gold-500 dark:hover:text-gold-300 transition-colors print:text-black"
              >
                <svg v-if="key === 'linkedin'" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1.5 print:h-3 print:w-3 print:mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <svg v-else-if="key === 'github'" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1.5 print:h-3 print:w-3 print:mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <svg v-else class="h-3.5 w-3.5 mr-1.5 print:h-3 print:w-3 print:mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                </svg>
                {{ key }}
              </Link>
            </template>
          </div>
        </div>
      </div>
      
      <!-- Portrait with border -->
      <Portrait class="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mx-auto mt-6 md:mt-0 md:mx-0 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-2 border-gold-400 dark:border-gold-600 shadow-md overflow-hidden object-cover print:absolute print:right-0 print:top-1/2 print:-translate-y-1/2 print:mt-0 print:w-20 print:h-20" />
    </div>
  </header>
</template>
