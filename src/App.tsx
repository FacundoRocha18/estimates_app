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

const URL = 'http://localhost:3000/reports/list';

const App = () => {
	const [reports, setReports] = useState<Report[]>([]);

	useEffect(() => {
		const headers = new Headers();
		headers.append('Cookie', 'session=eyJpZCI6ImM4Njk3MTUxLTc3ZDYtNDBkNC1hYjRhLTk5NmQ4ZmQ3NzMyOSJ9; session.sig=cZcMrB4yRFkYgkn8ZINWK3Sacwo')

		fetch(URL, { headers: headers, mode: 'no-cors' })
			.then((res) => res.json())
			.then((data: Report[]) => {
				setReports(data)
			})
	}, [])

	return (
		<>
			{
				reports.map(({ id, maker, images }: Report) => (
					<section>
						<p>{ id }</p>
						<p>{ maker }</p>
						<img src={`data:image/jpg;base64,${ images }`} />
					</section>
				))
			}
		</>
	)
}

export default App
