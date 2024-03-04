function list (){
let welcome = "Welcome to Nigus shop"; // Welcome message
let about = "At Nigus shop, we sell original products and our clients satisfaction is your utmost priority";// About message
let products = "Nigus list of products are as follows:"; //list of available products

const item = [

{
productId: 1,
productName: "Milk",
productPrice: 2000,
productQuantity: 4
},

{
productId: 2,
productName: "Jam",
productPrice: 2500,
productQuantity: 2
},


{
    productId: 3,
    productName: "Bread",
    productPrice: 1200,
    productQuantity: 2
},
    
{
    productId: 4,
    productName: "Milo",
    productPrice: 1500,
    productQuantity: 1
 },
    
 {
    productId: 5,
    productName: "Indomie",
    productPrice: 5000,
    productQuantity: 3
 },
    
{
    productId: 6,
    productName: "Wine",
    productPrice: 3000,
    productQuantity: 12
},
    
{
    productId: 7,
    productName: "Chocolate",
    productPrice:1600,
    productQuantity: 4
},

{
    productId: 8,
    productName: "Biscuit",
    productPrice:3400,
    productQuantity: 2,
},

{
    productId: 9,
    productName: "Juice",
    productPrice:2600,
    productQuantity: 2
},

{
    productId: 10,
    productName: "Banana",
    productPrice:2000,
    productQuantity: "1 kilo"
},

{
    productId: 11,
    productName: "Groudnut",
    productPrice:1550,
    productQuantity: "1 bottle"
},

{
    productId: 12,
    productName: "Perfume",
    productPrice:25000,
    productQuantity: 1
},

{
    productId: 13,
    productName: "soap",
    productPrice:2000,
    productQuantity: 1
},

{
    productId: 14,
    productName: "Cream",
    productPrice:6000,
    productQuantity: 1
},

{
    productId: 15,
    productName: "Youghurt",
    productPrice:1200,
    productQuantity: 1
}

]

let thankYou = "We appreciate your patronage, Thank you!!!"; // Thank you message

console.log(welcome); // welcome output
console.log(about); // about output
console.log(products); // available products



for (const items of item) {
console.log (`Product id ${items.productId} : Product name is ${items.productName} : product price ${items.productPrice} : quantity of product is ${items.productQuantity}`)
}

console.log("We appreciate your patronage. Thank you!!!"); // available products

}

list()

