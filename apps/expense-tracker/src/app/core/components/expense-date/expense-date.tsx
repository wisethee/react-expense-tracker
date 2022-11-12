import { Expense } from '../../types/expense';
import './expense-date.scss';

type ExpenseDateProps = Pick<Expense, 'date'>;

const ExpenseDate = (props: ExpenseDateProps) => {
  const { date } = props;
  const day = date.toLocaleString('en-us', { day: '2-digit' });
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.toLocaleString('en-us', { year: 'numeric' });
  const formatedDate = `${day} ${month} ${year}`;

  return <div className="expense-date">{formatedDate}</div>;
};

export default ExpenseDate;
