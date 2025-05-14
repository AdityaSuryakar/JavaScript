//Q)For a given array of numbers , print the square of each value using the forEach loop.
let nums = [2,3,4,5,6]; 
nums.forEach(num => {
    console.log(num*num);
});

//OR

let nums = [2,3,4,5,6]; 
let calSquare = (num) => {
    console.log(num*num);
};
num.forEach(calSquare);
