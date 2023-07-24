//From the transaction array filter out positive elements and calculate the total amount
//use filter and reduce to achive this


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let balance = transactions.filter(function(amount){
       return amount>0
}).reduce(function(acc, value){
       return acc + value
}, 0)


console.log(balance)

