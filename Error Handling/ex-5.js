//Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

function validateArrayNotEmpty(arr) {
  if (arr.length === 0) {
    throw new Error('Array is empty!');
  }
}

// Example 
try {
  const nums1 = [1, 2, 3, 4];
  validateArrayNotEmpty(nums1); // Valid non-empty array
  const nums2 = [];
  validateArrayNotEmpty(nums2); // Throws an error
} catch (error) {
  console.log('Error:', error.message);
}
