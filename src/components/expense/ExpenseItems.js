import { useState } from "react";
import ExpenseList from "./ExpenseList.js";
import ExpenseHolder from "./ExpenseHolder.js";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Chartj from './Chartj.js'
function ExpenseItems(props) {


  const newArray = (tired) => {
    if (tired.date.getFullYear() == filteryear) {
      return tired;
    }
  };

  const [filteryear, setfilteryear] = useState("2021");

  const filterData = (data) => {
    setfilteryear(data);
  };
  const eexpense = props.items.filter(newArray);


  return (
    <Card>
      <ExpensesFilter onSelect={filterData} selected={filteryear} />
      <Chartj items={eexpense}/>
      <ExpenseList items={eexpense} />
    </Card>
  );
}

export default ExpenseItems;
