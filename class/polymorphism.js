/* Polymorphism allows methods in a class to be implemented differently based on the object that calls them. 
In JavaScript, this is achieved through method overriding and dynamic method dispatch. */

/* Types of Polymorphism in JavaScript
Compile-time Polymorphism (Method Overloading): This is not natively supported in JavaScript because it does not allow defining 
multiple methods with the same name but different parameter lists in a class. However, you can simulate it by handling different 
parameter scenarios within a single method.

Run-time Polymorphism (Method Overriding): This is supported in JavaScript, primarily in the context of inheritance. 
It allows a subclass to provide a specific implementation for a method that is already defined in its superclass. */

/* Benefits of Polymorphism
Code Reusability: You can write code that works on the base class and automatically works with any derived class.

Extensibility: New subclasses can be added without changing existing code.

Flexibility: Behavior can vary dynamically at runtime based on the object type. */

// Example: Run-time Polymorphism

// Base Class
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

// Subclass 1
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}

// Subclass 2
class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}

// Subclass 3
class Cow extends Animal {
    makeSound() {
        console.log("Moo");
    }
}

// Function demonstrating polymorphism
function animalSound(animal) {
    animal.makeSound(); // The method called depends on the actual object type
}

// Creating instances
const dog = new Dog();
const cat = new Cat();
const cow = new Cow();

// Demonstrating polymorphism
animalSound(dog); // Output: Bark
animalSound(cat); // Output: Meow
animalSound(cow); // Output: Moo


/* Broad Application Example
Consider a payment system where different payment methods (CreditCard, PayPal, BankTransfer) process payments differently: */

class Payment {
    process(amount) {
        console.log(`Processing generic payment of $${amount}`);
    }
}

class CreditCard extends Payment {
    process(amount) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPal extends Payment {
    process(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

class BankTransfer extends Payment {
    process(amount) {
        console.log(`Processing bank transfer payment of $${amount}`);
    }
}

function processPayment(paymentMethod, amount) {
    paymentMethod.process(amount);
}

const creditCard = new CreditCard();
const paypal = new PayPal();
const bankTransfer = new BankTransfer();

processPayment(creditCard, 100); // Output: Processing credit card payment of $100
processPayment(paypal, 200);    // Output: Processing PayPal payment of $200
processPayment(bankTransfer, 300); // Output: Processing bank transfer payment of $300

/* This example shows how polymorphism makes the system flexible and maintainable while supporting different behaviors dynamically. */