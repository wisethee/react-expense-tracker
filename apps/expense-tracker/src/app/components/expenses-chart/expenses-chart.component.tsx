import Chart from '../chart/chart.component';
import { Expense } from '../types/expense';

type ExpensesChartProps = {
  expenses: Expense[];
};

const ExpensesChart = (props: ExpensesChartProps) => {
  const { expenses } = props;

  const chatDataPoints = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0,
    },
    {
      label: 'Apr',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'Jun',
      value: 0,
    },
    {
      label: 'Jul',
      value: 0,
    },
    {
      label: 'Aug',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];

  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chatDataPoints[expenseMonth].value = Number(expense.amount);
  });

  return <Chart dataPoints={chatDataPoints} />;
};

export default ExpensesChart;
