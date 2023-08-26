import { useEffect, useState } from 'react'
import './App.css'
import { UUID } from 'crypto'

interface Report {
	id: UUID;
	maker: string;
	model: string;
	year: number;
	lng: number;
	lat: number;
	kilometers: number;
	price: number;
	approved: boolean;
	userId: UUID;
	images: string;
}

const App = () => {
	const [reports, setReports] = useState<Report[]>([]);

	useEffect(() => {
		const getReports = async () => {
			const requestSettings: RequestInit = {
				method: 'GET',
				mode: 'no-cors',
				redirect: 'follow',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				}
			}

			fetch("http://localhost:3000/reports/list", requestSettings)
				.then(response => response.text())
				.then(data => console.log(data))
				.catch(err => console.error(err))
		}

		getReports()
	}, [])

	return (
		<>
			<h1>Reports</h1>
			{
				reports.map(({ id, maker, images }: Report) => (
					<section>
						<p>{id}</p>
						<p>{maker}</p>
						<img src={`data:image/jpg;base64,${images}`} />
					</section>
				))
			}
		</>
	)
}

export default App
