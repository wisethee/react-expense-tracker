import './expense-form.scss';

const ExpenseForm = () => {
  return (
    <form className="expense-form">
      <h1>ADD NEW EXPENSE</h1>
      <div className="expense-form-controls">
        <div className="expense-form-control">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="expense-form-control">
          <label>Amount</label>
          <input type="number" />
        </div>

        <div className="expense-form-control">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>

      <div className="expense-form-actions">
        <button type="submit">Add Expense</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
