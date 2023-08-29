import { useState } from "react"
import { Button, Input } from "@nextui-org/react";
import { Title } from "./Title";
import { SIGNIN_URL } from "../common/constants";

export const Signin = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);

	const handleSubmit = async () => {

		const data = {
			email: email,
			password: password,
		}

		const params: RequestInit = {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			method: 'POST',
		}

		fetch(SIGNIN_URL, params)
			.then(response => {
				response.json()
				console.log(response.headers.values())
			})
			.then(data => console.log(data))
			.catch(e => console.error(e))
	}

	return (
		<section className="flex flex-col justify-center items-center">
			<Title>Login</Title>
			<form className="w-96 bg-foreground-100 rounded p-4 flex flex-col gap-4">
				<Input size="md" isRequired label="Your email" placeholder="jhondoe@email.com" variant="underlined" onChange={({ target }) => setEmail(target.value)} />
				<Input size="md" isRequired label="Your password" placeholder="Password" type="password" variant="underlined" onChange={({ target }) => setPassword(target.value)} />
				<Button className='w-full bg-lime-500 font-medium rounded' onClick={handleSubmit}>Login</Button>
			</form>
		</section>
	)

}