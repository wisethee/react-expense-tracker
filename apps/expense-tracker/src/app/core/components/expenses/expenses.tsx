import { useState } from 'react';
import { Expense } from '../../types/expense';
import ExpensesFilter from '../expenses-filter/expenses-filter';
import ExpensesList from '../expenses-list/expenses-list';

import './expenses.scss';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = (props: ExpensesProps) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <div className="expenses-header">
        <div className="expenses-header-start">Date</div>
        <div className="expensed-header-end">
          <div className="expenses-description">Description</div>
          <div className="expenses-price">Price</div>
        </div>
      </div>
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
