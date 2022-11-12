import { Expense } from '../../types/expense';
import ExpenseDate from '../expense-date/expense-date';
import './expense-item.scss';

type ExpanseItemProps = Omit<Expense, 'id'>;

const ExpenseItem = (props: ExpanseItemProps) => {
  const { title, amount, date } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item-end">
        <div className="expanse-item-title">{title}</div>
        <div className="expanse-item-amount">
          £{parseFloat(`${amount}`).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
