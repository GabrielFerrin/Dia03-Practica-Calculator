import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Data from './components/Data/Data'
import Result from './components/Result/Result'

function App() {
  const information = {
    bill: 0, tipAmount: 0, totalAmount: 0, tipPercentage: 5,
    custom: '', people: 1
  };
  const [info, setInfo] = useState(information);
  const setData = (data) => {
    const newData = { ...info };
    if (data.hasOwnProperty('bill')) newData.bill = data.bill;
    if (data.hasOwnProperty('tipPercentage')) {
      newData.tipPercentage = data.tipPercentage;
    }
    if (data.hasOwnProperty('custom')) newData.custom = data.custom;
    if (data.hasOwnProperty('people')) newData.people = data.people;
    // calculate tipAmount
    newData.tipAmount = (newData.bill * (newData.tipPercentage / 100)
      / newData.people).toFixed(2);
    // calculate totalAmount
    newData.totalAmount = (parseFloat(newData.bill) / newData.people +
      parseFloat(newData.tipAmount)).toFixed(2);
    setInfo(newData);
  }
  return (
    <>
      <Header />
      <div className="general-wrapper">
        <Data setData={setData} info={info} />
        <Result info={info} setData={setData} />
      </div>
    </>
  )
}

export default App
