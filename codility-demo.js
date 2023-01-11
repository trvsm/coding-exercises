// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// goal: write a function
// input: array, of integers
// output: integer, smallest positive integer not in A

function solution(A) {
  let current = 1;
  // while A.find(integer) is truthy continue, if !A.find(integer) return integer
  while (true) {
    if (A.includes(current)) {
      current++;
    }
    if (!A.includes(current)) {
      return current;
    }
  }
}
