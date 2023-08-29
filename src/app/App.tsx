import { ReportCard } from '../components/ReportCard';
import { Grid } from '../components/Grid';
import { useReports } from '../hooks/useReports';
import { Title } from '../components/Title';
import { Signin } from '../components/Login';

const App = () => {
	const [reports,] = useReports()

	return (
		<main className='dark text-foreground bg--50 min-h-screen'>
			<div className='flex flex-col gap-y-4'>
				<Title>Car sales reports</Title>
				<Signin />
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
