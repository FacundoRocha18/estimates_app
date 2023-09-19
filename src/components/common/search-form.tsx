import { Button, Divider, Input } from "@nextui-org/react"
import { IconSearch } from '@tabler/icons-react'
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
		<Input
			label="Buscar productos, marcas y más..."
			radius='none'
			size='sm'
			classNames={{
				inputWrapper: "rounded shadow-md w-[500px]"
			}}
			fullWidth
			onChange={({ target }) => setSearch(target.value)}
			endContent={
				<>
					<Divider orientation='vertical' />
					<Button isIconOnly variant='light' radius='sm' size='sm'>
						<IconSearch />
					</Button>
				</>
			}
		/>
	)
}