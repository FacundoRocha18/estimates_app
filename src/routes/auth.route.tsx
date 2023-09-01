import { ReactNode } from "react"

export const Auth = ({ children }: { children: ReactNode } ) => {
	return (
		<section className="flex flex-col justify-center items-center min-h-screen">
			{
				children
			}
		</section>
	)
}