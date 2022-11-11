import { useState } from 'react';
import ExpenseForm from '../expense-form/expense-form.component';
import { NewExpenseProps } from '../types/new-expense';

import './new-expense.component.scss';

const NewExpense = (props: NewExpenseProps) => {
  const { addExpense } = props;

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const newExpenseHandler = () => {
    setShowExpenseForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          addExpense={addExpense}
          closeExpense={setShowExpenseForm}
        />
      ) : (
        <button onClick={newExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
