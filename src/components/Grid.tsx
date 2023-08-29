import { ReactNode } from "react"

export const Grid = ({ children }: { children: ReactNode }) => {
	return (
		<section className='grid'>
			{ children }
		</section>
	)
}