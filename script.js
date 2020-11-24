let p = new Promise((resolve, reject) => { // Choose your own output adventure! 2 options only one leaves
	let a = 1 + 2;
	if (a == 2) {
		resolve("Success");
	} else {
		reject("Failed");
	}
});

console.log(p);

p.then((message) => {
	console.log("This is in the then on line 12 " + message);
}).catch((message) => {
	console.log("This is in the catch on line 15 " + message);
});
