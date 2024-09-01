<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    transactions: {
        type: Array,
        required: true
    }
});

const emit = defineEmits([
    'deleteTransaction'
]);

const deleteTransaction = (id) => {
    emit('deleteTransaction', id);
}

</script>
<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactions" :key="transaction.id"
            :class="{ 'minus': transaction.amount < 0, 'plus': transaction.amount > 0 }">
            {{ transaction.title }}<span>{{ transaction.amount }}</span><button class="delete-btn"
                @click="deleteTransaction(transaction.id)">x</button>
        </li>
    </ul>
</template>