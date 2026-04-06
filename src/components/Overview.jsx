import React from "react";

const Overview = ({ data }) => {
  let income = 0;
  let expense = 0;

  data.forEach((item) => {
    if (item.type === "income") income += item.amount;
    else expense += item.amount;
  });

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Balance" value={balance} color="text-gray-600" />
      <Card title="Income" value={income} color="text-green-600" />
      <Card title="Expenses" value={expense} color="text-red-600" />
    </div>
  );
};

function Card({ title, value, color }) {
  return (
    <div className="shadow-sm border rounded-xl p-4 hover:shadow-md transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold mt-1 ${color}`}>₹ {value}</h2>
    </div>
  );
}

export default Overview;
