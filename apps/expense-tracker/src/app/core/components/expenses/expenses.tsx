import { Expense } from '../../types/expense';
import ExpensesList from '../expenses-list/expenses-list';

import './expenses.scss';

const expenses: Expense[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Expenses = () => {
  return (
    <div className="expenses">
      <div className="expenses-header">
        <div className="expenses-header-start">Date</div>
        <div className="expensed-header-end">
          <div className="expenses-description">Description</div>
          <div className="expenses-price">Price</div>
        </div>
      </div>
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default Expenses;
