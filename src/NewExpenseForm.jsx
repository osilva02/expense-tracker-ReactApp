import { useState } from "react";
export function NewExpenseForm({onSubmit}) {

    const [newExp, setNewExp] = useState("")
    const [newAmt, setNewAmt] = useState("")
    const [newDate, setNewDate] = useState("")
    const [type, setType] = useState("")

    

    function handleSubmit(e) {
        e.preventDefault();

        if (!newExp || !newAmt || !newDate || !type) return;

        onSubmit(newExp, newAmt, newDate, type)

        // Reset fields
        setNewExp("")
        setNewAmt("")
        setNewDate("")
        setType("")
    }

    return (

        <form onSubmit={handleSubmit} className="new-expense-form" >
            <div className="expense-tracker">
                <label htmlFor="addExp">Expense Title:</label>
                <input
                    value={newExp}
                    onChange={e => setNewExp(e.target.value)}
                    type="text"
                    id="addExp" />

                <label htmlFor="addAmt">Expense Amount:</label>
                <input
                    value={newAmt}
                    onChange={e => setNewAmt(e.target.value)}
                    type="number"
                    id="addAmt" />

                <label htmlFor="addDate">Expense Date:</label>
                <input
                    value={newDate}
                    onChange={e => setNewDate(e.target.value)}
                    type="date"
                    id="addDate" />

                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="">Select Expense Type</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="utilities">Utilities</option> 
                </select>

                <button type="submit" className="add_btn">Add Expense</button>
            </div>
        </form >



    )

}