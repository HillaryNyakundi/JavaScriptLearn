////Return true if more than one element satisfies the condition

const transactions = [-1000, -3000, -4000, -2000, -898, -3800, -4500];

let result = transactions.every(function(amount){
       return amount > 0
})

console.log(result)