import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { IconMail, IconLock, IconUserHexagon } from "@tabler/icons-react";
import { SIGNUP_URL } from "../../common/constants";
import { handleSubmit } from "../../helpers/auth.helper";

export const SignupForm = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [name, setName] = useState<string | null>(null);
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
				label="Your name"
				placeholder="Jhon Doe"
				type="text"
				variant="underlined"
				onChange={({ target }) => setName(target.value)}
				startContent={
					<IconUserHexagon />
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
			<Button className='w-full bg-lime-500 font-medium rounded' onClick={() => handleSubmit({ URL: SIGNUP_URL, data: { email, name, password } })}>Signin</Button>
		</form>
	)
}