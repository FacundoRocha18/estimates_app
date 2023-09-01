import { Button, Input } from "@nextui-org/react"
import { IconSearch } from "@tabler/icons-react"

export const SearchForm = () => {
	return (
		<form className='p-6'>
			<Input
				label="Search a car"
				isClearable
				radius='sm'
				size='md'
				endContent={
					<Button className='px-0 w-10'>
						<IconSearch />
					</Button>
				}
			/>
		</form>
	)
}