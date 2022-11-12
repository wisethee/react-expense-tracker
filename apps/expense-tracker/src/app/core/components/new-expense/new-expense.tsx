import './new-expense.scss';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <div className="new-expense-title">
        <h1>EXPENSE TRACKER</h1>
      </div>
      <div className="new-expense-action">
        <button>Add New Expense</button>
      </div>
    </div>
  );
};

export default NewExpense;
