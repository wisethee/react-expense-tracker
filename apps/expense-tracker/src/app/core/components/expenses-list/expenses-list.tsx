import { Expense } from '../../types/expense';
import ExpenseItem from '../expense-item/expense-item';
import './expenses-list.scss';

type ExpensesListProps = {
  expenses: Expense[];
};

const ExpensesList = (props: ExpensesListProps) => {
  const { expenses } = props;

  return (
    <div className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </div>
  );
};

export default ExpensesList;
