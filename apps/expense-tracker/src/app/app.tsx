import ExpenseItem from './core/components/expense-item/expense-item';
import { Expenses } from './core/types/expenses';

const expenses: Expenses[] = [
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
    <div className="container">
      <div className="expenses">
        <div className="expenses-header"></div>
        <div className="expenses-list">
          {expenses.map(({ id, title, amount, date }) => (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
