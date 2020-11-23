async function f() {
	try {
		let response = await fetch();
		let user = await response.json();
	} catch (err) {
		// catches errors both in fetch andresponse.json
		alert(err);
	}
}
async function f() {
	let response = await fetch();
}
// f() becomes a rejected promise
f().catch(alert);
