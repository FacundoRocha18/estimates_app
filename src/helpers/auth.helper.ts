import { IUser } from "../common/interfaces/types"


export const handleSubmit = async ({ URL, data }: { URL: string, data: Partial<IUser> }) => {
	const params: RequestInit = {
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		method: 'POST',
	}

	fetch(URL, params)
		.then(response => response.text())
		.then(data => sessionStorage.setItem('token', data))
		.catch(e => console.error(e))
}