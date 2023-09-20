import { ReactNode } from "react"

export const Subtitle = ({ children }: { children: ReactNode }) => {
	return <h2 className="font-medium text-lg">{children}</h2>
}