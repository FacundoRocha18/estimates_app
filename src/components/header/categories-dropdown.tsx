import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from '@nextui-org/react'
import { IconChevronDown } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const categories = [
	"Autos y motos",
	"Tecnología",
	"Deportes",
	"Hogar y Muebles",
	"Electrodomésticos"
]

export const CategoriesDropdown = () => {
	return (
		<>
			<Dropdown>
				<NavbarItem>
					<DropdownTrigger>
						<Link to={'#'} color="foreground" className='flex items-center justify-between gap-1'>
							Categorías
							<IconChevronDown size="20px" />
						</Link>
					</DropdownTrigger>
				</NavbarItem>
				<DropdownMenu
					aria-label="Products categories"
					className="w-[340px]"
					itemClasses={{
						base: "gap-4",
					}}
				>
					{
						categories.map((category, index) => (
							<DropdownItem
								key={index}
							>
								{category}
							</DropdownItem>
						))
					}
				</DropdownMenu>
			</Dropdown>
		</>
	)
}