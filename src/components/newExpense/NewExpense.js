import "./newExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  const [flag, setflag] = useState(false);

  const displayButtonHandler = () => {
    setflag(true);
  }
  const newExpenseFormHandler = (expenseData) => {
    const nayaExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onBLah(nayaExpenseData);
    setflag(false)
  };

  const cancel = () => {
    setflag(false)
  }



  return (<div className="newExpense">

  {!flag && <div className="prevDisplayform">
    <button type = "button" onClick
    ={displayButtonHandler} className="btn1"><h3>Add</h3></button>
  </div>}
  {flag && <ExpenseForm onFormSave={newExpenseFormHandler} onCancel={cancel}/>}


  </div>)
}

export default NewExpense;
