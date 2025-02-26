//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function validateInteger(number) 
{
  if (!Number.isInteger(number)) //Retorna true se number for um número inteiro.
  {
    throw new Error('Invalid number. Please input an integer.');
  }
  console.log('Number is valid:', number);
}

//Example
try {
  validateInteger(12); // Valid integer
  validateInteger(2.12); // Throws an error
} catch (error) {
  console.log('Error:', error.message);
}
