// object may have properties, methods
// property can be anything including another object
let parentObj = {
    parentProperty: "This is property",
    objFunction: (param1) => {
        console.log(`This is method parameter: ${param1}`);
    },
    childObj: {
        childProperty: "This is child property"
    }
};

console.log(parentObj);
console.dir(parentObj);
console.log(parentObj.parentProperty);
console.log(parentObj.childObj.childProperty);
parentObj.objFunction("Shoaib");

// Use for...in loop for iteration for object
let fruits = {
    fruit1: "Apple",
    fruit2: "Orange",
    fruit3: "Grape",
};

for(let key in fruits) {
    console.log(`${fruits[key]}`);
    
}