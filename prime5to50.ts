function prime5to50(): string {
	let message : string = ""
	
	// TODO: fill up the message string with the proper content.
	
	for(var i: number = 5; i < 51; i++){
		var isPrime:Boolean = true;
		for(var j = 2; j < i; j++){
			if(i % j == 0) {isPrime = false; break;}
		}
		if(isPrime == true){
			message = message + i + " is a prime number";
		}
	}

	return message
}

// You may use additional helper functions.

document.body.innerHTML = prime5to50()
