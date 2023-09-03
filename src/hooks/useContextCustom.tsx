import { createContext, useContext } from "react"

export const createContextCustom = <A extends object | null>() => {
	const context = createContext<A | undefined>(undefined)

	const useContextCustom = () => {
		const c = useContext(context)
		
		if (c === undefined) throw new Error('useContextCustom must be inside a Provider with a value');
		
		return c
	}

	return [useContextCustom, context.Provider]
}