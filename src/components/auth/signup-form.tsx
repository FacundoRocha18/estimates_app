import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { IconMail, IconLock, IconUserHexagon } from "@tabler/icons-react";
import { SIGNUP_URL } from "../../common/constants";
import { handleSubmit } from "../../helpers/auth";

export const SignupForm = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [name, setName] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);

	return (
		<form className="text-black w-96 bg-[#FFF] rounded p-4 flex flex-col gap-4">
			<Input
				isRequired
				isClearable
				size="md"
				label="Your email"
				placeholder="jhondoe@email.com"
				type="email"
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
				label="Your name"
				placeholder="Jhon Doe"
				type="text"
				onChange={({ target }) => setName(target.value)}
				startContent={
					<IconUserHexagon />
				}
			/>
			<Input
				isRequired
				isClearable
				size="md"
				label="Your password"
				placeholder="Password"
				type="password"
				onChange={({ target }) => setPassword(target.value)}
				startContent={
					<IconLock />
				}
			/>
			<Input
				isRequired
				isClearable
				size="md"
				label="Confirm your password"
				placeholder="Password"
				type="password"
				onChange={({ target }) => setPassword(target.value)}
				startContent={
					<IconLock />
				}
			/>
			<Button className='w-full bg-[#3383FA] text-white font-medium rounded' onClick={() => handleSubmit({ URL: SIGNUP_URL, data: { email, name, password } })}>Signin</Button>
		</form>
	)
}