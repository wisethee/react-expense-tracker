import { ChangeEvent, FormEvent, useState } from 'react';
import { ExpenseFormProps } from '../types/expense-form';
import './expense-form.component.scss';

const initialState = {
  title: '',
  amount: '',
  date: '',
};

const ExpenseForm = (props: ExpenseFormProps) => {
  const { addExpense } = props;
  const [userInput, setUserInput] = useState(initialState);
  const { amount, date, title } = userInput;

  /**
   * @description: update state
   */
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

  /**
   * @description: reset the form after the state is submitted
   */
  const resetForm = () => {
    setUserInput(initialState);
  };

  /**
   * @description submit form state
   */
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addExpense(userInput);
    resetForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={formChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={formChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={date}
            min={'2019-01-01'}
            max={'2022-12-31'}
            onChange={formChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
