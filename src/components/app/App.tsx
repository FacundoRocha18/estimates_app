import { Pagination, Spinner } from '@nextui-org/react';
import { ReportCard } from '../layout/report-card';
import { Grid } from '../layout/grid';
import { usePagination } from '../../hooks/usePagination';
import { useReports } from '../../hooks/useReports';

export const App = () => {
	const { max, offset, page, changePage } = usePagination()
	const [reports, isLoaded] = useReports({ max, offset })

	return (
		<section className='text-foreground flex flex-col items-center gap-4 p-4 min-h-full w-screen'>
			<Grid>
				{
					isLoaded
						?
						reports.map(report => (
							<ReportCard key={report.id} report={report} isLoaded={isLoaded} />
						))
						:
						<Spinner />
				}
			</Grid>
			<Pagination showControls isCompact radius='sm' total={10} initialPage={page} onChange={(page: number) => changePage(page)} />
		</section>
	)
}
