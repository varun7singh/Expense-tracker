import React, { useState } from "react";
import "./newExpenseForm.css";

const ExpenseForm = (props) => {
  const [etitle, setetitle] = useState("");
  const titleHandler = (event) => {
    setetitle(event.target.value);
  };

  const [eamount, seteamount] = useState("");
  const amountHandler = (event) => {
    seteamount(event.target.value);
  };

  const [edate, setedate] = useState("");
  const dateHandler = (event) => {
    setedate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: etitle,
      amount: +eamount,
      date: new Date(edate),
    };

    props.onFormSave(newExpenseData);

    seteamount("");
    setetitle("");
    setedate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="necontrols">
        <div className="necontrol">
          <label>Title</label>
          <input type="text" value={etitle} onChange={titleHandler}></input>
        </div>
        <div className="necontrol">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={eamount}
            onChange={amountHandler}
          ></input>
        </div>
        <div className="necontrol">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            value={edate}
            onChange={dateHandler}
          ></input>
        </div>
        <div className="button_div">
          <button type="button" className="btn" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
