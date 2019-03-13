function reverseArrayInPlace(arr) {
		for (i=0; i< arr.length / 2; i++){
			var tempVar = arr[i];
			arr[i] = arr[arr.length -1 - i];
			arr[arr.length -1 -i] = tempVar;
		}

		return arr;
}

reverseArrayInPlace([1,2,3,4,5,6,7,8,9]);

// var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];

// For example, array1.length would give us 7 
// because there are seven elements in it. 
// The index of each, however, is 0, 1, 2, 3, 4, 5, and 6. 
// So in order to begin at the element with an index of 6 we’d need to take the length of the array and subtract 1.