function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
fibonacci(5);


/*
For 5;
fibo(4) + fibo(3);
fibo(3) + fibo(2) + fibo(2 now 1) + fibo(now 1)
fibo(2 now 1) + 1 + 1 + 1 + 1

*/

 
fibonacci(15);


function fibo2(n){
			var a = 0, b = 1, f = null;
			for( var i = 2; i <= n; i++  ){
				f = a + b;
				a = b;
				b = f;
			}
			return f;
	}

	this.recursive = function() {

	}
}

console.log(fibo2(13))














// function isPrime(num){
// 		for( i = 2; i < num; i++ ){
// 			if( num % i === 0 )
// 				return false;
// 		}
// 		return true
// }
// console.log(isPrime(3));



// function primeList() {
// 	for( var i = 1; i < 50; i++ ){
// 		for( var j = 2; j<i; j++ ){
// 			if( i % j  === 0){
// 		var isPrime = false;
// 			}
// 			else {
// 				isPrime = true

// 			}
// 		}
// 		if(isPrime){
// 			console.log(i)
// 		}
// 	}
// }


