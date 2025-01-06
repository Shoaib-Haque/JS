/* JavaScript achieves encapsulation using public, private members within classes. 
The modern implementation of encapsulation is made possible through 
the use of private fields (denoted by a # prefix) and accessors (getters and setters). */

/* Example: Encapsulation in JavaScript
Here's a simple example of encapsulation: */

/* Explanation
Public and Private Members:

accountHolder is a public property, meaning it can be accessed and modified directly.
#balance is a private field, meaning it cannot be accessed or modified directly from outside the class. This ensures sensitive data is protected.
Encapsulation via Methods:

Public methods like deposit, withdraw, getBalance, and setBalance provide controlled access to the private field #balance.
Access Control:

Direct access to #balance is restricted, preventing accidental or unauthorized modification.
The class methods act as a "gatekeeper," enforcing rules such as positive deposit amounts or preventing negative balances. */

class BankAccount {
    #balance; // Private field

    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder; // Public property
        this.#balance = initialBalance; // Private property
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.#balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.#balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.#balance -= amount;
        console.log(`Withdrew $${amount}. Remaining balance: $${this.#balance}`);
    }

    // Getter for balance
    getBalance() {
        return this.#balance;
    }

    // Setter for balance (optional)
    setBalance(newBalance) {
        if (newBalance < 0) {
            console.log("Balance cannot be negative.");
            return;
        }
        this.#balance = newBalance;
        console.log(`Balance set to $${this.#balance}`);
    }
}

// Using the BankAccount class
const myAccount = new BankAccount("John Doe", 1000);

myAccount.deposit(500); // Deposited $500. New balance: $1500
myAccount.withdraw(200); // Withdrew $200. Remaining balance: $1300
console.log(myAccount.getBalance()); // 1300

// Direct access to private field is not allowed
// console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class

// Attempting to set balance via the setter
myAccount.setBalance(2000); // Balance set to $2000
myAccount.setBalance(-100); // Balance cannot be negative.


/* Broad Application Example
Consider a User Authentication System where you need to store and validate passwords securely. */

class User {
    #password; // Private field

    constructor(username, password) {
        this.username = username;
        this.#password = this.#encryptPassword(password); // Encrypting password on initialization
    }

    // Private method to encrypt the password
    #encryptPassword(password) {
        return password.split("").reverse().join(""); // Simple encryption for demonstration
    }

    // Public method to validate the password
    validatePassword(inputPassword) {
        return this.#encryptPassword(inputPassword) === this.#password;
    }

    // Public method to update the password
    updatePassword(oldPassword, newPassword) {
        if (!this.validatePassword(oldPassword)) {
            console.log("Old password is incorrect.");
            return;
        }
        this.#password = this.#encryptPassword(newPassword);
        console.log("Password updated successfully.");
    }
}

// Using the User class
const user = new User("Alice", "secure123");

console.log(user.validatePassword("secure123")); // true
console.log(user.validatePassword("wrongPassword")); // false

user.updatePassword("secure123", "newSecure456"); // Password updated successfully.
console.log(user.validatePassword("newSecure456")); // true

// Attempt to access private password field
// console.log(user.#password); // Error: Private field '#password' must be declared in an enclosing class

