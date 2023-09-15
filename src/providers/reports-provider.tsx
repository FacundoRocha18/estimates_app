/* eslint-disable react-refresh/only-export-components */
import { ReportsContext } from "../common/interfaces/types";
import { createContextCustom } from "../hooks/useContextCustom";
import { usePagination } from "../hooks/usePagination";
import { useReports } from "../hooks/useReports";

export const [useReportsContext, ContextProvider] = createContextCustom<ReportsContext>()

export const ReportsProvider = ({ children }: { children: React.ReactNode }) => {
	const { max, offset } = usePagination()
	const [reports, isLoading] = useReports({ max, offset })
	
	const providerValue: ReportsContext = {
		reports,
		isLoading
	}

	return <ContextProvider value={providerValue}>{children}</ContextProvider>
}