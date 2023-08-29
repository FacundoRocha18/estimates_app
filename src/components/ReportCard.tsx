import { Button, Card, CardHeader, CardBody, CardFooter, Image } from '@nextui-org/react'
import { IReport } from '../common/interfaces/types'

export const ReportCard = ({ id, maker, model, images }: Partial<IReport>) => {
	return (
		<Card key={id} className="rounded">
			<CardHeader className='flex-col items-start gap-1'>
				<h2 className="font-semibold text-2xl">{maker + ' ' + model}</h2>
			</CardHeader>
			<CardBody className="overflow-visible py-1 px-3">
				<Image alt={images[0].filename} className="object-cover rounded" src={`data:image/jpeg;base64,${images[0].content}`} isBlurred isZoomed radius='none'>
				</Image>
			</CardBody>
			<CardFooter>
				<Button className='w-full bg-lime-500 font-medium rounded'>See report info</Button>
			</CardFooter>
		</Card>
	)
}