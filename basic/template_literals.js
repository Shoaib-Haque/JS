// Example 1: Embedding Expressions
// Template literals allow embedding JavaScript expressions using ${}.

const full_name = "Alice";
const age = 25;

const greeting = `Hello, my name is ${full_name} and I am ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is Alice and I am 25 years old.


// Example 2: Multi-Line Strings
// Template literals make it easy to create multi-line strings without needing \n.

const address = `123 Main Street
Suite 200
New York, NY 10001`;

console.log(address);
// Output:
// 123 Main Street
// Suite 200
// New York, NY 10001


// Example 3: Function Calls Inside
// You can directly call functions within a template literal.

const getPrice = () => 99.99;

const message = `The total price is $${getPrice()}.`;

console.log(message);
// Output: The total price is $99.99.


// Example 4: Nested Template Literals
// You can use nested expressions for complex scenarios.
const person = {
    firstName: "John",
    lastName: "Doe"
};
  
const fullName = `${person.firstName} ${person.lastName}`;

console.log(`Hello, ${fullName}!`);
// Output: Hello, John Doe!


// When Is It Useful?
// Dynamic String Construction:

// Avoids cumbersome concatenation (+) for combining strings and variables.
// Enhances readability for strings with embedded variables or expressions.
// Multi-Line Strings:

// Makes creating multi-line text simpler and more intuitive.
// HTML String Generation:

// Convenient for generating HTML templates dynamically.

// Why Use Template Literals?
// Simplifies string operations.
// Improves code readability.
// Makes embedding dynamic values seamless.
// Ideal for multi-line strings and templates.


const title = "Welcome";
const content = "Thank you for visiting.";

const html = `
    <div>
        <h1>${title}</h1>
        <p>${content}</p>
    </div>
`;

console.log(html);