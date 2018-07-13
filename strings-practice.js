//author: Alexandrea Jackson

	// function makeAbba(a,b) {
	// 	return a + b + b + a ;
	// }
	//    console.log(makeAbba("yes" , "no"));


	// function comboString(a,b) {
	// 	return a + b + a ;
	// }
	// 	console.log(comboString("maybe", "not"));


	function lastTwo(str) {
		if( str.length >= 2 ) { 
			const word = str.substring(0 , str.lenth-2);
		 	const lastletter = str.charAt(str.length-2);
		 	 const secondLast = str.charAt(str.length-1);
		 return  word + secondLast + lastletter ;
		}  else {
			return str ;
		}
	}
		console.log(lastTwo("listen"));