const add = (a, b) => {return a + b};

const subtract = (a, b) => {return a - b};

const sum = array => {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = array => {
  let prod = 1;
  array.forEach(element => {
    prod *= element;
  })
  return prod;
};

const power = (a, b) => {
  for (let i = 0, multiplier = a; i < b - 1; i++)
  {
      a*=multiplier;
  }
  return a;
};

const factorial = function(a, b) {
	b = b || 1;
  if (a == 0)
    return b;
  else {
    b *= a;
    factorial (a - 1, b);
  }
};

factorial (1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
