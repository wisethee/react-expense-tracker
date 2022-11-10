import ExpenseItem from '../expense-item/expense-item.component';
import ExpensesFilter from '../expenses-filter/expenses-filter.component';
import { ExpeseItemProps } from '../types/expense-item';

import './expenses.component.scss';

type ExpensesProps = {
  expenses: ExpeseItemProps[];
};

const Expenses = (props: ExpensesProps) => {
  const { expenses } = props;
  return (
    <div className="expenses">
      <ExpensesFilter />
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  );
};

export default Expenses;
