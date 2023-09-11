'use client'
import { NextUIProvider } from "@nextui-org/react"
import { ReportsProvider } from "./reports-provider"

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReportsProvider>
			<NextUIProvider>
				{children}
			</NextUIProvider>
		</ReportsProvider>
	)
}