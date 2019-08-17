import React,{useState} from 'react';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'
import './App.css';
import uuid from 'uuid/v4'


const intialExpenses = [
{id: uuid(), charge: 'rent', amount: 1600},
{id: uuid(), charge: 'car payment', amount: 400},
{id: uuid(), charge: 'credit card bill', amount: 1200}
]
// console.log(intialExpenses)

// import useState()
// function takes returns [] with two values
// first value is the acutal value of the state
// second value is the function that changes that value in the state (control or updated that value)
// we should have a default value too.


function App() {
  const [ali, setAli] = useState(intialExpenses)
  console.log(ali,setAli);
  
  return (
  <>
    <Alert></Alert>
    <ExpenseForm/>
    <ExpenseList/>
  </>
  );
}

export default App;
