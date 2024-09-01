<script setup>
import { ref, defineEmits } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const emit = defineEmits([
    'addTransaction'
]);
const formData = ref({
    text: '',
    amount: 0
});

const onSubmit = () => {

    if (!formData.value.text || !formData.value.amount) {
        toast.error('Please enter text and amount');
        return;
    }
    formData.value.amount = parseFloat(formData.value.amount);
    emit('addTransaction', formData.value);
    formData.value.text = '';
    formData.value.amount = '';
}
</script>

<template>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" v-model="formData.text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
            <label for="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="text" v-model="formData.amount" id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>