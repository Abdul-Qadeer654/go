import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">August 30th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.36</div>
      </div>
    </div>
  );
}

export default ExpenseItem;