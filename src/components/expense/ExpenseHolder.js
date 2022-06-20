import ExpenseDate from "./ExpenseDate";
import "./expenseHolder.css";
import React, { useState } from "react";

function ExpenseHolder(props) {
  const [a, b] = useState(props.title);

  function clickHandler() {
    b("Done");
  }

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
        <div className="f">
          <button onClick={clickHandler}>Done</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseHolder;
