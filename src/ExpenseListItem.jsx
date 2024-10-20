export function ExpenseListItem({ id, date, title, amount, type, handleDelete }) {
    return (
        <li key={id}>
            <div>Date: {date}</div>
            <div>Expense: {title}</div>
            <div>Amount: ${amount.toFixed(2)}</div>
            <div>Type of Expense: {type}</div>
            <button onClick={() => handleDelete(id)} className="delete_btn">Delete</button>
        </li>
    );
}
