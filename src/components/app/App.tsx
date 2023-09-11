import { Pagination } from '@nextui-org/react';
import { ReportCard } from '../layout/report-card';
import { Grid } from '../layout/Grid';
import { usePagination } from '../../hooks/usePagination';
import { SearchForm } from '../common/search-form';
import { useReportsContext } from '../../providers/reports-provider';
import { useReports } from '../../hooks/useReports';

export const App = () => {
	const { max, offset, page, changePage } = usePagination()
	const [reports, isLoading] = useReports({ max, offset })

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
				<Pagination showControls isCompact showShadow radius='sm' total={10} initialPage={page} onChange={(page: number) => changePage(page)} />
			</div>
		</main>
	)
}
