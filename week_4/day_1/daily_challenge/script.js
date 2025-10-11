let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// displayGroceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();

// cloneGroceries
const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    // The value of `user` will not change.
    // This is because primitive data types (like strings) are passed by value.
    // `user` was assigned a copy of the value "John", so changing `client` afterwards doesn't affect `user`.
    console.log(`Client is: ${client}`);
    console.log(`User is: ${user}`);

    let shopping = groceries;
    groceries.totalPrice = "35$";
    // Yes, the `shopping` object will also be modified.
    // This is because objects are passed by reference. `shopping` and `groceries` both point to the same object in memory.
    // Changing the object through one variable affects the other.
    console.log(`Groceries total price: ${groceries.totalPrice}`);
    console.log(`Shopping total price: ${shopping.totalPrice}`);


    groceries.other.paid = false;
    // Yes, for the same reason. Since `shopping` and `groceries` reference the exact same object,
    // modifying a nested property is reflected in both.
    console.log(`Groceries paid status: ${groceries.other.paid}`);
    console.log(`Shopping paid status: ${shopping.other.paid}`);
};

cloneGroceries();