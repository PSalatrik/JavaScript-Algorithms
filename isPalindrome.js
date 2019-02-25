function isPalindrome(string) {
		string = string.toLowerCase();
		var charactersArr = string.split(' ');
		var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(' ');

		lettersArr = []
		charactersArr.forEach( char => {
				if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
		});

		if(lettersArr.join(' ') === letters.reverse.join('') ) return true;
		else return false;
}


console.log( isPalindrome("Madam I'm Adam") );
console.log( isPalindrome("racecar") );
console.log( isPalindrome("notapalindrome") );


