<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    totalAmount: {
        type: Number,
        required: true
    }
});
</script>
<template>
    <h4>Your Balance</h4>
    <h1 id="balance">{{ totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</h1>
</template>>