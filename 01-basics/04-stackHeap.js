let bob = 'GIGI';
let alice = bob; // A copy of the value of 'bob' is assigned to 'alice'
alice = 'Adeline'; // Changing 'alice' doesn't affect 'bob' since it's a primitive type (string)
// output: 'Adeline' because 'alice' was reassigned
console.log(alice);
// output: 'GIGI' because 'bob' remains unchanged (copy of primitive value is independent)
console.log(bob);

// Non-primitive data types (e.g., objects) are passed by reference:
let obj1 = { name: 'John' }; // Object 'obj1' is created
let obj2 = obj1; // 'obj2' references the same object as 'obj1', not a copy
console.log(obj1.name); // output: 'John' because the object is initially unchanged
obj2.name = 'Zade'; // Changing 'obj2' affects 'obj1' since both point to the same object
console.log(obj1.name); // output: 'Zade' as the name property in the shared object has been modified
