import { ReactNode } from 'react'

export const HeaderLine = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className='header-line'>
				{
					children
				}
			</div>
		</>
	)
}