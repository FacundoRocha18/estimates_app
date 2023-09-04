import { ReportCard } from '../layout/report-card';
import { Grid } from '../layout/grid';
import { useReports } from '../../hooks/useReports';
import { SearchForm } from '../common/search-form';
import { Pagination } from '@nextui-org/react';
import { usePagination } from '../../hooks/usePagination';

const App = () => {
	const { max, offset, page, changePage } = usePagination()
	const [reports, isLoading] = useReports({ max: max, offset: offset })
	
	return (
		<main className='dark text-foreground min-h-screen'>
			<div className='flex flex-col items-center gap-y-4 p-4 w-screen'>
				<SearchForm />
				<Grid>
					{
						reports.map(report => (
							<ReportCard key={report.id} report={report} isLoaded={isLoading} />
						))
					}
				</Grid>
				<Pagination showControls isCompact showShadow radius='sm' total={10} initialPage={page} onChange={(page: number) => changePage(page)}/>
			</div>
		</main>
	)
}

export default App
