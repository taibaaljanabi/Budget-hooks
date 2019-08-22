import React from 'react';
import {MdSend} from 'react-icons/md'

const ExpenseForm = ({
  charge, 
  amount, 
  handleCharge, 
  handleAmount, 
  handleSubmit,
  edit
       }) => {
  return (
   <form  onSubmit={handleSubmit}>
     <div className='form-center'>
        <div className='form-group'>
         <label htmlFor='charge'>Charge</label>
         <input 
         className='form-control' 
         type='text' 
         id='charge' 
         name='charge'
         placeholder='Enter the charge'
         value={charge}
         onChange={handleCharge}
         ></input>
        </div>
        <div className='form-group'>
         <label htmlFor='amount'>Amount</label>
         <input 
         className='form-control' 
         type='number' 
         id='amount' 
         name='amount'
         placeholder='Enter the amount'
         value={amount}
         onChange={handleAmount}
         ></input>
        </div>
     </div>
         <button type='submit' className='btn'>
          {edit? 'Edit' : 'Submit'}
          <MdSend className='btn-icon'/>
         </button>
   </form>
  );
}

export default ExpenseForm;


