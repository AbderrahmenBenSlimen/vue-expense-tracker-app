<script setup>
import AddTransaction from './components/AddTransaction.vue';
import Balance from './components/Balance.vue';
import Header from './components/Header.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import { useToast } from 'vue-toastification';
import { ref, computed, onMounted } from 'vue';

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
})
const toast = useToast();
const transactions = ref([]);

const totalAmount = computed(() => {
  return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0)
});

const incomes = computed(() => {
  return transactions.value.filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2)
})

const expenses = computed(() => {
  return transactions.value.filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2)
})

const handleAdd = (formData) => {
  transactions.value.push({
    id: transactions.value.length + 1,
    title: formData.text,
    amount: formData.amount
  });
  saveTransactionToLocalStorage();
  toast.success('Transaction added successfully');
}

const handleDelete = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);
  saveTransactionToLocalStorage();
  toast.success('Transaction deleted successfully');
}

const saveTransactionToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));

}
</script>

<template>
  <Header />
  <div class="container">
    <Balance :totalAmount="+totalAmount" />
    <div class="inc-exp-container">
      <IncomeExpenses :incomes="+incomes" :expenses="+expenses" />
    </div>
    <TransactionList :transactions="transactions" @deleteTransaction="handleDelete" />
    <AddTransaction @addTransaction="handleAdd" />
  </div>

</template>
