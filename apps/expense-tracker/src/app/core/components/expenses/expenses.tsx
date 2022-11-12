import { Expense } from '../../types/expense';
import ExpensesList from '../expenses-list/expenses-list';

import './expenses.scss';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = (props: ExpensesProps) => {
  const { expenses } = props;

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
