let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);

companies.splice(2, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
