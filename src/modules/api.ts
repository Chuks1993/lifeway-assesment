import axios from 'axios'

export async function getProfiles(text) {
	try {
		let response = await axios.get(`https://swapi.dev/api/people/?search=${text}`)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export async function callSWAPI (url) {
	try {
		let response = await axios.get(url)
	return response.data
	} catch (error) {
		console.log(error)
	}
}