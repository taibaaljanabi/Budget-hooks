import React,{useState} from 'react';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'
import './App.css';
import uuid from 'uuid/v4'


const intialExpenses = [
{
  id: uuid()
  , charge: 'rent'
  , amount: 1600
},
{
  id: uuid()
  , charge: 'car payment',
   amount: 400
  },
{
  id: uuid()
  , charge: 'credit card bill'
  , amount: 1200
}
]
// console.log(intialExpenses)

// import useState()
// function takes returns [] with two values
// first value is the acutal value of the state
// second value is the function that changes that value in the state (control or updated that value)
// we should have a default value too.


function App() {
  const [ali, setAli] = useState(intialExpenses)
  console.log(ali);
  
  return (
  <>
    <Alert></Alert>
    <h1>Budget Calculator</h1>
    <main className='App'>
    <ExpenseForm/>
    <ExpenseList expenses={ali}/>
    </main>
    <h1>Total Spending:
    <span className='total'> 
    ${''}
    {ali.reduce((acc, curr)=>{
      return acc += (curr.amount)
    }, 0)}
     </span>
    </h1>
  </>
  );
}

export default App;
