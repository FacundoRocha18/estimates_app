import { useState, useEffect } from "react";
import { IReport } from "../common/interfaces/types";
import { LIST_ALL_REPORTS_URL } from '../common/constants'

export const useReports = (): [IReport[], boolean] => {
	const [reports, setReports] = useState<IReport[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	
	useEffect(() => {
		fetch(LIST_ALL_REPORTS_URL)
			.then(response => response.json())
			.then(reports => setReports(reports))
			.catch(err => console.log(err))
			.finally(() => setIsLoaded(true))

	}, [])

	return [reports, isLoaded];
}