import { useState } from 'react';
import Card from '../card/card.component';
import ExpenseItem from '../expense-item/expense-item.component';
import ExpensesFilter from '../expenses-filter/expenses-filter.component';
import { ExpeseItemProps } from '../types/expense-item';

import './expenses.component.scss';

type ExpensesProps = {
  expenses: ExpeseItemProps[];
};

const Expenses = (props: ExpensesProps) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expenses.map(({ date, title, amount }) => (
        <ExpenseItem date={date} title={title} amount={amount} />
      ))}
    </Card>
  );
};

export default Expenses;
