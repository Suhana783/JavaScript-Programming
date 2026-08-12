let expenseTracker = {

    id: 1,
    name: Suhana, 
    income: 60000,
    savingsGoals: 20000,

    expenses: [

        {
            id: 1,
            name: "Rent",
            amount: 15000,
            category: "Needs",
            date: "2026-08-01"
        },

        {
            id: 2,
            name: "Food",
            amount: 3000,
            category: "Needs",
            date: "2026-08-03"
        },

        {
            id: 3,
            name: "Travel",
            amount: 2000,
            category: "Travel",
            date: "2026-08-04"

        },

        {
            id: 4,
            name: "Shopping",
            amount: 4000,
            category: "Wants",
            date: "2026-08-05"
        },

        {

              id: 5,
            name: "Medicine",
            amount: 700,
            category: "Needs",
            date: "2026-08-06"
        },

        {
            id: 6,
            name: "Movie",
            amount: 500,
            category: "Wants",
            date: "2026-08-07"
        }
    ]
};

// 1.Print User Information 

console.log("Name:", expenseTracker.name);
console.log("Income:", expenseTracker.income)
console.log("Savings Goal:" , expenseTracker.savingsGoals)

// 2. Print All expenses 

for (let expense of expenseTracker.expenses) {
    console.log(
        expense.name,
        expense.amount,
        expense.category,
        expense.date
    );
}

// 3. Calculate all expenses 

let total = 0
for (let totalexpense of expenseTracker.expenses) {
        total += expense.amount
}

console.log("Total Expenses Are :", total)

// 4. Calculate remaining balance 

let remainingBalance = expenseTracker.income - total
console.log("Remaining Balance :", remainingBalance)
