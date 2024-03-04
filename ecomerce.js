const prompt = require('prompt-sync')({sigint: true});

const ecommerceProduct = [
    {
        productId: 1,
        productName: "sugar",
        productQuantity: 20,
        productPrice: 4000,
    
    },
    {
        productId: 2,
        productName: "garri",
        productQuantity: 15,
        productPrice: 8000,
    
    },
    {
        productId: 3,
        productName: "beans",
        productQuantity: 5,
        productPrice: 4000,
    
    },
    {
        productId: 4,
        productName: "coke",
        productQuantity: 10,
        productPrice: 10000,
    
    },
    {
        productId: 5,
        productName: "yam",
        productQuantity: 16,
        productPrice: 6000,
    
    },
    {
        productId: 6,
        productName: "rice",
        productQuantity: 25,
        productPrice: 7600,
    },
    {
        productId: 7,
        productName: "bread",
        productQuantity: 10,
        productPrice: 5000,
    },
    {
        productId: 8,
        productName: "juice",
        productQuantity: 23,
        productPrice: 7600,
    
    },
    {
        productId: 9,
        productName: "onions",
        productQuantity: 34,
        productPrice: 8000,
    
    },
    {
        productId: 10,
        productName: "egg",
        productQuantity: 34,
        productPrice: 7700,
    
    },
    {
        productId: 11,
        productName: "corn",
        productQuantity: 45,
        productPrice: 4500,
    
    },
    {
        productId: 12,
        productName: "wheat",
        productQuantity: 17,
        productPrice: 14000,
    
    },
    {
        productId: 13,
        productName: "garlic",
        productQuantity: 13,
        productPrice: 45000,
    
    },
    {
        productId: 14,
        productName: "ginger",
        productQuantity: 17,
        productPrice: 45000,
    
    },
    {
        productId: 15,
        productName: "pepper",
        productQuantity: 30,
        productPrice: 4300,
    }
    
];

// arrays to hold all the cart items
const cart = []

// function to display products
    function displayProducts(){
        for (const product of ecommerceProduct) {
         console.log(`${product.productId} ${product.productName} and price is ${product.productPrice}`)
             }
 }


// displayProducts()

// function to add to cart 
function addToCart(itemID, quantity) {
    const selectedProduct = ecommerceProduct.find((item) => item.productId === itemID)
    if (selectedProduct) {
        if (selectedProduct.productQuantity >= quantity) {
            cart.push({
                productName: selectedProduct.productName,
                productPrice: selectedProduct.productPrice,
                quantity: quantity 
            })
            console.log("Product added to cart.")
        } else {
            console.log("Sorry, the quantity you requested is not available.")
        }
    } else {
        console.log("Sorry, the product ID does not exist.")
    }
}




addToCart(8, 6)

function displayCart(){
    for(const item of cart){
        console.log(item)
        console.log(`Our product name is  + ${item}`)
    }

    // using the the reduce function to get the total price of the items in the cart
    const total = cart.reduce((total, item) => total + item.productPrice * item.quantity, 0) 
    console.log(`The total price of the Products you puchased is $ ${total}`)
}

displayCart()

function startShopping(){
    console.log("Welcome to the DigiShops built by Js Module guys....")
    console.log("These are the available Items in stock")
    displayProducts()

    while(true){
        
        const config = {
            promptMessage: "Enter Your Preference: "
        }
        const choice = prompt(config.promptMessage)

        if(choice.toLowerCase() === "checkout"){
            displayCart()
            break;
        }
        
        const productId = parseInt(choice);

    }

}

startShopping()