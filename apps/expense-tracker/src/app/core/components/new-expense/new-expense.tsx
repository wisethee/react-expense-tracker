import './new-expense.scss';

type NewExpenseProps = {
  onShowModal: () => void;
};

const NewExpense = (props: NewExpenseProps) => {
  const { onShowModal } = props;

  const showModalHandler = () => {
    onShowModal();
  };

  return (
    <div className="new-expense">
      <div className="new-expense-title">
        <h1>EXPENSE TRACKER</h1>
      </div>
      <div className="new-expense-action">
        <button onClick={showModalHandler}>Add New Expense</button>
      </div>
    </div>
  );
};

export default NewExpense;
