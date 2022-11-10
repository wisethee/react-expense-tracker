import { Expense } from './expense';

export type ExpenseFormProps = {
  addExpense: (expense: Expense) => void;
};
