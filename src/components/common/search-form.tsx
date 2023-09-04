import { Button, Input } from "@nextui-org/react"
import { IconSearch } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export const SearchForm = () => {
	const [search, setSearch] = useState<string>('')

	useEffect(() => {
		if (search !== '') {
			fetch(`http://localhost:3000/reports/listBy?max=10&offset=0&name=${search}`)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
		}
	}, [search])
	

	return (
		<form className='w-full p-6'>
			<Input
				label="Search a car"
				isClearable
				radius='sm'
				size='md'
				onChange={({ target }) => setSearch(target.value)}
				endContent={
					<Button className='px-0 w-10'>
						<IconSearch />
					</Button>
				}
			/>
		</form>
	)
}