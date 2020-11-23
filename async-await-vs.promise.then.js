// Async/Await vs Promise.then

let theUrl = `https://swapi.dev/api/planets/`;

function logFetch(url) {
	return fetch(url)
		.then((response) => {
			return response.text();
		})
		.then((text) => {
			console.log(text);
		})
		.catch((err) => {
			console.error(err);
		});
}

// Promise.then()

async function logFetch(url) {
	try {
		const response = await fetch(url);
		console.log(await response.text());
	} catch (err) {
		console.log(err);
	}
}

logFetch(theUrl);
