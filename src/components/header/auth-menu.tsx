import { NavbarItem } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const authMenuOptions = [
	{
		title: "Crea tu cuenta",
		route: "/auth/signup"
	},
	{
		title: "Ingresa",
		route: "/auth/signin"
	},
]

export const AuthMenu = () => {
	return (
		<>
			{
				authMenuOptions.map((option, index) => (
					<NavbarItem key={index}>
						<Link to={option.route}>{option.title}</Link>
					</NavbarItem>

				))
			}
		</>
	)
}