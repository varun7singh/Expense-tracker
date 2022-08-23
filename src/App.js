import React, { useState } from "react";
import "./App.css";
import ExpenseItems from "./components/expense/ExpenseItems";
import NewExpense from "./components/newExpense/NewExpense";

const intExpenses = [
  {
    id: "1",
    title: "Mercedes",
    amount: 710,
    date: new Date(2021, 5, 30),
  },
  {
    id: "2",
    title: "cake",
    amount: 129,
    date: new Date(2021, 4, 30),
  },
  {
    id: "3",

    title: "Complan",
    amount: 650,
    date: new Date(2021, 6, 30),
  }
];

function App() {
  let [expenses, setExpenses] = useState(intExpenses);

  const scene = (expenseDatalmao) => {
    setExpenses((prevExpense) => {
      return [expenseDatalmao, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onBLah={scene} />
      <ExpenseItems items={expenses} />
    </div>
  );
}

export default App;
