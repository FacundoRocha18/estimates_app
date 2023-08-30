import { useState } from "react"
import { Button, Input } from "@nextui-org/react";
import { IconMail, IconLock } from '@tabler/icons-react'
import { SIGNIN_URL } from "../../common/constants";

export const SigninForm = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);

	const handleSubmit = async () => {
		const params: RequestInit = {
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			method: 'POST',
		}

		fetch(SIGNIN_URL, params)
			.then(response => response.text())
			.then(data => sessionStorage.setItem('token', data))
			.catch(e => console.error(e))
	}

	return (
		<form className="w-96 bg-foreground-300 rounded p-4 flex flex-col gap-4">
			<Input
				isRequired
				isClearable
				size="md"
				label="Your email"
				placeholder="jhondoe@email.com"
				type="email"
				variant="underlined"
				labelPlacement="outside"
				description="We'll never share your email with anyone else."
				onChange={({ target }) => setEmail(target.value)}
				startContent={
					<IconMail />
				}
			/>
			<Input
				isRequired
				isClearable
				size="md"
				label="Your password"
				placeholder="Password"
				type="password"
				variant="underlined"
				labelPlacement="outside"
				onChange={({ target }) => setPassword(target.value)}
				startContent={
					<IconLock />
				}
			/>
			<Button className='w-full bg-lime-500 font-medium rounded' onClick={handleSubmit}>Login</Button>
		</form>
	)
}