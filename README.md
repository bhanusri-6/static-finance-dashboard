# Finance Dashboard UI

This project is a simple finance dashboard built as part of a frontend assignment.  
It allows users to view their financial summary, track transactions, and understand spending patterns.

---

## Features

- Dashboard overview with total balance, income, and expenses
- Role-based UI (Viewer / Admin)
- Income vs Expense chart (custom built)
- Transactions table with search functionality
- Add transaction (Admin only)
- Basic insights (top spending category)
- Data persistence using localStorage
- Export transactions as JSON
- Dark mode toggle
- Fully responsive design
- Basic hover animations for improved user experience

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6)

---

## Approach

- Managed state using React useState
- Passed data using props for simplicity
- Used localStorage to persist data without backend
- Built a custom chart using div elements instead of external libraries
- Implemented tooltip-based breakdown for better data visibility
- Added dark mode using Tailwind's dark classes

---

## Role Handling

- Viewer → can only view data
- Admin → can add new transactions
  Role switching is handled using a dropdown for demonstration.

---

## Assumptions

- Data is static and stored locally
- No backend integration is used
- Focus is on UI and frontend logic

---

## How to Run

1. Clone the repository

```bash
git clone https://github.com/bhanusri-6/static-finance-dashboard.git
```

