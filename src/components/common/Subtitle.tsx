import { ReactNode } from "react"

export const Subtitle = ({ children }: { children: ReactNode }) => {
	return <h2 className="font-semibold text-2xl">{children}</h2>
}