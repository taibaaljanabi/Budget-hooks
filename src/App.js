import React from 'react';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'
import './App.css';


const intialExpenses = [
{id: 1, charge: 'rent', amount: 1600}
]

function App() {
  return (
  <>
    <Alert></Alert>
    <ExpenseForm/>
    <ExpenseList/>
  </>
  );
}

export default App;
