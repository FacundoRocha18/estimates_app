import './App.css'
import { useReports } from './hooks/useReports';

const App = () => {
	const reports = useReports()

	return (
		<>
			<div className='page'>
				<h1>Car sales reports</h1>
				<main>
					<section className='grid'>
						{
							reports.map(({ id, maker, model, images }) => (
								<div className='card' key={id}>
									<h2>{maker}</h2>
									<p>{model}</p>
									{
										images.map(({ id, content }) => (
											<img key={id} src={`data:image/jpg;base64,${content}`} />
										))
									}
								</div>
							))
						}
					</section>
				</main>
			</div>
		</>
	)
}

export default App
