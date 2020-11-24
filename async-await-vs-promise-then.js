// Async/Await vs Promise.then

let theUrl = `https://swapi.dev/api/planets/`;

function logFetch(url) {
	return fetch(url)
		.then((response) => {
			return response.text(); // if this resolves then return the text
		})
		.then((text) => {
			console.log(text); // then do something with the text
		})
		.catch((err) => { // if the Force is not with you, error out
			console.error(err);
		});
}

// Promise.then()

// async function logFetch(url) {
// 	try {
// 		const response = await fetch(url);
// 		console.log(await response.text());
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

logFetch(theUrl);
