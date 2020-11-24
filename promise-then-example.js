// Promise.then() – Example

console.log("Before promise"); // Before promise, line 3 will fire first

new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("done");
	}, 1700);
}) //Resolved after 700 ms
	.then(function (res) {
		console.log("the response is ", res);
		console.log(".then returned: " + res);
	});

console.log("After promise"); // After promise

// .then( returned: done, a value our promise promised to return. )
