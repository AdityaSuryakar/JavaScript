//Reduce
let arr = [1,2,3,4];
const output = arr.reduceRight((res,curr) => {
    return res + curr;
})
console.log(output);

//Q)Calculate largest num from an array using 'reduce' method.
let arr = [5,6,2,1];
const output = arr.reduceRight((prev,curr) => {
    return prev > curr ? prev : curr;
})
console.log(output);
