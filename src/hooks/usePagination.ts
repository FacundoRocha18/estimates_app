import { useState, useEffect } from "react"

export const usePagination = () => {
	const max = 12
	const [offset, setOffset] = useState<number>(0)
	const [page, setPage] = useState(1)
	const [previousPage, setPreviousPage] = useState(page)

	const increaseOffset = () => {
		setOffset((offset: number) => offset + max)
	}

	const decreaseOffset = () => {
		if (offset <= 0) return 
		setOffset((offset: number) => offset - max)
	}

	const changePage = (page: number) => {
		setPage(page)
	}

	useEffect(() => {

		if (page > 1) {
			increaseOffset()
		}

		if (page <= previousPage) {
			decreaseOffset()
		}
	}, [page, previousPage])

	return { max, offset, page, changePage }
}