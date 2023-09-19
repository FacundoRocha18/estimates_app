import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { Title } from "../common/Title"
import { Logo } from "../common/logo"
import { Link } from "react-router-dom"
import { SearchForm } from '../common/search-form'
import { IconBell, IconDiscount2, IconMapPin, IconShoppingCart } from '@tabler/icons-react'

export const Header = () => {
	return (
		<Navbar className='bg-[#FBF159] p-2 h-auto' classNames={{
			wrapper: 'wrapper'
		}} maxWidth='xl' isBlurred={false} shouldHideOnScroll>
			<div className='header-line'>
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
					<h3>Nuevas ofertas por ciberlunes</h3>
					<IconDiscount2 />
				</NavbarContent>
			</div>
			<div className='header-line'>
				<NavbarContent justify='start' className="hidden sm:flex gap-4 header-location">
					<IconMapPin />
					<p>Ingresa tu ubicación</p>
				</NavbarContent>
				<NavbarContent justify='start' className="hidden sm:flex gap-4 header-menu">
					<NavbarItem>
						<Link to={'#'} color="foreground">
							Categorías
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link to={'#'} color="foreground">
							Ofertas
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link to={'#'} color="foreground">
							Historial
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link to={'#'} color="foreground">
							Moda
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link to={'#'} color="foreground">
							Vender
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link to={'#'} color="foreground">
							Ayuda
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify='center'>
					<NavbarItem>
						<Link to={"/auth/signup"}>Crea tu cuenta</Link>
					</NavbarItem>
					<NavbarItem className="hidden lg:flex">
						<Link to={'/auth/signin'}>Ingresa</Link>
					</NavbarItem>
					<NavbarItem className="hidden lg:flex">
						<Link to={'/auth/signin'}>Mis compras</Link>
					</NavbarItem>
					<NavbarItem className="hidden lg:flex">
						<Button as={Link} to={'#'} isIconOnly variant='light' radius='sm' size='sm'>
							<IconBell />
						</Button>
					</NavbarItem>
					<NavbarItem className="hidden lg:flex">
						<Button as={Link} to={'#'} isIconOnly variant='light' radius='sm' size='sm'>
							<IconShoppingCart />
						</Button>
					</NavbarItem>
				</NavbarContent>
			</div>
		</Navbar>
	)
}