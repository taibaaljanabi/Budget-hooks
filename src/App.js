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
  // state values
  const [ali, setAli] = useState(intialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})
  // functionality 
  const handleCharge = (e) => {
    console.log(`charge: ${e.target.value}`)
    setCharge(e.target.value)
  }
  const handleAmount =(e) =>{
    console.log(`amount: ${amount}`)
    setAmount(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const singleExpense = {id:uuid(), charge: charge, amount: amount}

    if(charge != '' && amount > 0){
      setAli([...ali, singleExpense])
      setCharge('')
      setAmount('')
    }else{
      // set an alert
    }
  }
  const handleAlert = ({type, text})=>{
    setAlert({show:true, type,text})
    setTimeout(()=>{
      setAlert({show:false})
    }, 3000)
  }
  
  
  return (
  <>
    {alert.show && <Alert  type={alert.type} text={alert.text}/>}
    {/* <Alert></Alert> */}
    <h1>Budget Calculator</h1>
    <main className='App'>
    <ExpenseForm 
    charge ={charge} 
    amount ={amount} 
    handleCharge ={handleCharge}
    handleAmount={handleAmount} 
    handleSubmit={handleSubmit}
     />
    <ExpenseList expenses={ali}/>
    </main>
    <h1>Total Spending:
    <span className='total'> 
    ${''}
    {ali.reduce((acc, curr)=>{
      return acc += parseInt((curr.amount))
    }, 0)}
     </span>
    </h1>
  </>
  );
}

export default App;
