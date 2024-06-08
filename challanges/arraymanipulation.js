function checkthesubarraysum(arr, target) {
  let currentElement = 0;
  let trackerElement = 0;
  let sum = 0;

  while (currentElement < arr.length) {
    if (currentElement != trackerElement) {
      sum += arr[trackerElement];
      while (sum > target) {
        sum -= arr[currentElement];
        currentElement++;
      }

      if (sum === target) {
        return true;
      }
      // }

      trackerElement++;
    } else {
      currentElement++;
    }
  }

  return false;
}

// const arr = [9, 2, 7, 1];
const arr = [9, 2, 1];
const target = 18;
console.log(checkthesubarraysum(arr, target));
