import { ChangeEvent, FormEvent, useState } from 'react';
import './expense-form.component.scss';

const initialState = {
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
};

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState(initialState);
  const { enteredAmount, enteredDate, enteredTitle } = userInput;

  /**
   * @description: update state
   */
  const formChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setUserInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
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
    resetForm();
    console.log(userInput);

    return userInput;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="enteredTitle"
            value={enteredTitle}
            onChange={formChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="enteredAmount"
            value={enteredAmount}
            onChange={formChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="enteredDate"
            value={enteredDate}
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
