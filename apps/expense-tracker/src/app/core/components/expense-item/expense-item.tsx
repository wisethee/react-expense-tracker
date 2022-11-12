import { Expenses } from '../../types/expenses';
import ExpenseDate from '../expense-date/expense-date';
import './expense-item.scss';

type ExpanseItemProps = Omit<Expenses, 'id'>;

const ExpenseItem = (props: ExpanseItemProps) => {
  const { title, amount, date } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expanse-item-title">{title}</div>
      <div className="expanse-item-amount">{amount}</div>
    </div>
  );
};

export default ExpenseItem;
