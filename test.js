/*let sum = [];

for (let i = 10; i >= sum.length; i--) {
 sum -= i;
}

console.log(sum);

function sumNums(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNums(3)); // Outputs 6

let sum = 0, num;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;

  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach(numItem);

  function numItem(thingy, i, ar) {
    console.log(`a[' + i + '] = ` + thingy);
  }

  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach(consoleItem);

  function consoleItem(item, index, arr) {
    console.log(`a[' + index + '] = ` + item);
  } 

  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach(consoleItem);

  function consoleItem(item, index, arr) {
    console.log(index);
    console.log(item);
    console.log(arr);
  } 

  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach(numItem);

  function numItem(thingy, i, ar) {
    console.log(thingy);
    console.log(i);
    console.log(ar);
  }
  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach((thingy, i, ar) => {
    console.log(thingy);
    console.log(i);
    console.log(ar);
  });*/

  const numbers = [1, 2, 3, 4, 5];

  let sum = 0;

  numbers.forEach(thingy => {
    
    sum += thingy;
    
    console.log(sum); //returns all sums not just one
    
  });

  // DIFFERENT USE CASE FOR THE FUNCTION ABOVE

  const letters = ["a", "c", "d", "z", "z", "a", "a", "d", "b", "c", "c", "d"];

  let count = {};

  letters.forEach(thingy => {
    
    if (count[thingy]) {
      count[thingy]++;
    }else{
      count[thingy] = 1;
    }
    
    console.log(count); //returns all sums not just one
    
  });