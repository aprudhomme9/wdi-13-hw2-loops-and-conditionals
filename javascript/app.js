console.log("up and running");
// 1.
for(i = 1; i <=20; i++) {
	console.log(i);
};

for(i = 0; i <= 200; i += 2) {
	console.log(i);
};

for(i = 0; i < 20; i++){
	console.log("Love me, pet me! HSSSSSS!" );
};

for(i = 0; i < 20; i+=2) {
	let int = Math.random();
	if(int > 0.75) {
		let message = "...human...why you taking pictures of me?...";
	}
	else if(int > 0.5) {
		message = "...the catnip made me do it...";
	}

	else {
		message = "...why does the red dot always get away...";
	}
	

	console.log(message);

}

for(i =1; i <= 100; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log("fizzbuzz");
	}
	else if(i % 3 === 0) {
		console.log("fizz");
	}
	else if(i % 5 === 0) {
		console.log("buzz");
	}
	else {
		console.log(i);
	}
};
