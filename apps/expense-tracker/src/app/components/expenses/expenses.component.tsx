import { useState } from 'react';
import Card from '../card/card.component';
import ExpensesFilter from '../expenses-filter/expenses-filter.component';
import ExpensesList from '../expenses-list/expenses-list.component';
import { Expense } from '../types/expense';

import './expenses.component.scss';

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
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
