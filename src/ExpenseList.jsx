import { ExpenseListItem } from "./ExpenseListItem";

export function ExpenseList({ expense, handleDelete }) {
    return (

        <ul className="expense_list">
            {expense.length === 0 && <li>No Expenses Available</li>}
            {expense.map(exp => {

                return (
                    <ExpenseListItem 
                    {...exp} 
                    key={exp.id} 
                    handleDelete={handleDelete} 
                    />
                )

            })}
        </ul>
    )
}