
{
    // console.log(a); // ReferenceError: Cannot access 'a' before initialization (hoisting)
    let a = 10;
    console.log(a);
    // let a = 20; // error
}
// console.log(a);  // ReferenceError: a is not defined (outside the block)

{
    let a = 20; // correct
    console.log(a);
    {
        let a = 30; // correct
        console.log(a);
    }
}

{
    const a = 40; //correct
    console.log(a);
}

{
    const a = 50; // correct
    console.log(a);
    {
        const a = 60; // correct
        console.log(a);
    }
}

/* let
Use: Declare variables whose values can change (mutable).
Scope: Block-scoped.
Behavior:
The variable exists only within the block { ... } where it's defined.
It prevents the variable from being accessed before declaration due to temporal dead zone.
You can reassign the value of a let variable. */

/* const
Use: Declare variables whose values must remain constant (immutable reference).
Scope: Block-scoped.
Behavior:
You cannot reassign a const variable.
The variable exists only within the block { ... } where it's defined.
For objects and arrays, the reference to the object/array cannot change, but the contents of the object/array can be modified. */

/* 
Comparison Between let, const, and var
Feature	let	const	var
Scope	Block	Block	Function
Hoisting	Yes, but not accessible before declaration (temporal dead zone)	Yes, but not accessible before declaration (temporal dead zone)	Yes, accessible before declaration (undefined)
Reassignment	Allowed	Not Allowed	Allowed
Redeclaration	Not Allowed	Not Allowed	Allowed
Initialization	Optional	Mandatory	Optional
*/
