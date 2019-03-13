function fizzBuzz(num) {
		for( var i = 1; i <= num; i++ ){
			if ( i % 3 === 0 || i % 5 === 0 ) console.log('FizzBuzz');
		//  if ( i % 15 === 0  ) consloe.log('FizzBuzz'); being divided by 3 and 5 is the same as being divided by 15
			if ( i % 3 === 0 ) console.log('Fizz');
			else if ( i % 5 === 0  ) consloe.log('Buzz');
			else consloe.log(i)
		}
}

fizzBuzz(20);

fizzBuzz(30);
