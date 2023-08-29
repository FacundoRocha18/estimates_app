import { ReactNode } from "react"

export const Title = ({ children }: { children: ReactNode }) => {
	return <h1 className='text-center text-4xl font-bold my-6'>{children}</h1>
} 