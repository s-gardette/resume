<template>
    <button
        class="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
        @click="printWindow"
    >
        Imprimer Mon C.V
    </button>
</template>

<script>
export default {
    methods: {
        printWindow() {
            window.print();
        },
    },
};
</script>
