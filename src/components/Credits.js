/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Credits = ({ credits, addCredit, accountBalance }) => {
  // Local state for the form input
  const [newCredit, setNewCredit] = useState({ description: "", amount: 0 });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new credit object with the current date
    const creditToAdd = {
      ...newCredit,
      date: new Date().toISOString().split("T")[0], // Format: yyyy-mm-dd
      amount: parseFloat(newCredit.amount).toFixed(2) // Rounded to 2 decimal places
    };
    // Call the addCredit function passed as a prop
    addCredit(creditToAdd);
    // Reset the form
    setNewCredit({ description: "", amount: 0 });
  };

  return (
    <div>
      <h1>Credits</h1>
      {/* Display Account Balance */}
      <div>Account Balance: ${parseFloat(accountBalance).toFixed(2)}</div>  
      
      {/* Credits List */}
      <ul>
        {credits.map((credit, index) => (
          <li key={index}>
            {credit.description} - ${parseFloat(credit.amount).toFixed(2)} - {credit.date}
          </li>
        ))}
      </ul>

      {/* Add Credit Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={newCredit.description}
          onChange={(e) => setNewCredit({ ...newCredit, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newCredit.amount}
          onChange={(e) => setNewCredit({ ...newCredit, amount: e.target.value })}
        />
        <button type="submit">Add Credit</button>
      </form>

      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;
