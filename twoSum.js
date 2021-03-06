function twoSum(numArray, sum){
	var pairs = [];
	var hashTable = [];

	for( var i = 0; i < numArray.length; i++ ){
		var currNum = numArray[i];
		var counterpart = sum - currNum;
		if( hashTable.indexOf(counterpart) !== -1 ){
			pairs.push([currNum, counterpart]);
		}
		hashTable.push(currNum)
	}

	return pairs;
}

var arr = [1,6,4,5,3,3]
twoSum(arr, 7);




