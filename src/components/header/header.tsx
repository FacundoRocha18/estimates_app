import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { Title } from "../common/Title"
import { Logo } from "../common/Logo"

export const Header = () => {
	return (
		<Navbar>
			<NavbarBrand className="flex items-center">
				<Logo />
				<Title>Car sales</Title>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4">
				<NavbarItem isActive>
					<Link href="/" color="foreground">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" color="foreground" aria-current="page">
						Reports
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link color="foreground">
						Users
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" color="foreground">
						Estimated value
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="/auth/signin">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="/auth/signup" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}