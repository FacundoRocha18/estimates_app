import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { IconBell, IconDiscount2, IconMapPin, IconShoppingCart } from '@tabler/icons-react'
import { Link } from "react-router-dom"
import { Title } from "../common/Title"
import { Logo } from "../common/logo"
import { SearchForm } from '../common/search-form'
import { AuthMenu } from './auth-menu'
import { MainMenu } from './main-menu'
import { HeaderLine } from './header-line'

export const Header = () => {
	return (
		<Navbar className='bg-[#FBF159] p-2 h-auto' classNames={{
			wrapper: 'wrapper'
		}} maxWidth='xl' isBlurred={false} shouldHideOnScroll>
			<HeaderLine>
				<NavbarBrand className="flex items-center header-logo">
					<Logo />
					<Link to={"/"} color="foreground">
						<Title>Car sales</Title>
					</Link>
				</NavbarBrand>
				<NavbarContent justify='start' className="hidden sm:flex gap-4 header-search">
					<NavbarItem>
						<SearchForm />
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify='center' className="hidden sm:flex gap-4 header-news">
					<Link to={'#'}>Nuevas ofertas por ciberlunes</Link>
					<IconDiscount2 strokeWidth="1.50"/>
				</NavbarContent>
			</HeaderLine>
			<HeaderLine>
				<NavbarContent justify='start' className="hidden sm:flex gap-2 header-location">
					<IconMapPin strokeWidth="1.50"/>
					<Link to={'#'}>Ingresa tu ubicación</Link>
				</NavbarContent>
				<NavbarContent justify='start' className="hidden sm:flex gap-4 header-menu">
					<MainMenu />
				</NavbarContent>
				<NavbarContent justify='center'>
					<AuthMenu />
					<NavbarItem className="hidden lg:flex">
						<Link to={'/auth/signin'}>Mis compras</Link>
					</NavbarItem>
					<NavbarItem className="hidden lg:flex">
						<Button as={Link} to={'#'} isIconOnly variant='light' radius='sm' size='sm'>
							<IconBell strokeWidth="1.50"/>
						</Button>
					</NavbarItem>
					<NavbarItem className="hidden lg:flex">
						<Button as={Link} to={'#'} isIconOnly variant='light' radius='sm' size='sm'>
							<IconShoppingCart strokeWidth="1.50"/>
						</Button>
					</NavbarItem>
				</NavbarContent>
			</HeaderLine>
		</Navbar>
	)
}