import { useState, useEffect } from "react";
import { IReport, PaginationOptions } from "../common/interfaces/types";

export const useReports = ({ max, offset }: PaginationOptions): [IReport[], boolean] => {
	const [reports, setReports] = useState<IReport[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	
	useEffect(() => {
		fetch(`http://localhost:3000/reports/list?max=${max}&offset=${offset}`)
			.then(response => response.json())
			.then(reports => setReports(reports))
			.catch(err => console.log(err))
			.finally(() => setIsLoaded(true))

	}, [max, offset])

	return [reports, isLoaded];
}