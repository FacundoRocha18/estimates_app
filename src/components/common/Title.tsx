import { ReactNode } from "react"

export const Title = ({ children }: { children: ReactNode }) => {
	return <h1 className='text-center text-4xl font-semibold'>{children}</h1>
} 