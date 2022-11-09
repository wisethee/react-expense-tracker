import { useState } from 'react';
import Card from '../card/card.component';
import ExpenseDate from '../expense-date/expense-date.component';
import { ExpeseItemProps } from '../types/expense-item';
import './expense-item.component.scss';

const ExpenseItem = (props: ExpeseItemProps) => {
  const { date, title, amount } = props;

  const [itemTitle, setItemTitle] = useState(title);

  const clickHandler = () => {
    setItemTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
