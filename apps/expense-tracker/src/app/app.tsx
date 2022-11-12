import { Fragment, useState } from 'react';
import ExpenseModal from './core/components/expense-modal/expense-modal';
import Expenses from './core/components/expenses/expenses';
import NewExpense from './core/components/new-expense/new-expense';
import { Expense } from './core/types/expense';

const EXPENSES_DATA: Expense[] = [
  {
    id: 'e1',
    title: 'Travel Expenses',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'Tv Table',
    amount: 119.99,
    date: new Date(2021, 3, 24),
  },
  { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e5',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e6',
    title: 'Car',
    amount: 929.9,
    date: new Date(2022, 1, 20),
  },
  {
    id: 'e7',
    title: 'Laptop',
    amount: 329.99,
    date: new Date(2022, 1, 20),
  },
];

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [expenses, setExpenses] = useState(EXPENSES_DATA);

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const addExpense = (expense: Expense) => {
    const expenseID = Math.random().toFixed(2);
    const expenseData = {
      ...expense,
      id: `e${expenseID}`,
    };
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="container">
          <NewExpense onShowModal={showModalHandler} />
          <Expenses expenses={expenses} />
        </div>
      </main>

      {showModal && (
        <ExpenseModal closeModal={setShowModal} addExpense={addExpense} />
      )}
    </Fragment>
  );
};

export default App;
