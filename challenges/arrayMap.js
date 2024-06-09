// Function to check if there exists a contiguous subarray within the array that sums up to the target
function checkTheSubarraySum(arr, target) {
  // Sort the array in descending order to optimize the search process
  arr = arr.sort((a, b) => b - a);

  // Initialize pointers and sum
  let currentElement = 0; // Pointer for the current element in the array
  let trackerElement = 0; // Pointer for tracking the start of the subarray
  let sum = 0; // Variable to keep track of the current sum of elements in the subarray

  // Iterate through the array
  while (currentElement < arr.length) {
    // If the current element pointer is not equal to the tracker element pointer
    if (currentElement != trackerElement) {
      // Add the element at the tracker element index to the sum
      sum += arr[trackerElement];

      // While the sum exceeds the target
      while (sum > target) {
        // Remove the element at the current element index from the sum
        sum -= arr[currentElement];
        // Move the current element pointer to the right
        currentElement++;
      }

      // If the sum equals the target, return true
      if (sum === target) {
        return true;
      }

      // Move the tracker element pointer to the right
      trackerElement++;
    } else {
      // Move the current element pointer to the right
      currentElement++;
    }
  }

  // If no subarray is found, return false
  return false;
}

// Example usage:
// Define an array and a target sum
const arr = [9, 2, 1, 9];
const target = 18;

// Call the function with the array and target sum, and log the result
console.log(checkTheSubarraySum(arr, target));
