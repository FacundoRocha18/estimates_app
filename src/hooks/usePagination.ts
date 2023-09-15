import { useState, useEffect } from "react"

export const usePagination = () => {
	const [offset, setOffset] = useState<number>(0)
	const [previousOffset, setPreviousOffset] = useState<number>(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [previousPage, setPreviousPage] = useState(currentPage)
	const reportsPerPage = 12
	const step = reportsPerPage

	const increaseOffset = () => {
		setPreviousOffset(offset)
		setOffset((offset: number) => offset + step)
	}

	const decreaseOffset = () => {
		if (offset === 0) return

		if (previousOffset > offset) return

		setOffset(offset - step)
	}

	const changePage = (page: number) => {
		setPreviousPage(currentPage)
		setCurrentPage(page)
	}

	useEffect(() => {

		if (currentPage > previousPage) {
			increaseOffset()
		}

		if (currentPage <= previousPage) {
			decreaseOffset()
		}
	}, [currentPage])

	return { max: reportsPerPage, offset, page: currentPage, changePage }
}