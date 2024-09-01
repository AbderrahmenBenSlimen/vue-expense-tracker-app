<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    incomes: {
        type: Number,
        required: true
    },
    expenses: {
        type: Number,
        required: true
    }
}
);
</script>
<template>
    <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">${{ incomes }}</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p id="money-minus" class="money minus">${{ expenses }}</p>
    </div>
</template>