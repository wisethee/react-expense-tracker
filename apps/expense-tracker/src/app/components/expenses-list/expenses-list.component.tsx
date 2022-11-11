import ExpenseItem from '../expense-item/expense-item.component';
import { Expense } from '../types/expense';
import './expenses-list.component.scss';

type ExpensesListProps = {
  filteredExpenses: Expense[];
};

const ExpensesList = (props: ExpensesListProps) => {
  const { filteredExpenses } = props;

  const noExpensesEl = (
    <p className="expenses-list__fallback">No expenses found.</p>
  );
  const expensesEl = (
    <ul className="expenses-list">
      {filteredExpenses.map(({ id, date, title, amount }) => (
        <ExpenseItem key={id} date={date} title={title} amount={amount} />
      ))}
    </ul>
  );

  return <div>{!filteredExpenses.length ? noExpensesEl : expensesEl}</div>;
};

export default ExpensesList;
