//harmlessRansomeNote has a Big O of O ( n + m )

function harmlessRansomeNote(noteText, magText) {
		var noteArr = noteText.split( ' ' );
		var magArr = magText.split(' ');
		var magObj = {};

		magArr.forEach( word => {
				if(!magObj[word]) magObj[word] = 0;
				 magObj[word] ++;
		});
  
  //console.log(magObj); 

		var noteIsPossible = true;
		noteArr.forEach(word => {
			if (magObj[word]) {
				magObj[word] --;
				if (magObj[word] < 0) noteIsPossible = false;
			}
			else noteIsPossible = false;
		});

		console.log(noteIsPossible);
}


harmlessRansomeNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')


//Big O Notation how long it takes for a algorithm will take to run


//constant runtime
// Big O notation: "O(1)"

function log (array){
	console.log(array[0]);
	console.log(array[1]);
}

log([1,2,3,4]);
log([1,2,3,4,5,6,7,8,9,10])



//Linear runtime
//Big O notation "O (n)"
function logAll(array) {
		for ( var i = 0; i < array.length; i++ ){
			console.log([i])
		}
}

logAll([1,2,3,4]);
logAll([1,2,3,4,5,6]);
logAll([1,2,3,4,5,6,7,8,9]);


//Exponential runtime
// Big O notation "O (n^2)"

function addAndLog(array) {
	for ( var i = 0; i < array.length; i++ ){
		for( var j = 0; j < array.length; j++ ){
			console.log(array[i] + array[j]);
		}
	}
}

addAndLog(['A', 'B', 'C']);
addAndLog(['A', 'B', 'C', 'D']);
addAndLog(['A', 'B', 'C', 'D', 'E']);

//Logrithmic runtime
// Big 0 Notation O (log n )

function binarySearch(array, key) {
		var low = 0;
		var high = array.length -1;
		var mid;
		var element;

		while(low <= high) {
			mid = Math.floor( (low + high) / 2, 10 )
			element = array[mid];
			if ( element < key ){
				low = mid + 1;
			}else if ( element > key ) {
				high = mid -1;
			}else {
				return mid;
			}
		}
		return -1

}

binarySearch(alphabet, "M");