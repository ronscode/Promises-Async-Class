console.log("Before promise");
new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject("fail");
	}, 500);
})
	//Rejected after 500 ms
	.then(function (result) {
		console.log(result);
	})
	.catch(function (error) {
		console.log(error);
	});
console.log("After promise");
