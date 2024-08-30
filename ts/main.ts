import { OrderManager } from "./classe.js";
import { Customer,Product,OrderItem,Order } from "./interface.js"



function createOrder(customer : Customer, items : OrderItem[], id : number): Order{
   
    return {
        id: id,
        customer: customer,
        items: items,
        status:"en attente"
    }

}

const customer1: Customer = {
    id: 1,
    name: "Jean",
    email: "jean@gmail.com"
};

console.log("Customer 1 :");
console.log(customer1);


const customer2: Customer = { 
    id: 2, 
    name: "Alice", 
    email: "alice@gmail.com" 
};

console.log("Customer 2 :");
console.log(customer2);


const product1: Product = { 
    id: 1, 
    name: "Laptop", 
    price: 1000, 
    stock: 10 
};

console.log("Product 1 :");
console.log(product1);


const product2: Product = { 
    id: 2, 
    name: "Mouse", 
    price: 25, 
    stock: 50 
};

console.log("Product 2 :");
console.log(product2);


const items: OrderItem[] = [
    { product: product1, quantity: 1 },
    { product: product2, quantity: 2 }
];

console.log("Items :");
console.log(items);


const order = createOrder(customer2, items, 1);

console.log("Order :");
console.log(order);


function calculateTotal(item:OrderItem[]){
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
};

console.log("Total Function :");    
console.log(calculateTotal);    


const items1: OrderItem[] = [
        { product: { id: 1, name: "Laptop", price: 1000, stock: 10 }, quantity: 1 },
        { product: { id: 2, name: "Mouse", price: 25, stock: 50 }, quantity: 2 }
];
    

const total = calculateTotal(items1);

console.log("Total Calculate :"); 
console.log(total); 


    