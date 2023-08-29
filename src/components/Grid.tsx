import { ReactNode } from "react"

export const Grid = ({ children }: { children: ReactNode }) => {
	return (
		<section className='grid p-6'>
			{ children }
		</section>
	)
}