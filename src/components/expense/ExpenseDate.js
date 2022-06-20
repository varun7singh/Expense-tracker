import './ExpenseDate.css'

function ExpenseDate(props){
    const month = props.dates.toLocaleString('en-us', {month:'long'})
    const year = props.dates.getFullYear()
    const day = props.dates.toLocaleString('en-us', {day: '2-digit'})

    return (
        <div className = "lmao">
            <div className = "year">{(year)}</div>
            <div className = "month">{(month)}</div>
            <div className = "day">{(day)}</div>
        </div>
    )
}

export default ExpenseDate