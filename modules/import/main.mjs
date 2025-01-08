/* 1. Importing Named Exports
Use curly braces to specify what you want to import.  */

/* import { add, subtract, multiply, divide } from '../export/mathUtils.mjs';

console.log(add(5, 10));
console.log(subtract(50, 10));
console.log(multiply(5, 10));
console.log(divide(40, 10)); */


/* 2. Importing Default Exports
No curly braces are required. You can assign any name to the imported default export. */

/* import modulus from '../export/mathUtils.mjs'; 
console.log('Using same name for default export', modulus(15, 2));

import modulusNewName from '../export/mathUtils.mjs';
console.log('Using new name for default export', modulusNewName(15, 10)); */


/* 3. Importing Both Named and Default Exports
You can combine imports in a single statement. */

/* import modulus, { add, subtract, multiply, divide } from '../export/mathUtils.mjs';

console.log(add(5, 10));
console.log(subtract(50, 10));
console.log(multiply(5, 10));
console.log(divide(40, 10));
console.log(modulus(15, 10)); */


/* 4. Importing Everything (*)
You can import all named exports from a module as an object. 
use a name for ali
Note: default export wont be included here*/

/* import * as mathUtils from '../export/mathUtils.mjs';

console.log(mathUtils.add(5, 10));
console.log(mathUtils.subtract(50, 10));
console.log(mathUtils.multiply(5, 10));
console.log(mathUtils.divide(40, 10)); */


/* 5. Aliasing Named Exports
You can rename a named export during import using the as keyword: */

/* import { add as addNewName, subtract as subtractNewName } from '../export/mathUtils.mjs';
console.log('Using new name for add -> named export', addNewName(5, 10));
console.log('Using new name for subtract -> named export', subtractNewName(50, 10)); */


/* import defaultFunctionNewName from '../export/mathUtils.mjs';
console.log(defaultFunctionNewName()); */

/* Dynamic Import
Dynamic imports allow you to load modules conditionally or at runtime using the import() function. 
use default() for default export*/

if(true) {
    import('../export/mathUtils.mjs').then((module) => {
        console.log(module.add(10, 5));
        // console.log(module.default(101, 5)); // console.log(module.modulus(101, 5)); this will not work
        console.log(module.default()); // console.log(module.defaultFunction()); this will not work
    })
}
