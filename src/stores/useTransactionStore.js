import { defineStore } from "pinia";

export const useTransactionStore = defineStore('transactionStore',

    {
        state: () => ({
            transactions: [
                { id: 1, title: 'Food', amount: -20 },
                { id: 2, title: 'Salary', amount: 300 },
                { id: 3, title: 'Book', amount: -10 },
                { id: 4, title: 'Camera', amount: -19 }
            ]
        }),
        getters: {
            totalAmount(state) {
                return state.transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
            }
        },
    }
)