import './expense-date.component.scss';

type ExpenseDateProps = {
  date: Date;
};

const ExpenseDate = (props: ExpenseDateProps) => {
  const { date } = props;

  const year = date.toLocaleString('en-us', { year: 'numeric' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
