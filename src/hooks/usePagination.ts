import { useState, useEffect } from "react"

export const usePagination = () => {
	const [offset, setOffset] = useState<number>(0)
	const [previousOffset, setPreviousOffset] = useState<number>(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [previousPage, setPreviousPage] = useState(currentPage)
	const reportsPerPage = 12
	const step = 12

	const increaseOffset = () => {
		setPreviousOffset(offset)
		setOffset((offset: number) => offset + step)
	}

	const decreaseOffset = () => {
		if (offset <= 0) return 
		setOffset(previousOffset)
	}

	const changePage = (page: number) => {
		setPreviousPage(currentPage)
		setCurrentPage(page)
	}

	console.log(reportsPerPage, offset, currentPage)

	useEffect(() => {

		if (currentPage > 1) {
			increaseOffset()
		}

		if (currentPage <= previousPage) {
			decreaseOffset()
		}
	}, [currentPage, previousPage])

	return { max: reportsPerPage, offset, page: currentPage, changePage }
}