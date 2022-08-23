import ExpenseDate from "./ExpenseDate";
import "./expenseHolder.css";
import React, { useState } from "react";

function ExpenseHolder(props) {

  return (
    <div className="expenseitem">
      <ExpenseDate dates={props.date}></ExpenseDate>
      <div className="itemdes">
        <div className="f">
          <h2>{props.title}</h2>
        </div>
        <div className="f">
          <h2>${props.amount}</h2>
        </div>
      </div>
    </div>
  );
}

export default ExpenseHolder;
