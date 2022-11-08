import Card from '../card/card.component';
import ExpenseDate from '../expense-date/expense-date.component';
import { ExpeseItemProps } from '../types/expense-item';
import './expense-item.component.scss';

const ExpenseItem = (props: ExpeseItemProps) => {
  const { date, title, amount } = props;

  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
