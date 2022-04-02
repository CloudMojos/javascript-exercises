const fibonacci = n => {
    if (n < 0) { return "OOPS"; }
    arr = [0, 1];
    next = 1;
    for (let i = 1; i < n; i++)
    {
        next += arr[i - 1];
        arr.push(next);
        console.log(arr, next);
    }
    // Find the fibonacci number in nth place
    // next number = preceding number + preceding number's preceding number
    // start with 0, 1
    // next number = 0 + 1
    // next number = next number + previous number
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
