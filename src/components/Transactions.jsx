import React from "react";

const Transactions = ({ data, role, search, setSearch, setShowForm }) => {
  const filteredData = data.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase()),
  );
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();
  };
  return (
    <div className="border p-4 rounded-lg ">
      <div className="sm:flex block justify-between mb-3">
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded text-gray-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="sm:flex block sm:gap-4 mt-2 sm:mt-0">
          {role === "admin" && (
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-blue-600 transition mr-2 sm:mr-0"
              onClick={() => setShowForm(true)}
            >
              Add Transaction
            </button>
          )}
          <button
            onClick={exportJSON}
            className="bg-gray-600 text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-gray-700 transition mt-3 sm:mt-0"
          >
            Export JSON
          </button>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-2">Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-600/20 text-center">
              <td className="py-2">{item.date}</td>
              <td>{item.category}</td>
              <td>₹ {item.amount}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    item.type === "income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        {filteredData.length === 0 && (
          <p className="text-gray-600 mt-2">No transactions found</p>
        )}
      </table>
    </div>
  );
};

export default Transactions;
