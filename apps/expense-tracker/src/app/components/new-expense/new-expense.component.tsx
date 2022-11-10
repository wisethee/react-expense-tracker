import ExpenseForm from '../expense-form/expense-form.component';
import { NewExpenseProps } from '../types/new-expense';

import './new-expense.component.scss';

const NewExpense = (props: NewExpenseProps) => {
  const { addExpense } = props;

  return (
    <div className="new-expense">
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};

export default NewExpense;
