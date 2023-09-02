import { useState } from "react"
import { Button, Input } from "@nextui-org/react";
import { IconMail, IconLock } from '@tabler/icons-react'
import { SIGNIN_URL } from "../../common/constants";
import { handleSubmit } from "../../helpers/auth";

export const SigninForm = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);

	return (
		<form className="text-slate-200 w-96 bg-foreground-800 rounded p-4 flex flex-col gap-4">
			<Input
				isRequired
				isClearable
				classNames={{
					label: "text-slate-200",
				}}
				size="md"
				label="Your email"
				placeholder="jhondoe@email.com"
				type="email"
				variant="underlined"
				description="We'll never share your email with anyone else."
				onChange={({ target }) => setEmail(target.value)}
				startContent={
					<IconMail />
				}
			/>
			<Input
				isRequired
				isClearable
				classNames={{
					label: "text-slate-200",
				}}
				size="md"
				label="Your password"
				placeholder="Password"
				type="password"
				variant="underlined"
				onChange={({ target }) => setPassword(target.value)}
				startContent={
					<IconLock />
				}
			/>
			<Button className='w-full bg-lime-500 font-medium rounded' onClick={() => handleSubmit({ URL: SIGNIN_URL, data: { email, password } })}>Signin</Button>
		</form>
	)
}