//Ternary
let age = 20;
let isAdult = age >= 18 ? true : false;
console.log(isAdult);
//spred operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]; //spread arr1 and arr2 into arr3
console.log(arr3);
//Nullish Coalescing Operator
let user = {
    name: "John",
    age: null,
    address: { street: "456 Elm St" }
};
let userAge = user.age ?? 18; // if user.age is null or undefined, use 18
console.log(userAge);
console.log(user.address ?? "not specified"); // prints "456 Elm St"
//Optional Chaining
let user2 = {
    name: "Jane",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
console.log(user2.address?.street); // prints "123 Main St"
console.log(user2.contact?.phone); // prints undefined instead of throwing an error