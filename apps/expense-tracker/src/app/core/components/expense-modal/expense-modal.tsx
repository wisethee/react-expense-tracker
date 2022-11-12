import { Dispatch, SetStateAction } from 'react';
import { Expense } from '../../types/expense';
import ExpenseForm from '../expense-form/expense-form';
import './expense-modal.scss';

type ExpenseModalProps = {
  closeModal: Dispatch<SetStateAction<boolean>>;
  addExpense: (expense: Expense) => void;
};

const ExpenseModal = (props: ExpenseModalProps) => {
  const { closeModal, addExpense } = props;

  return (
    <div className="expense-modal">
      <ExpenseForm closeModal={closeModal} addExpense={addExpense} />
    </div>
  );
};

export default ExpenseModal;
