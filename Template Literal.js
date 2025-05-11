//template literal

let obj= {
    item: "pen",
    price: 10,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;//Template Literal
console.log(output);
console.log("The cost of",obj.item,"is",obj.price,"rupees");//Regular approach
