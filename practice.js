function fizzBuzz(num){
		for( var i = 0; i < num.length; i++ ){
			if( i % 15 === 0 ) console.log('Fizz Buzz');
			if( i % 3 === 0 ) console.log('Fizz');
			else if( i % 5 === 0 ) console.log('Buzz');
			else console.log(i);
		}
}

console.log( fizzBuzz( 88 ) );

function reverseArray(array){
		for(var i = 0; i <= array.length /2; i++){
			tempVar = array[i];
			array[i] = array[array.length -1 -i];
			array[array.length -1 -i] = tempVar;
		}
		return array;
}

reverseArray([1,2,3,4,5,6,7,8,9]);



function isPallendrome(string){
	var string = string.toLowerCase();
	var wordsArray = string.split('');
	var validChar = "abcdefghijklmnopqrstuvwxyz".split('');

	var newLettersArray = [];
	wordsArray.forEach(word=>{
		if( validChar.indexOf(word) > -1 ) newLettersArray.push(word)
	});

	if( newLettersArray.join('') === newLettersArray.reverse().join('') ){
		console.log(true);
	}else{
		console.log(false);
	}

}

isPallendrome("Madam I'm Adam");



function reverseWords(string) {
		var wordsArray = string.split(' ');
		var reversedWordsArray = []; 

		wordsArray.forEach( word =>{ 
				var reversedString = "";
				for ( var i = word.length -1; i >= 0; i--){
					reversedString += word[i];
				}
				reversedWordsArray.push(reversedString);
		});
		console.log(reversedWordsArray.join(' '));
}

reverseWords("This is going to be a long day");


function harmlessRansomeNote(noteText, magText){
	var noteArr = noteText.split('');
	var magArr = magText.split('');
	var magObj = {};

	magArr.forEach( word => {
		if( !magObj[word] ) magObj[word] = 0;
		magObj[word]++;
	});

	var isNotePossible = true;

	noteArr.forEach( word=>{
		if( magObj[word] ){
			magObj[word]--;
			if( magObj[word] < 0 ) isNotePossible = false;
		}
		else isNotePossible = false;
	});

	console.log(isNotePossible);
}

harmlessRansomeNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')

function caesarCipher( str, num ){
	num = num % 26;
	var lowerCaseString = str.toLowerCase();
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	var newString = '';

		for( var i = 0; i < lowerCaseString.length; i++ ){
			var currentLetter = lowerCaseString[i];
			if( currentLetter === " "){
				newString += currentLetter;
				continue;
			}

			var currentIndex = alphabet.indexOf(currentLetter);
			var newIndex = currentIndex + num;
			if( newIndex > 25 ) newIndex = newIndex - 26;
			if( newIndex < 0 ) newIndex = newIndex + 26;
			if( str[i] === str[i].toUpperCase() ){
				newString += alphabet[newIndex].toUpperCase();
			}
			else newString += alphabet[newIndex];
		}
		return newString;
}

console.log( caesarCipher("Hide Me", -28) );
function meanMedianMode(array){
	return{
		mean: getMean(array);
		median: getMedian(array);
		mode: getMode(array);
	}
}


getMean(array){
	var sum = 0;

	array.forEach(num=>{
		sum += num;
	});
	var mean = sum / array.length;
}

getMedian(array){
	array = array.sort(function(a,b)return{a -b });
	var median;

	if( array.length % 2 !== 0 ){
		median = array[Math.Floor(array.length /2)];
	}
	else{
		med1 = array[(array.length /2) -1];
		med2 = array[array.length /2];
		medina = (med1 + med2) / 2;
	}
	return median;
}

getMode(array){
	var modeObj = {};

	array.forEach(num =>{
		if(	!modeObj[num] ) modeObj[num] = 0;
		magObj[num]++;
	});

	var maxFreq = 0;
	var modes = [];

	for(var num in modeObj){
		if( modeObj[num] > maxFreq ){
			modes = [num];
			maxFreq = modeObj[num];
		}
		if( modeObj[num] === maxFreq ) modes.push(num);
	}
	if( modes.length === Object.keys(modeObj.length ) ) modes = [];
	return modes;
}



function reverseWordsInArray(string){
	var wordsArray = string.split(' ');
	var reversedWordsArray = [];

	wordsArray.forEach(word=>{
		var reversedString = '';
		for( var i = word.length -1; i > 0; i-- ){
			reversedString += word[i];
		}
		reversedWordsArray.push(reversedString);
	});
	console.log(reversedWordsArray.join(" "))
}

reverseWordsInArray("Please turn me around");



function twoSum(numberArr, sum){
	var pairs = [];
	var hashTable = [];

	for ( var i = 0; i < numberArr.length; i++ ){
		var currentNum = numberArr[i];
		var counterpart = sum - currentNum;
		if( hashTable.indexOf(counterpart) !== -1 ){
			pairs.push( [currentNum, counterpart ] );
		}
		hashTable.push(currentNum);
	}
	return pairs;
}



function binarySearch(numberArr, key){
	var middleIndex = numberArr.length /2;
	var middleElement = numberArr[middleIndex];

	if( middleElement === key && numberArr > 1 ) console.log(true);
	else if( middleElement < key ){
		return binarySearch( numberArr.splice( middleIndex, numberArr.length ), key );
	}
	else if( middleElement > key && numberArr > 1 ){
		return binarySearch( numberArr.splice( 0, middleIndex ), key );
	}
	else console.log(false);
}



function maxStockProfit(pricesArray){
		var maxProfit = -1;
		var buyPrice = 0;
		var sellPrice = 0;

		var changeBuyPrice = true

		for( var i = 0; i < pricesArray.length; i++ ){
			if(changeBuyPrice) buyPrice = pricesArray[i];
			sellPrice = pricesArray[i+1];
		if( sellPrice < buyPrice ){
				changeBuyPrice = true;
		}
		else{
			var tempProfit = sellPrice - buyPrice;
			if( tempProfit > maxProfit ) maxProfit = tempProfit;
			changeBuyPrice = false;

		}

	}

	return maxProfit;

}


function fibo1(pos){
	if( pos < 3 ) return 1;
	else return fibo1(pos-1) + fibo(pos-2);
}

fibo1(5);


function fibo2(pos){
	var a = 0;
	var b = 1;
	var fib = null;

	for( var i = 2; i < n; i++ ){
		fib = a + b;
		a = b;
		b = fib;
	}
	return fib;
}

function fibMemo(index, cache){
		cache = cache || [];
		if(cache[index]) return cache[index];
		else{
			if( index < 3 ) return 1;
			else{
				cache[index] = fibMemo(index -1, cache) + fibMemo(index -1, cache);
			}
		}
		return cache[index];
}


function sieveOfErtosinies(num){
	primes = [];
	for ( var i = 0; i < num.length; i++ ){
		primes[i] = true
	}

	primes[0] = false;
	primes[1] = false;

	for( var i = 2; i< Math.sqrt(num); i++ ){
		for ( var j = 2; j * i < num; j++ ){
			primes[ i * j ] = false;
		}

		result = [];
		for( var i = 0; i < primes.length; i++ ){
			if(primes) result.push(i);
		}
	}
	return result
}
sieveOfErtosinies(55);


function bubbleSort(array){
	for( i = array.length; i > 0; i-- ){
		for( j = 0; j < i; j++ ){
			if( array[j] > array[j + 1] ){
				tempVar = array[j];
				array[j] = array[j+1];
				array[j+1] = tempVar
			}
		}
	}
	return array;
}

console.log( bubbleSort([ 1, 3000, 15, 285, 78, 3999, 2, 65, 18, 11, 765 ]) );



function mergeSort (arr) {    
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);
    
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
 
function merge (array1, array2) { 
    var result = [];
    while (array1.length && array2.length) {
      var minElem;
      if (array1[0] < array2[0]) minElem = array1.shift();
      else minElem = array2.shift();
      result.push(minElem);
    }
    
    if (array1.length) result = result.concat(array1);
    else result = result.concat(array2);
    return result;
}

console.log( mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]) );
