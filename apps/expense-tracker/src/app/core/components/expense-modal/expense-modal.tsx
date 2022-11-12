import { Dispatch, SetStateAction } from 'react';
import ExpenseForm from '../expense-form/expense-form';
import './expense-modal.scss';

type ExpenseModalProps = {
  closeModal: Dispatch<SetStateAction<boolean>>;
};

const ExpenseModal = (props: ExpenseModalProps) => {
  const { closeModal } = props;

  return (
    <div className="expense-modal">
      <ExpenseForm closeModal={closeModal} />
    </div>
  );
};

export default ExpenseModal;
