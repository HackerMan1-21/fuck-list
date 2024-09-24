export default async function fetchJSON(url = "",data = {}) {
	const response = await fetch(url,{
		method: "POST",
		mode: "cors",
		cache:"no-cache",
		credentials:"same-origin",
		headers:{
			"Content-Type": "application/json",
			"Csrf-Token": "",
		},
		redirect:"follow",
		referrerPolicy:"no-referrer",
		body:JSON.stringify(data),
	});
	return response.json();
}