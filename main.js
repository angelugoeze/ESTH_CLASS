//write a function to calculate area of a square.

//length * length
//function squareArea (length, length){

 // return length * length  
//}

//console.log(squareArea (40, 30))

//calculate total cost

function calculateTotalCost(price, quantity, taxRate)
{
 var subTotal = price * quantity
 var tax = subTotal * (taxRate/100)
 var totalCost = subTotal + tax
 return totalCost
  
}

var myPrice = 500
var myQuantity = 10
var myTaxRate = 7

let total = calculateTotalCost (myPrice, myQuantity, myTaxRate)
console.log ("the total cost of the goods you bought is: " + total)