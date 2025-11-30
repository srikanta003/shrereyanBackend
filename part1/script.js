// Fundamental of js

// array and object
// functions return
// async js coding
// forEach map filter find indexOf

// var blob = await fetch("https://randomuser.me/api/");
// var res = await blob.json();
// console.log(res )

var arr = [1, 2, 3, 4, 5];
var evenNumber = [2, 4, 6, 8, 10];
arr.forEach(function (val) {
  console.log(`Hello ${val}`);
});

// const ratings = [1, 2, 3, 4];
// let sum = 0;
// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//    sum = await sumFunction(sum, rating);
// })

// console.log(sum)

// const items = ["item1", "item2", "item3"];
// copyItems = [];
// items.forEach((item) => {
//   copyItems.push(item);
// });
// console.table(copyItems);

// // using thisArg

class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    array.forEach((entry) => {
      this.sum += entry;
      ++this.count;
    });
  }
}

const obj = new Counter();
obj.add([1, 2, 3, 4, 5]);
console.log(obj.count);
console.log(obj.sum);

// flatten array
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

const flatten = (arr) => {
  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
};
console.log(nested);
console.log(flatten(nested));

// map
var squareArr = arr.map(function (val) {
  return val ** 2;
});

console.log(squareArr);

var evenNumber = squareArr.filter(function (val) {
   return val % 2 === 0;
   // if (val % 2 === 0) {return true};
});
console.log(evenNumber);


async function fetchData() {
   let res = await fetch("https://randomuser.me/api/");
   let data =await res.json();
   console.log(data.results[0].name.first)
}

fetchData()