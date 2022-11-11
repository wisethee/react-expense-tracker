import { useState } from 'react';
import Card from '../card/card.component';
import ExpenseItem from '../expense-item/expense-item.component';
import ExpensesFilter from '../expenses-filter/expenses-filter.component';
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

      {filteredExpenses.map(({ id, date, title, amount }) => (
        <ExpenseItem key={id} date={date} title={title} amount={amount} />
      ))}
    </Card>
  );
};

export default Expenses;
