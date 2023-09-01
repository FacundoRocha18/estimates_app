import { ReportCard } from '../layout/ReportCard';
import { Grid } from '../layout/Grid';
import { useReports } from '../../hooks/useReports';
import { SearchForm } from '../common/search-form';

const App = () => {
	const [reports, isLoading] = useReports()

	return (
		<main className='dark text-foreground min-h-screen'>
			<div className='flex flex-col gap-y-4 p-4 w-screen'>
				<SearchForm />
				<Grid>
					{
						reports.map(report => (
							<ReportCard key={report.id} report={report} isLoaded={isLoading} />
						))
					}
				</Grid>
			</div>
		</main>
	)
}

export default App
