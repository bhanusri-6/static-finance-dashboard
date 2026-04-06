import React from "react";

const Insights = ({ data }) => {
  const expenseData = data.filter((item) => item.type === "expense");

  const categoryMap = {};

  expenseData.forEach((item) => {
    if (categoryMap[item.category]) {
      categoryMap[item.category] += item.amount;
    } else {
      categoryMap[item.category] = item.amount;
    }
  });

  let topCategory = "";
  let max = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > max) {
      max = categoryMap[key];
      topCategory = key;
    }
  }

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="font-semibold mb-2">Insights</h2>
      <p>Top spending category: {topCategory || "N/A"}</p>
    </div>
  );
};

export default Insights;
