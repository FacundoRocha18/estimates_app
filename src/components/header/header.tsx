import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { Title } from "../common/title"
import { Logo } from "../common/logo"
import { Link } from "react-router-dom"

export const Header = () => {
	return (
		<Navbar>
			<NavbarBrand className="flex items-center">
				<Logo />
				<Title>Car sales</Title>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4">
				<NavbarItem isActive>
					<Link to={"/"} color="foreground">
						Home
					</Link>
				</NavbarItem>
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
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link to={'/auth/signin'}>Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" to={"/auth/signup"} variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}