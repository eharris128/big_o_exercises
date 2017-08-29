// For this assignment: determine the Big O notation

// Upon checking the solutions all of these Big O notations are correct.

// Runtime: how many operations through the algorithm the code block takes to complete
// Big O: analyze the efficiency of an algorithm based on the run time complexity, and changes in the data set.

// Regardless of the size of the input, there will only even be one full step 
// through of the function. This will be O(1). 
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}


// The efficiency of this algorithm is dependent on the length of two different arrays.
// I am inclined to say that is not as inefficient to be exponential time, and because there
// are two inputs that we are reliant on it will be: O(n^2) quadratic time.
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// This will be linear time as the number of runs through the function has a direct 
// relationship with the length of the array.O(n)
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// This appears as a trick question because you could theoreticlaly have array[i] equal 
// to the very first item in the array. However because we are interested in looking at
// the worst possible case scenario, this will also be linear time as we have to cycle through
// the entire array. O(n)
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// This will be O(n^2) quadratic time because the number of loops through the inner loop
// is completely dependent on the length of the initial array.
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}

// Regardless of the number of loops, each runthrough of the function will require two additional calls
// of the recursive function. I would go with O(n) as the size of the num increases, the number of calls
// will increase by two each time.
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// Each iteration through the while loop results in chopping the size of the data set in half. This 
// is a standard phonebook search example, where the run time complexity is O(logn).
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// There is no relationship between the size of the array, and the number of iterations through the function.
// This function involves the singular execution of a mathematical expression, therefore the run time complexity
// will be O(1).
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// The number of iterations through the function is worst-case dependent on the distance between n and i.
// Therefore it will be linear O(n).
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

// Linear: the runtime complexity is directly related to the size of the dataset.