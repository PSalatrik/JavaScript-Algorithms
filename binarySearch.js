function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) console.log(true);
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else console.log(false);
}
 
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

//recursion is when a function calls itself
// 4! = 24 ( 4*3*2*1 = 24)
function factorial(num){
	if(num === 1){
		retrun num
	}
	else {
		return num * factorial(num -1);
	}
}


factorial(4);




