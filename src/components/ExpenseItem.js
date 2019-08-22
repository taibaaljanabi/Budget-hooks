import React from 'react';
import {MdEdit, MdDeleteSweep} from 'react-icons/md'
const ExpenseItem = ({expense,deleteItem,editItem}) => {
  const {id, charge,amount} = expense
  return (
    <li className='item'>
    <div className='info'>
    <span className='expense'>{charge}</span>
    <span className='amount'>{amount}</span>
    </div>
    <button className='edit-btn' aria-lable='edit button' onClick={()=>{editItem(id)}}>
    <MdEdit/>
    </button>
    <button className='clear-btn' aria-lable='clear button' onClick={()=>{deleteItem(id)}}>
    <MdDeleteSweep/>
    </button>
    </li>
    
  );
}

export default ExpenseItem;
