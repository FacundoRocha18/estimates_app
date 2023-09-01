import { ReportCard } from '../layout/ReportCard';
import { Grid } from '../layout/Grid';
import { useReports } from '../../hooks/useReports';
import { SearchForm } from '../common/search-form';

const App = () => {
	const [reports,] = useReports()

	return (
		<main className='dark text-foreground bg--50 min-h-screen'>
			<div className='flex flex-col gap-y-4 p-4'>
				<SearchForm />
				<Grid>
					{
						reports.map(({ id, maker, model, images }) => (
							<ReportCard key={id} id={id} maker={maker} model={model} images={images} />
						))
					}
				</Grid>
			</div>
		</main>
	)
}

export default App
