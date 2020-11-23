function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved");
		}, 2000);
	});
}
//Expected output:
// calling
// resolved
async function asyncCall() {
	console.log("calling");
	let result = await resolveAfter2Seconds();
	console.log(result);
}

asyncCall();
