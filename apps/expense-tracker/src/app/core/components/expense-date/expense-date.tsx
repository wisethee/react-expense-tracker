import { Expenses } from '../../types/expenses';
import './expense-date.scss';

type ExpenseDateProps = Pick<Expenses, 'date'>;

const ExpenseDate = (props: ExpenseDateProps) => {
  const { date } = props;
  const day = date.toLocaleString('en-us', { day: '2-digit' });
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.toLocaleString('en-us', { year: 'numeric' });

  return (
    <div className="expense-date">
      <div className="expense-date-day">{day}</div>
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
