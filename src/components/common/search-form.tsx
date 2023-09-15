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
		<form className='w-full max-w-2xl'>
			<Input
				label="Buscar productos, marcas y más..."
				radius='sm'
				size='sm'
				className='w-96'
				isClearable
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