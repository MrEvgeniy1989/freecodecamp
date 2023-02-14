const squareList = arr => {
    // Only change code below this line
    arr = arr.filter(el => Math.sign(el) >= 0 && Number.isInteger(el)).map(el => Math.pow(el, 2))
    return arr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);