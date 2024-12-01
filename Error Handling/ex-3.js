//Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function twoNumbers(number1, number2) 
{
  if (number2 == 0) 
  {
    throw new Error('Error: Division by zero is not allowed.');
  }
  return n1/n2;
}
 
