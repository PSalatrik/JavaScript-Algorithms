function reverseWords(string) {
		var wordsArray = string.split(' ');
		var reversedWordsArray = []; 

		wordsArray.forEach( word =>{
				reversedString = "";
				for ( var i = word.length -1; i >= 0; i--){
					reversedString += word[i];
				}
				reversedWordsArray.push(reversedString);
		});
		console.log(reversedWordsArray.join(' '));
}

reverseWords("This is going to be a long day")