import React, { useState } from "react";
import "./ExpenseList.css";
import ExpenseHolder from "./ExpenseHolder.js"
const ExpenseList = (props) => {

  if(props.items.length === 0)
  {
    return <h2 className = "text">No Expense Found !</h2>;
  }

    return (
      <ul className="expense-list">
        {
          props.items.map((expense) => (
            <ExpenseHolder
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </ul>
    )
  }


export default ExpenseList;
