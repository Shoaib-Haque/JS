
/* The export keyword allows you to make functions, objects, or values available for other modules to import.

1. Named Exports
You can export multiple values from a module.
These exports must be imported using their exact names.
 */
export const add = (a, b) => {
    return a + b;
}

export const subtract = (a, b) => {
    return a - b
}

export const multiply = (a, b) => {
    return a * b;
}

export const divide = (a, b) => {
    return a / b;
}

/* 2. Default Exports
A module can have only one default export.
Default exports don’t require a specific name when imported. */
const modulus = (a, b) => {
    return a % b;
}

// export default modulus; // This is correct for default export


function defaultFunction() {
    return "Default Export Function";
}
 
export default defaultFunction; // This is also correct for default export