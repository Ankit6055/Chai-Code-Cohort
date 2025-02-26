let salesData = [
    {product: "Laptop", price: 1200},
    {product: "smartphone", price: 800},
    {product: "Headphones", price: 150},
    {product: "Keyboard", price: 80},
]

// let totalSales = salesData.reduce((acc, sale) => 0 + sale.price, 0); // 80
let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0); // 2230

// console.log(totalSales);

// "Ankit".toUpperCase().indexOf("h"); // Pipe (pipe = currying)


let inventory = [
    {name: "Widget A", stock: 30},
    {name: "Widget B", stock: 120},
    {name: "Widget C", stock: 45},
    {name: "Widget D", stock: 70},
];

// Hamesha Array Return karta hai filter
// let lowStockItems = inventory.filter((item) => item.stock < 50);
let lowStockItems = inventory.filter((item) => {
    return item.stock < 50
});
// console.log(lowStockItems); // [ { name: 'Widget A', stock: 30 }, { name: 'Widget C', stock: 45 } ]
    

let userActivity = [
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 72},
    {user: "Charlie", activityCount: 33}
]

// find most active user
let mostActiveUser = userActivity.reduce((maxUser, user) => 
    user.activityCount > maxUser.activityCount ? user : maxUser
);
// console.log(mostActiveUser);

let expenses = [
    { description: "Groceries", amount: 50, category: "Food"},
    { description: "Electricity", amount: 100, category: "utilities"},
    { description: "Dinner", amount: 30, category: "Food"},
    { description: "Internet Bill", amount: 50, category: "utilities"},
]

// Its not daynamic
let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] += expense.amount; 
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
}, { Food: 0, Utilities: 0 });

// console.log("Expense Report", expenseReport);


let tasks = [
    {description: "Write report", Completed: false, priority: 2},
    {description: "Send email", Completed: true, priority: 3},
    {description: "Prepare presentation", Completed: false, priority: 1}
];

let pendingSortedTasks = tasks.filter((task) => !task.Completed).sort((a, b) => a.priority - b.priority );  // Method Chaining

// console.log(pendingSortedTasks);


let movieRatings = [
    {title: "Movie A", ratings: [4, 5, 3]},
    {title: "Movie B", ratings: [5, 5, 4]},
    {title: "Movie C", ratings: [3, 4, 2]},
];

let averageRatings = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
    let average = total / movie.ratings.length;
    return {title: movie.title, averageRatings: average.toFixed(2)};
});

console.log(averageRatings);

// [{title: "Movie A", ratings: 3.3}, {}]