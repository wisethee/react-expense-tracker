import { Fragment } from 'react';
import ExpenseModal from './core/components/expense-modal/expense-modal';
import Expenses from './core/components/expenses/expenses';
import NewExpense from './core/components/new-expense/new-expense';
import { Expense } from './core/types/expense';

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

const App = () => {
  return (
    <Fragment>
      <main id="main" className="main">
        <div className="container">
          <NewExpense />
          <Expenses expenses={expenses} />
        </div>
      </main>

      <ExpenseModal />
    </Fragment>
  );
};

export default App;
