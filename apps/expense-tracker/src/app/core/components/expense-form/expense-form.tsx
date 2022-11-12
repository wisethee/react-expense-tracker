import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import { Expense } from '../../types/expense';
import './expense-form.scss';

type ExpenseFormProps = {
  closeModal: Dispatch<SetStateAction<boolean>>;
  addExpense: (expense: Expense) => void;
};

const userInputInitialState: Omit<Expense, 'id'> = {
  title: '',
  amount: 0,
  date: new Date(),
};

const ExpenseForm = (props: ExpenseFormProps) => {
  const { closeModal, addExpense } = props;

  const [userInput, setUserInput] = useState(userInputInitialState);

  const { amount, date, title } = userInput;

  const formChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.valueAsDate) {
      const { name, valueAsDate } = event.currentTarget;
      setUserInput((prevState) => {
        return {
          ...prevState,
          [name]: valueAsDate,
        };
      });
    } else {
      const { name, value } = event.currentTarget;
      setUserInput((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addExpense(userInput);
    resetForm();
    closeModal(false);
  };

  const resetForm = () => {
    setUserInput(userInputInitialState);
  };

  const closeModalHandler = () => {
    closeModal(false);
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <h1>ADD NEW EXPENSE</h1>
      <div className="expense-form-controls">
        <div className="expense-form-control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={formChangeHandler}
          />
        </div>

        <div className="expense-form-control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={formChangeHandler}
          />
        </div>

        <div className="expense-form-control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={date.toISOString().split('T')[0]}
            onChange={formChangeHandler}
          />
        </div>
      </div>

      <div className="expense-form-actions">
        <button type="submit">Add Expense</button>
        <button onClick={closeModalHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
