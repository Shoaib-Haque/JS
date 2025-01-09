/* The import() function in JavaScript, often referred to as a dynamic import, 
allows you to load JavaScript modules dynamically at runtime instead of statically at the beginning of a script. 
It returns a promise, making it asynchronous and ideal for use cases like code splitting, lazy loading, and conditional loading of modules. */

// 1. Loading a Module Dynamically

const moduleName = "mathUtils";
import(`../export/${moduleName}.mjs`)
  .then((math) => {
    console.log(math.add(2, 3)); // Using the imported module
  })
  .catch((err) => {
    console.error("Error loading module:", err);
  });


// 2. Using async/await with Dynamic Imports

async function loadMathModule() {
    try {
        const math = await import(`../export/${moduleName}.mjs`);
        console.log(math.subtract(10, 5));
    } catch (error) {
        console.error("Failed to load module:", error);
    }
}

loadMathModule();
  
// 3. Conditional Imports

const featureA = "feature_a.mjs";
const featureB = "feature_b.mjs";
const featureFlag = false;

if (featureFlag) {
    import(`../export/${featureA}`)
  .then((module) => {
    console.log(module.initializeFeature());
  })
  .catch((err) => {
    console.log(err);
  });
} else {
  import(`../export/${featureB}`)
  .then((module) => {
    console.log(module.initializeFeature());
  });
}