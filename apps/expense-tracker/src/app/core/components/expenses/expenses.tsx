import { Fragment, useState } from 'react';
import { Expense } from '../../types/expense';
import ExpensesChart from '../expenses-chart/expenses-chart';
import ExpensesFilter from '../expenses-filter/expenses-filter';
import ExpensesList from '../expenses-list/expenses-list';

import './expenses.scss';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = (props: ExpensesProps) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <Fragment>
      <div className="expenses-start">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />
      </div>

      <div className="expenses">
        <div className="expenses-header">
          <div className="expenses-header-start">Date</div>
          <div className="expenses-header-end">
            <div className="expenses-description">Description</div>
            <div className="expenses-price">Price</div>
          </div>
        </div>
        <ExpensesList expenses={filteredExpenses} />
      </div>
    </Fragment>
  );
};

export default Expenses;
