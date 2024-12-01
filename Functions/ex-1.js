//Write a JavaScript function that reverses a number.

function reverse_a_number(n)
{
    // Convert the input number to a string
    n = n + "";
   // Split the string into an array of characters, reverse the array, and then join the characters back into a string
    return Number(n.split("").reverse().join(""));
}
