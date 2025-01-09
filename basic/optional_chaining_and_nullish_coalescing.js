/* Optional chaining (?.) is a JavaScript operator introduced in ES2020 (ES11) 
that allows you to safely access deeply nested properties, methods, 
or array elements without having to explicitly check if each level of the object exists. 
If a reference in the chain is null or undefined, the operation short-circuits and returns undefined instead of throwing an error. */

/* Syntax
object?.property
object?.[expression]
object?.method() */

const user = { profile: 
    { name: "Alice" },
    greet: () => "Hello!"
};
console.log(user.profile.name); // "Alice"
// console.log(user.address.city); // Error: Cannot read property 'city' of undefined

console.log(user.profile?.name); // "Alice"
console.log(user.address?.city); // undefined (no error)


//Safely Calling Methods
console.log(user.greet()); // "Hello!"
// console.log(user.sayHi()); // Error: user.sayHi is not a function

console.log(user.greet?.()); // "Hello!"
console.log(user.sayHi?.()); // undefined (no error)

//Preventing Errors in Optional Data
const port = user.server?.port ?? 3000; // Defaults to 3000 if undefined
console.log(port);

/* Combining with Nullish Coalescing (??)
Optional chaining often pairs well with the nullish coalescing operator (??) to provide default values: */

// The ?? operator only checks for null or undefined.

const person = null;
const name = person?.profile?.name ?? "Guest";
console.log(name); // "Guest"

