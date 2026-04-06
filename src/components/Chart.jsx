import React from "react";

const Chart = ({ data }) => {
  const map = {};

  data.forEach((item) => {
    if (!map[item.date]) {
      map[item.date] = {
        income: [],
        expense: [],
      };
    }

    if (item.type === "income") {
      map[item.date].income.push(item);
    } else {
      map[item.date].expense.push(item);
    }
  });

  const chartData = Object.keys(map).map((date) => ({
    date,
    incomeTotal: map[date].income.reduce((sum, i) => sum + i.amount, 0),
    expenseTotal: map[date].expense.reduce((sum, i) => sum + i.amount, 0),
    incomeList: map[date].income,
    expenseList: map[date].expense,
  }));
  const max =
    chartData.length > 0
      ? Math.max(
          ...chartData.map((d) => Math.max(d.incomeTotal, d.expenseTotal)),
        )
      : 1;

  return (
    <div className="p-4 rounded-xl border w-auto sm:overflow-hidden overflow-x-scroll">
      <div className="flex gap-4 text-xs mb-2">
        <span className="flex items-center gap-1 text-gray-500">
          <span className="w-3 h-3 bg-green-600"></span> Income
        </span>
        <span className="flex items-center gap-1 text-gray-500">
          <span className="w-3 h-3 bg-blue-600"></span> Expense
        </span>
      </div>
      <div className="flex items-end gap-4 ">
        {chartData.map((item) => (
          <div
            key={item.date}
            className="flex flex-col items-center justify-end h-full group relative"
          >
            <div className="absolute -top-10 bg-gray-800 dark:bg-gray-700 text-white text-xs w-40 px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition text-left shadow z-10">
              <div>
                <p className="font-semibold">Income</p>
                {item.incomeList.length > 0 ? (
                  item.incomeList.map((i, idx) => (
                    <p key={idx}>
                      {i.category}: ₹{i.amount}
                    </p>
                  ))
                ) : (
                  <p>No income</p>
                )}
              </div>

              <div className="mt-1">
                <p className="font-semibold">Expense</p>
                {item.expenseList.length > 0 ? (
                  item.expenseList.map((e, idx) => (
                    <p key={idx}>
                      {e.category}: ₹{e.amount}
                    </p>
                  ))
                ) : (
                  <p>No expense</p>
                )}
              </div>
            </div>

            
            <div className="flex items-end gap-4 h-64 hover:cursor-pointer hover:shadow-lg transition">
              <div
                className="w-5 bg-green-600 rounded hover:cursor-pointer hover:bg-green-700"
                style={{
                  height: `${(Math.sqrt(item.incomeTotal) / Math.sqrt(max)) * 100}%`,
                  minHeight: "10px",
                }}
              ></div>

             
              <div
                className="w-5 bg-blue-600 rounded hover:cursor-pointer hover:bg-blue-700"
                style={{
                  height: `${(Math.sqrt(item.expenseTotal) / Math.sqrt(max)) * 100}%`,
                  minHeight: "10px",
                }}
              ></div>
            </div>

            
            <p className="text-xs mt-2 text-gray-500">{item.date.slice(5)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
