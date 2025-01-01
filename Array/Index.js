// In JavaScript We Have Two Types Of Array Initialization

const arr = new Array();
const arrOne = [];

// If We Need To Add The Data In The End Into An Array We Can Use The Push Data Method 
// O(1)
arr.push(1);

// If We Need To Add The Data In The Start Into An Array We Can Use The unshift Data Method 
// O(N)
arr.unshift(0);

// If We Need To Remove The Data In The End Into An Array We Can Use The pop Data Method 
// o(1)
arr.pop();

// If We Need To Remove The Data In The End Into An Array We Can Use The pop Data Method 
// o(N)
arr.shift();

arr.push(0, 1, 3, 4, 5, 6, 7, 8, 9, 10);