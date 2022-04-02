const palindromes = string => {
    const array = [];
    let counter = 0;
    for (let i = 0, n = string.length; i < n; i++)
    {
        if (isAlpha(string.toUpperCase().charCodeAt(i)))
        {
            array[counter] = string[i].toLowerCase();
            counter++;
        }
        //console.log(string.toUpperCase());
    }
    let index = Math.floor(counter / 2);
    let first_half = array.slice(0, index);
    let second_half = array.slice(index);
    second_half = second_half.reverse();
    let result =
    first_half.every((element, index) => {
            return element == second_half[index];
    })
    return result;
};

const isAlpha = code => {
    if (code > 64 && code < 91)
        return true;
    return false;
}

palindromes("Hannah");

// Do not edit below this line
module.exports = palindromes;
