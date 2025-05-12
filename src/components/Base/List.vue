<template>
    <!-- Removed max-w-lg for better flexibility within parent container -->
    <div class="font-body text-left">
        <!-- Render list based on data type -->
        <div v-if="Array.isArray(data)">
            <!-- Certifications handling: Year and Name on same line -->
            <ul v-if="data.length > 0 && typeof data[0] === 'object' && data[0].hasOwnProperty('year') && data[0].hasOwnProperty('name')" 
                class="pl-0 space-y-1 print:space-y-0.5 print:grid print:grid-cols-2 print:gap-x-2"> 
                 <li v-for="item in data" :key="item.name" class="text-xs md:text-sm flex items-baseline print:text-xs">
                    <span class="w-12 shrink-0 text-gray-500 dark:text-gray-400 font-medium print:w-8">{{ item.year }}</span>
                    <span class="text-gray-600 dark:text-gray-300">{{ item.name }}</span>
                </li>
            </ul>
            <!-- Standard array handling (Loisirs, Experience Details) -->
            <ul v-else :class="[
                'list-disc list-inside pl-4 space-y-1 print:pl-3 print:space-y-0.5',
                { 'print:pl-0 print:flex print:flex-row print:flex-wrap print:gap-x-2 print:whitespace-nowrap': printCompact }
            ]">
                <li
                    v-for="(item, index) in data"
                    :key="index"
                    class="text-xs md:text-sm text-gray-600 dark:text-gray-300 print:text-xs"
                    :class="{ 'print:before:content-[\'•\'] print:before:inline print:before:mr-1 print:before:text-gray-400': index > 0 && printCompact }"
                >
                   {{ item }}
                </li>
            </ul>
        </div>

        <!-- Object handling (e.g., for Langages): Key with description below -->
        <div v-else-if="typeof data === 'object'">
            <ul :class="[
                'space-y-2 print:space-y-1 print:grid print:grid-cols-2 print:gap-x-2',
                { 'print:flex print:flex-wrap print:gap-x-3 print:space-y-0': printCompact }
            ]">
                <li 
                    v-for="(value, key) in data" 
                    :key="key" 
                    class="text-xs md:text-sm print:text-xs"
                >
                    <!-- Language Name -->
                    <span :class="[
                        'font-semibold text-gold-600 dark:text-gold-300 capitalize',
                        printCompact ? 'print:inline print:mr-1' : 'block mb-0.5 print:mb-0'
                    ]">
                        {{ key }}
                    </span>
                    <!-- Description -->
                    <span :class="[
                        'text-gray-600 dark:text-gray-300 text-xs md:text-sm print:text-xs',
                        printCompact ? 'print:inline' : 'block'
                    ]">
                        {{ value }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// Removed onMounted as it wasn't used
const props = defineProps({
    title: String,
    data: [Object, Array],
    printCompact: Boolean
});
</script>
