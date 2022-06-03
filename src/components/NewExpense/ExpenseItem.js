
import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date (2021,2,28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 273;
    return (
        <div className="expense-item container">
            <div >{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;