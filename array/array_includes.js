const fruits = ["apple", "orange", "grape"];

console.log(fruits.includes("burger"));

/* Prevent Duplicate Entries: */

const items = ["apple"];
const newItem1 = "grape";
const newItem2 = "apple";
if (!items.includes(newItem1)) {
    items.push(newItem1);
}
if (!items.includes(newItem2)) {
    items.push(newItem2);
}
console.log(items);

