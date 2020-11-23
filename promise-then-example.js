// Promise.then() – Example

console.log("Before promise"); // Before promise

new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("done");
	}, 700);
}) //Resolved after 700 ms
	.then(function (res) {
		console.log("the response is ", res);
		console.log("Then returned: " + res);
	});

console.log("After promise"); // After promise

// .then( returned: done, a value our promise promised to return. )
