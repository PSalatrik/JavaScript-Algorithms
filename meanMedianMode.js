function meanMedianMode(array){
	return{
		mean: getMean(array);
		median: getMedian(array);
		mode: getMode(array);
	}
}

function getMean(array){
	var sum = 0;
	forEach( num =>{
		sum += num;
	});
	mean = sum / array.length;
	return mean;
}

function getMedian(array){
	array = array.sort(function(a,b){return a - b});

	if( array.length % 2 !== 0 ){
		var median = array[Math.floor(array.length /2)];
	}
	else{
		var med1 = array[(array.length /2) -1];
		var med2 = array[array.length /2];
		median = mid1 + mid2 /2;
	}

	return median;
}

function getMode(array){
	var modeObj = {};

	array.forEach(num=>{
		if(!modeObj[num]) modeObj[num] = 0;
		modeObj[num] ++;
	});

	var maxFreq = 0;
	var modes = [];

	for( var num in modeObj ){
		if( modeObj[num] > maxFreq ){
			maxFreq = modeObj[num];
			modes = [num];
		}
		else if(modeObj[num] === maxFreq) modes.push(num);
	}
	if(modes.length === Object.keys(modeObj).length) modes = [];
	return modes;
}

