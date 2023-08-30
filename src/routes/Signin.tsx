import { SigninForm } from "../components/auth/SigninForm"
import { Title } from "../components/common/Title"

export const Signin = () => {
	return (
		<section className="flex flex-col justify-center items-center">
			<Title>Login</Title>
			<SigninForm />
		</ section>
	)
}