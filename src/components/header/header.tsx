import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { Title } from "../common/title"
import { Logo } from "../common/logo"
import { Link } from "react-router-dom"
import { SearchForm } from '../common/search-form'
import { IconShoppingCart } from '@tabler/icons-react'

export const Header = () => {
	return (
		<Navbar className='bg-[#FBF159] p-2 header' maxWidth='xl' isBlurred={false} shouldHideOnScroll>
			<NavbarBrand className="flex items-center header-logo">
				<Logo />
				<Link to={"/"} color="foreground">
					<Title>Car sales</Title>
				</Link>
			</NavbarBrand>
			<NavbarContent justify='center' className="hidden sm:flex gap-4 header-search">
				<NavbarItem>
					<SearchForm />
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='center' className="hidden sm:flex gap-4 header-menu">
				<NavbarItem isActive>
					<Link to={'#'} color="foreground">
						Users
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link to={'#'} color="foreground">
						Estimated value
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem>
					<Link to={"/auth/signup"} />
					Crea tu cuenta
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">
					<Link to={'/auth/signin'}>Ingresa</Link>
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">
					<Link to={'/auth/signin'}>Mis compras</Link>
				</NavbarItem>
				<Button as={Link} to={'#'}><IconShoppingCart /></Button>
			</NavbarContent>
		</Navbar>
	)
}