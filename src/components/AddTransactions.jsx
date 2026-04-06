import React from "react";

import { useState } from "react";

const AddTransactions = ({ setShowForm, addTransaction }) => {
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.category || !form.amount) return;

    addTransaction({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });

    setShowForm(false);
    setForm({
      date: "",
      category: "",
      amount: "",
      type: "expense",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl space-y-3 w-80 shadow-md bg-white text-black border"
      >
        <h2 className="font-semibold">Add Transaction</h2>

        <input
          type="date"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          value={form.date}
        />

        <input
          type="text"
          placeholder="Category"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          value={form.category}
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          value={form.amount}
        />

        <select
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          value={form.type}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="text-gray-500 hover:cursor-pointer hover:text-red-600"
          >
            Cancel
          </button>

          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 hover:cursor-pointer transition">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransactions;
