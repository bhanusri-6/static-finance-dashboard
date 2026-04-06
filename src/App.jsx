import { useState, useEffect } from "react";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import Chart from "./components/Chart";
import AddTransactions from "./components/AddTransactions";

const initialData = [
  {
    id: 4,
    date: "2026-04-04",
    amount: 2000,
    category: "Freelance",
    type: "income",
  },
  {
    id: 3,
    date: "2026-04-03",
    amount: 800,
    category: "Transport",
    type: "expense",
  },
  {
    id: 2,
    date: "2026-04-02",
    amount: 1200,
    category: "Food",
    type: "expense",
  },
  {
    id: 1,
    date: "2026-04-01",
    amount: 5000,
    category: "Salary",
    type: "income",
  },
];

const App = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const addTransaction = (newItem) => {
    setData([newItem, ...data]);
  };
  const [dark, setDark] = useState(false);
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(data));
  }, [data]);
  return (
    <div
      className={
        dark
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 min-h-screen"
      }
    >
      <div className="p-6 max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center gap-3">
          <h1 className="text-3xl font-bold">Finance Dashboard</h1>
          <div className="sm:flex block sm:gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="border px-3 py-1 rounded mb-4 sm:mb-0"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border px-3 py-1 rounded-md"
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Overview</h2>
          <Overview data={data} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Income Vs Expenditure Trend
          </h2>
          <Chart data={data} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Transactions</h2>
          <Transactions
            data={data}
            role={role}
            search={search}
            setSearch={setSearch}
            setShowForm={setShowForm}
          />
          {showForm && (
            <AddTransactions
              setShowForm={setShowForm}
              addTransaction={addTransaction}
            />
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Insights</h2>
          <Insights data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
