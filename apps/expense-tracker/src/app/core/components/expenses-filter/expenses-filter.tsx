import { ChangeEvent } from 'react';

type ExpensesFilterProps = {
  selected: string;
  onChangeFilter: (v: string) => void;
};

const ExpensesFilter = (props: ExpensesFilterProps) => {
  const { selected, onChangeFilter } = props;

  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    onChangeFilter(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
