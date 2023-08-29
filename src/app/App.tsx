import { ReportCard } from '../components/ReportCard';
import { Grid } from '../components/Grid';
import { useReports } from '../hooks/useReports';

const App = () => {
	const [reports,] = useReports()

	return (
		<main className='dark text-foreground bg-primary-50 min-h-screen'>
			<div className='flex flex-col'>
				<h1 className='text-center text-4xl font-bold my-6'>Car sales reports</h1>
				<Grid>
					{
						reports.map(({ id, maker, model, images }) => (
							<ReportCard id={id} maker={maker} model={model} images={images} />
						))
					}
				</Grid>
			</div>
		</main>
	)
}

export default App
