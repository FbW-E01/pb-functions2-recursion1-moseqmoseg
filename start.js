const array = [1, 2, 3, 4, 5, 6]

// reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(Numbers.reduce(reducer));

function sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1));
    }
}

console.log(sum(array));