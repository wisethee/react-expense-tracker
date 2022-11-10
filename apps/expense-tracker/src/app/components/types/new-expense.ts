import { Expense } from './expense';

export type NewExpenseProps = {
  addExpense: (expense: Expense) => void;
};
