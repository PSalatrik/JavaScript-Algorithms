function caesarCipher(str, num) {
	num = num % 26;
	var lowerCaseString = str.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var newString = '';

	for( var i = 0; i < lowerCaseString.length; i ++  ) {
		var currentLetter = lowerCaseString[i];
		if (currentLetter === ' ') {
			newString += currentLetter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var newIndex = currentIndex + num;
		if(newIndex > 25) newIndex = newIndex -26;
		if(newIndex < 0) newIndex = 26 + newIndex;
		if (str[i] === str[i].toUppercase() ) {
			newString += alphabet[newIndex];

		} 
		else newString += alphabet[newIndex];

	}

	return newString;
}


caesarCipher('Zoo Keeper', 2); //Bqq Mggrgt

caesarCipher('Javascript', -900) //Tkfk