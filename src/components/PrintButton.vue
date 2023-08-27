<template>
    <button class="" @click="printWindow">Imprimer Mon C.V</button>
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
