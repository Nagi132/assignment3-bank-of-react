/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Debits = ({ debits, addDebit, accountBalance }) => {
  // Local state for the form input
  const [newDebit, setNewDebit] = useState({ description: "", amount: 0 });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new debit object with the current date
    const debitToAdd = {
      ...newDebit,
      date: new Date().toISOString().split("T")[0],
      amount: parseFloat(newDebit.amount).toFixed(2)
    };

    addDebit(debitToAdd);
    setNewDebit({ description: "", amount: 0 });
  };

  return (
    <div>
      <h1>Debits</h1>

      <div>Account Balance: ${parseFloat(accountBalance).toFixed(2)}</div>

      <ul>
        {debits.map((debit, index) => (
          <li key={index}>
            {debit.description} - ${parseFloat(debit.amount).toFixed(2)} - {debit.date.slice(0, 10)}
          </li>
        ))}
      </ul>

      {/* Add Debit Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={newDebit.description}
          onChange={(e) => setNewDebit({ ...newDebit, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newDebit.amount}
          onChange={(e) => setNewDebit({ ...newDebit, amount: e.target.value })}
        />
        <button type="submit">Add Debit</button>
      </form>

      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;

