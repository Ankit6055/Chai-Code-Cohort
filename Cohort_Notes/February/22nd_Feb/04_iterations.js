let salesData = [
    {product: "Laptop", price: 1200},
    {product: "smartphone", price: 800},
    {product: "Headphones", price: 150},
    {product: "Keyboard", price: 80},
]

// let totalSales = salesData.reduce((acc, sale) => 0 + sale.price, 0); // 80
let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0); // 2230

console.log(totalSales);

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
console.log(mostActiveUser);