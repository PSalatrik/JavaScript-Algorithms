function fizzBuzz(num) {
		for( var i = 1; i <= num; i++ ){
			//if ( i % 3 === 0 && i % 5 === 0 ) console.log('FizzBuzz');
		    if ( i % 15 === 0  ) console.log('FizzBuzz'); //being divided by 3 and 5 is the same as being divided by 15
			else if ( i % 3 === 0 ) console.log('Fizz');
			else if ( i % 5 === 0  ) console.log('Buzz');
			else console.log(i)
		}
}

fizzBuzz(30);