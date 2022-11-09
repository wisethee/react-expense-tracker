import { ChangeEvent, useState } from 'react';
import './expense-form.component.scss';

const initialState = {
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
};

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState<string>('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState(initialState);

  const formChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setUserInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="enteredTitle" onChange={formChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="enteredAmount"
            onChange={formChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="enteredDate"
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
