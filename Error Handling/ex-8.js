//Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.

function divide_Numbers(x, y) {
  try {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new TypeError('Invalid arguments. Both arguments should be numbers.');
    }
    if (y === 0) {
      throw new Error('Invalid divisor. Cannot divide by zero.');
    }
    const result = x / y;
    console.log('Result:', result);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('TypeError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}
