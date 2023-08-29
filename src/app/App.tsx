import { Grid } from '../components/Grid';
import { useReports } from '../hooks/useReports';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'

const App = () => {
	const [reports, isLoading] = useReports()

	return (
		<>
			<div>
				<h1 className='text-center'>Car sales reports</h1>
				<Grid>
					{
						reports.map(({ id, maker, model, images }) => (
							<Card key={id} className="py-4 rounded">
								<CardHeader className='flex-col items-start gap-1'>
									<h2 className="font-bold text-large">{maker}</h2>
									<p className="text-tiny">{model}</p>
								</CardHeader>
								<CardBody className="overflow-visible p-2">
									<Image alt={images[0].filename} className="object-cover rounded" src={`data:image/jpg;base64,${images[0].content}`}>
									</Image>
								</CardBody>
							</Card>
						))
					}
				</Grid>
			</div >
		</>
	)
}

export default App
