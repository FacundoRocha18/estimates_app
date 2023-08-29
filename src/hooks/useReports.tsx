import { useState, useEffect } from "react";
import { IReport } from "../interfaces/types";

export const useReports = (): IReport[] => {
	const [reports, setReports] = useState<IReport[]>([]);
	
	useEffect(() => {
		fetch(`http://localhost:3000/reports/list`)
			.then(response => response.json())
			.then(reports => setReports(reports))
			.catch(err => console.log(err))

	}, [])

	return reports;
}