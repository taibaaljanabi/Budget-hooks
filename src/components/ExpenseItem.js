import React from 'react';
import {MdEdit, MdDeleteSweep} from 'react-icons/md'
const ExpenseItem = ({expense}) => {
  const {id, charge,amount} = expense
  return (
    <li className='item'>
    <div className='info'>
    <span className='expense'>{charge}</span>
    <span className='amount'>{amount}</span>
    </div>
    <button className='edit-btn' aria-lable='edit button'>
    <MdEdit/>
    </button>
    <button className='clear-btn' aria-lable='clear button'>
    <MdDeleteSweep/>
    </button>
    </li>
    
  );
}

export default ExpenseItem;
