import { NavbarItem } from '@nextui-org/react'
import { CategoriesDropdown } from './categories-dropdown'
import { Link } from 'react-router-dom'

const menuOptions = [
	{
		title: "Ofertas",
		route: "#"
	},
	{
		title: "Historial",
		route: "#"
	},
	{
		title: "Moda",
		route: "#"
	},
	{
		title: "Vender",
		route: "#"
	},
	{
		title: "Ayuda",
		route: "#"
	},
]

export const MainMenu = () => {
	return (
		<>
			<CategoriesDropdown />
			{
				menuOptions.map(({title, route}, index) => (
					<NavbarItem key={index}>
						<Link to={route} color="foreground">
							{title}
						</Link>
					</NavbarItem>
				))
			}
		</>
	)
}