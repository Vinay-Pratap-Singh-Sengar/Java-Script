// let a = 10
// console.log(a)
// let b = a 
// b = 5

// console.log(b)
// --------------------------------- interview question ------------------------------ 
let obj1 = {
  name: "Vinay",
  address: {
    city: "Delhi"
  }
};

let obj2 = { ...obj1 }; // Shallow copy
console.log(obj2.name)
obj2.name = "Rahul";
console.log(obj2.name)
obj2.address.city = "Mumbai";
// console.log(obj2.address.city )
console.log(obj1.name);         // Vinay
console.log(obj1.address.city); // Mumbai ❌ (changed)
